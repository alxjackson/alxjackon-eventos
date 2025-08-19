import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, X } from "lucide-react";

export const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      label: "Llamar",
      action: () => window.open("tel:+525512345678"),
      color: "bg-green-500 hover:bg-green-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open("https://wa.me/525512345678?text=Hola, me interesa contratar un show para mi evento"),
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open("mailto:contacto@alxjackson.com?subject=Consulta sobre evento"),
      color: "bg-blue-500 hover:bg-blue-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Opciones de contacto */}
      <div className={`flex flex-col gap-3 mb-4 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        {contactOptions.map((option, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap">
              {option.label}
            </span>
            <Button
              onClick={option.action}
              className={`w-12 h-12 rounded-full ${option.color} shadow-lg hover:scale-110 transition-all duration-200`}
            >
              <option.icon className="w-5 h-5 text-white" />
            </Button>
          </div>
        ))}
      </div>

      {/* Botón principal */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600 rotate-45' 
            : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </Button>

      {/* Pulso animado cuando está cerrado */}
      {!isOpen && (
        <div className="absolute inset-0 w-16 h-16 rounded-full bg-purple-500/30 animate-ping"></div>
      )}
    </div>
  );
};
