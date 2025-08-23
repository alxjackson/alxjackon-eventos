import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Calculator, MapPin, Car, DollarSign, Clock, AlertTriangle } from "lucide-react";
import { calculateQuotation, formatQuotationResult, QuotationRequest, QuotationResult } from "@/utils/quotationCalculator";

export const QuotationCalculator = () => {
  const [formData, setFormData] = useState<QuotationRequest>({
    destination: "",
    includesDJ: false,
    eventDate: "",
    eventDuration: 4
  });
  
  const [result, setResult] = useState<QuotationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = async () => {
    if (!formData.destination.trim()) {
      alert("Por favor ingresa el destino del evento");
      return;
    }

    setIsCalculating(true);
    
    // Simular cálculo (en producción aquí iría la API de geolocalización)
    setTimeout(() => {
      const quotationResult = calculateQuotation(formData);
      setResult(quotationResult);
      setIsCalculating(false);
    }, 1500);
  };

  const handleReset = () => {
    setResult(null);
    setFormData({
      destination: "",
      includesDJ: false,
      eventDate: "",
      eventDuration: 4
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Calculadora de Cotizaciones
          </span>
        </h1>
        <p className="text-gray-300">
          Sistema automático de cálculo de gastos extras para eventos fuera de CDMX/Toluca
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Formulario */}
        <Card className="bg-black/40 backdrop-blur-xl border border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Calculator className="w-5 h-5 text-purple-400" />
              Datos del Evento
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Destino */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-white font-medium">
                <MapPin className="w-4 h-4 inline mr-1" />
                Destino del Evento
              </Label>
              <Input
                id="destination"
                placeholder="Ej: Guadalajara, Jalisco"
                value={formData.destination}
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
            </div>

            {/* Incluye DJ */}
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="space-y-1">
                <Label className="text-white font-medium">¿El evento incluye DJ?</Label>
                <p className="text-sm text-gray-400">
                  Determina el punto de origen: {formData.includesDJ ? "CDMX" : "Toluca"}
                </p>
              </div>
              <Switch
                checked={formData.includesDJ}
                onCheckedChange={(checked) => setFormData({...formData, includesDJ: checked})}
              />
            </div>

            {/* Fecha del evento */}
            <div className="space-y-2">
              <Label htmlFor="eventDate" className="text-white font-medium">
                <Clock className="w-4 h-4 inline mr-1" />
                Fecha del Evento
              </Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData({...formData, eventDate: e.target.value})}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            {/* Duración */}
            <div className="space-y-2">
              <Label htmlFor="duration" className="text-white font-medium">
                Duración del Evento (horas)
              </Label>
              <Input
                id="duration"
                type="number"
                min="1"
                max="24"
                value={formData.eventDuration}
                onChange={(e) => setFormData({...formData, eventDuration: parseInt(e.target.value) || 4})}
                className="bg-white/10 border-white/20 text-white"
              />
            </div>

            {/* Origen calculado */}
            <div className="p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
              <Label className="text-blue-200 font-medium">Origen Calculado:</Label>
              <p className="text-white text-sm mt-1">
                {formData.includesDJ 
                  ? "Fresnos 10, La Casilda, Gustavo A. Madero, CDMX" 
                  : "Toluca de Lerdo, Edo. Méx."
                }
              </p>
            </div>

            {/* Botones */}
            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={isCalculating || !formData.destination.trim()}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                {isCalculating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4 mr-2" />
                    Calcular Cotización
                  </>
                )}
              </Button>
              
              {result && (
                <Button
                  onClick={handleReset}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Nuevo Cálculo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Resultado */}
        <Card className="bg-black/40 backdrop-blur-xl border border-white/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <DollarSign className="w-5 h-5 text-green-400" />
              Resultado de la Cotización
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!result ? (
              <div className="text-center py-12">
                <Car className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">
                  Completa los datos del evento y presiona "Calcular Cotización" para ver los gastos extras
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Información básica */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-gray-400 text-sm">Distancia Total</p>
                    <p className="text-white font-semibold">{result.distance} km</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-gray-400 text-sm">Combustible</p>
                    <p className="text-white font-semibold">{result.gasoline.liters}L</p>
                  </div>
                </div>

                {/* Alerta de pernocta */}
                {result.requiresOvernight && (
                  <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-yellow-200">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-medium">Requiere Pernocta</span>
                    </div>
                    <p className="text-yellow-100 text-sm mt-1">
                      La distancia o duración del evento requiere hospedaje y alimentación
                    </p>
                  </div>
                )}

                {/* Desglose */}
                <div className="space-y-3">
                  <h3 className="text-white font-medium">Desglose de Gastos:</h3>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Gasolina</span>
                    <span className="text-white font-medium">${result.breakdown.gasolina.toLocaleString()} MXN</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Peajes (ida y vuelta)</span>
                    <span className="text-white font-medium">${result.breakdown.peajes.toLocaleString()} MXN</span>
                  </div>
                  
                  {result.breakdown.hospedaje && (
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300">Hospedaje (1 noche)</span>
                      <span className="text-white font-medium">${result.breakdown.hospedaje.toLocaleString()} MXN</span>
                    </div>
                  )}
                  
                  {result.breakdown.alimentacion && (
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300">Alimentación</span>
                      <span className="text-white font-medium">${result.breakdown.alimentacion.toLocaleString()} MXN</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex justify-between items-center">
                    <span className="text-green-200 font-medium text-lg">TOTAL GASTOS EXTRAS:</span>
                    <Badge variant="secondary" className="bg-green-500 text-white text-lg px-4 py-2">
                      ${result.total.toLocaleString()} MXN
                    </Badge>
                  </div>
                </div>

                {/* Términos */}
                <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-4">
                  <h4 className="text-orange-200 font-medium mb-2">⚠️ Términos y Condiciones:</h4>
                  <ul className="text-orange-100 text-sm space-y-1">
                    <li>• Todos los costos son estimaciones aproximadas</li>
                    <li>• Los precios pueden variar según tráfico y fluctuaciones</li>
                    <li>• El monto final puede ajustarse el día del evento</li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
