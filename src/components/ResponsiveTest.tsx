import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Componente de prueba para validar responsividad
 * Este componente muestra cómo se adapta el layout en diferentes breakpoints
 */
export const ResponsiveTest: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header Responsive */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-600">
          Test de Responsividad
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
          Validación de breakpoints: móvil → tablet → desktop
        </p>
      </div>

      {/* Grid Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <Card key={item} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm sm:text-base">Card {item}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-gray-600">
                Contenido adaptativo para diferentes pantallas
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">Móvil</Badge>
                <Badge variant="outline" className="text-xs hidden sm:inline">Tablet</Badge>
                <Badge variant="outline" className="text-xs hidden lg:inline">Desktop</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Breakpoints Info */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
        <CardHeader>
          <CardTitle className="text-lg">Breakpoints Configurados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-white rounded border">
              <strong>Móvil</strong>
              <p className="text-gray-600">0px - 639px</p>
              <p className="text-xs">1 columna</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Tablet SM</strong>
              <p className="text-gray-600">640px - 767px</p>
              <p className="text-xs">2 columnas</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Desktop LG</strong>
              <p className="text-gray-600">1024px - 1279px</p>
              <p className="text-xs">3 columnas</p>
            </div>
            <div className="p-3 bg-white rounded border">
              <strong>Desktop XL</strong>
              <p className="text-gray-600">1280px+</p>
              <p className="text-xs">4 columnas</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Flex Responsive */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 p-4 bg-purple-100 rounded">
          <h3 className="font-semibold">Flex Column → Row</h3>
          <p className="text-sm text-gray-600">En móvil: columna vertical</p>
          <p className="text-sm text-gray-600">En tablet+: fila horizontal</p>
        </div>
        <div className="flex-1 p-4 bg-pink-100 rounded">
          <h3 className="font-semibold">Adaptativo</h3>
          <p className="text-sm text-gray-600">Layout se adapta automáticamente</p>
        </div>
      </div>

      {/* Hidden/Visible Elements */}
      <Card>
        <CardHeader>
          <CardTitle>Elementos Condicionales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="block sm:hidden text-purple-600 font-semibold">
              📱 Solo visible en MÓVIL
            </p>
            <p className="hidden sm:block lg:hidden text-blue-600 font-semibold">
              💻 Solo visible en TABLET
            </p>
            <p className="hidden lg:block text-green-600 font-semibold">
              🖥️ Solo visible en DESKTOP
            </p>
            <p className="text-gray-600 text-sm">
              Elementos se muestran/ocultan según el tamaño de pantalla
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResponsiveTest;
