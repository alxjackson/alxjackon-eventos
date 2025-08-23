import { QuotationCalculator } from "@/components/QuotationCalculator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Quotations = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6">
          {/* Main Content */}
          <QuotationCalculator />
          
          {/* Back Button - Centered at Bottom */}
          <div className="flex justify-center mt-12 pb-8">
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={handleGoBack}
              className="bg-white/10 text-white hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Regresar
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
    </div>
  );
};
