// Calculadora de cotizaciones para eventos AlxJackson
export interface QuotationRequest {
  destination: string;
  includesDJ: boolean;
  eventDate: string;
  eventDuration: number; // horas
}

export interface QuotationResult {
  origin: string;
  destination: string;
  distance: number; // km ida y vuelta
  gasoline: {
    liters: number;
    cost: number;
  };
  tolls: number;
  accommodation?: number;
  meals?: number;
  breakdown: {
    gasolina: number;
    peajes: number;
    hospedaje?: number;
    alimentacion?: number;
  };
  total: number;
  requiresOvernight: boolean;
}

// Datos base del sistema
const VEHICLE_DATA = {
  model: "Nissan Versa Sense 2028",
  fuelEfficiency: 19, // km/L
  gasPrice: 23.60 // MXN por litro
};

const ORIGINS = {
  withDJ: "Fresnos 10, La Casilda, Gustavo A. Madero, CDMX",
  withoutDJ: "Toluca de Lerdo, Edo. Méx."
};

// Estimaciones de peajes comunes (ida)
const TOLL_ESTIMATES: Record<string, number> = {
  "toluca": 55,
  "puebla": 180,
  "cuernavaca": 85,
  "pachuca": 120,
  "queretaro": 220,
  "guadalajara": 450,
  "monterrey": 680,
  "default": 100 // estimación genérica
};

// Estimaciones de distancia (ida) desde CDMX/Toluca
const DISTANCE_ESTIMATES: Record<string, { fromCDMX: number; fromToluca: number }> = {
  "toluca": { fromCDMX: 65, fromToluca: 0 },
  "puebla": { fromCDMX: 130, fromToluca: 180 },
  "cuernavaca": { fromCDMX: 85, fromToluca: 120 },
  "pachuca": { fromCDMX: 90, fromToluca: 140 },
  "queretaro": { fromCDMX: 220, fromToluca: 160 },
  "guadalajara": { fromCDMX: 550, fromToluca: 490 },
  "monterrey": { fromCDMX: 920, fromToluca: 860 },
  "default": { fromCDMX: 150, fromToluca: 150 }
};

function estimateDistance(destination: string, includesDJ: boolean): number {
  const destKey = destination.toLowerCase();
  
  // Buscar coincidencia en ciudades conocidas
  for (const [city, distances] of Object.entries(DISTANCE_ESTIMATES)) {
    if (destKey.includes(city)) {
      return includesDJ ? distances.fromCDMX : distances.fromToluca;
    }
  }
  
  // Si no encuentra coincidencia, usar estimación por defecto
  return includesDJ ? DISTANCE_ESTIMATES.default.fromCDMX : DISTANCE_ESTIMATES.default.fromToluca;
}

function estimateTolls(destination: string): number {
  const destKey = destination.toLowerCase();
  
  // Buscar coincidencia en peajes conocidos
  for (const [city, toll] of Object.entries(TOLL_ESTIMATES)) {
    if (destKey.includes(city)) {
      return toll;
    }
  }
  
  return TOLL_ESTIMATES.default;
}

function requiresOvernight(distance: number, eventDuration: number): boolean {
  // Si la distancia es mayor a 300km (ida) o el evento dura más de 8 horas
  return distance > 300 || eventDuration > 8;
}

function calculateAccommodation(destination: string): number {
  const destKey = destination.toLowerCase();
  
  // Estimaciones de hospedaje por zona
  if (destKey.includes("guadalajara") || destKey.includes("monterrey")) {
    return 1200; // Hotel estándar en ciudades grandes
  } else if (destKey.includes("puebla") || destKey.includes("queretaro")) {
    return 800; // Hotel estándar en ciudades medianas
  } else {
    return 600; // Hotel básico en ciudades pequeñas
  }
}

function calculateMeals(overnight: boolean): number {
  if (overnight) {
    return 450; // Desayuno, comida y cena
  }
  return 0;
}

export function calculateQuotation(request: QuotationRequest): QuotationResult {
  const origin = request.includesDJ ? ORIGINS.withDJ : ORIGINS.withoutDJ;
  const oneWayDistance = estimateDistance(request.destination, request.includesDJ);
  const totalDistance = oneWayDistance * 2; // ida y vuelta
  
  // Cálculo de gasolina
  const litersNeeded = totalDistance / VEHICLE_DATA.fuelEfficiency;
  const gasolineCost = litersNeeded * VEHICLE_DATA.gasPrice;
  
  // Cálculo de peajes (ida y vuelta)
  const oneWayToll = estimateTolls(request.destination);
  const totalTolls = oneWayToll * 2;
  
  // Verificar si requiere pernocta
  const needsOvernight = requiresOvernight(oneWayDistance, request.eventDuration);
  
  // Cálculos adicionales
  const accommodationCost = needsOvernight ? calculateAccommodation(request.destination) : 0;
  const mealsCost = needsOvernight ? calculateMeals(true) : 0;
  
  // Desglose
  const breakdown = {
    gasolina: Math.round(gasolineCost),
    peajes: totalTolls,
    ...(accommodationCost > 0 && { hospedaje: accommodationCost }),
    ...(mealsCost > 0 && { alimentacion: mealsCost })
  };
  
  const total = gasolineCost + totalTolls + accommodationCost + mealsCost;
  
  return {
    origin,
    destination: request.destination,
    distance: totalDistance,
    gasoline: {
      liters: Math.round(litersNeeded * 100) / 100,
      cost: Math.round(gasolineCost)
    },
    tolls: totalTolls,
    accommodation: accommodationCost > 0 ? accommodationCost : undefined,
    meals: mealsCost > 0 ? mealsCost : undefined,
    breakdown,
    total: Math.round(total),
    requiresOvernight: needsOvernight
  };
}

export function formatQuotationResult(result: QuotationResult): string {
  let output = `
🎯 **COTIZACIÓN ALXJACKSON EVENTOS**

📍 **Origen:** ${result.origin}
📍 **Destino:** ${result.destination}
🚗 **Distancia total:** ${result.distance} km (ida y vuelta)
⛽ **Vehículo:** ${VEHICLE_DATA.model} (${VEHICLE_DATA.fuelEfficiency} km/L)

💰 **DESGLOSE DE GASTOS EXTRAS:**

• **Gasolina:** ${result.gasoline.liters}L × $${VEHICLE_DATA.gasPrice} = $${result.breakdown.gasolina.toLocaleString()} MXN
• **Peajes:** $${result.breakdown.peajes.toLocaleString()} MXN (ida y vuelta)`;

  if (result.breakdown.hospedaje) {
    output += `\n• **Hospedaje:** $${result.breakdown.hospedaje.toLocaleString()} MXN (1 noche)`;
  }
  
  if (result.breakdown.alimentacion) {
    output += `\n• **Alimentación:** $${result.breakdown.alimentacion.toLocaleString()} MXN`;
  }

  output += `\n\n🎯 **TOTAL GASTOS EXTRAS: $${result.total.toLocaleString()} MXN**

⚠️ **TÉRMINOS Y CONDICIONES:**
• Todos los costos son estimaciones aproximadas
• Los precios pueden variar según tráfico, desvíos o fluctuaciones en combustible
• Las tarifas de casetas pueden cambiar sin previo aviso
• El monto final puede ajustarse el día del evento
• El cliente acepta estos términos al solicitar la cotización`;

  return output;
}
