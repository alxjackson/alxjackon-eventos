import { Music, Sparkles } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo animado */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 animate-bounce">
            <Music className="w-12 h-12 text-white animate-pulse" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-spin">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Texto */}
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
          AlxJackson
        </h2>
        <p className="text-gray-300 text-lg mb-8">Cargando experiencia premium...</p>

        {/* Barra de progreso animada */}
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full animate-loading-bar"></div>
        </div>

        {/* Puntos de carga */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
        </div>
      </div>
    </div>
  );
};
