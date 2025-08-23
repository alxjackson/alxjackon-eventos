import { Button } from "@/components/ui/button";
import { Mic, LogIn, UserPlus, LogOut, User } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden shadow-glow">
            <img 
              src="/2024-07-11-00-35-34-117.jpg" 
              alt="AlxJackson Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AlxJackson
            </h1>
            <p className="text-xs text-gray-600">Entertainment Platform</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link to="/terms" className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Términos
          </Link>
          <a href="#servicios" className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Servicios
          </a>
          <Link to="/quotations" className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Cotizaciones
          </Link>
          <Link to="/cancellation" className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Cancelaciones
          </Link>
          <Link to="/gallery" className="text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors">
            Galería
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="hero" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Mi Cuenta
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Perfil
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Mis Reservas
                </DropdownMenuItem>
                {(user?.email === 'admin@alxjackson.com' || user?.email === 'alex@alxjackson.com') && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Dashboard Admin
                      </Link>
                    </DropdownMenuItem>
                  </>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/auth">
                <Button variant="outline" size="sm" className="bg-purple-100/90 text-purple-700 font-semibold hover:text-purple-900 hover:bg-purple-200/90 border border-purple-300 hover:border-purple-500 transition-all duration-200 shadow-lg backdrop-blur-sm">
                  <LogIn className="w-4 h-4 mr-2" />
                  Iniciar Sesión
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="hero" size="sm">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Registrarse
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};