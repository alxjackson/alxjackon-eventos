import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Settings, 
  BarChart3, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  Mail,
  Shield,
  ArrowLeft
} from 'lucide-react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  role: 'admin' | 'organizer' | 'user';
  created_at: string;
}

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  capacity: number;
  price: number;
  status: 'draft' | 'active' | 'cancelled' | 'completed';
  bookings_count: number;
}

interface AdminStats {
  totalUsers: number;
  totalEvents: number;
  totalBookings: number;
  revenue: number;
}

export const Admin = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [stats, setStats] = useState<AdminStats>({
    totalUsers: 0,
    totalEvents: 0,
    totalBookings: 0,
    revenue: 0
  });
  const [users, setUsers] = useState<User[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data para demostración
  const mockStats: AdminStats = {
    totalUsers: 247,
    totalEvents: 12,
    totalBookings: 89,
    revenue: 125450
  };

  const mockUsers: User[] = [
    {
      id: '1',
      email: 'admin@alxjackson.com',
      first_name: 'Alex',
      last_name: 'Jackson',
      role: 'admin',
      created_at: '2025-01-15T10:00:00Z'
    },
    {
      id: '2',
      email: 'organizer@alxjackson.com',
      first_name: 'María',
      last_name: 'González',
      role: 'organizer',
      created_at: '2025-02-01T14:30:00Z'
    },
    {
      id: '3',
      email: 'user@example.com',
      first_name: 'Juan',
      last_name: 'Pérez',
      role: 'user',
      created_at: '2025-02-10T09:15:00Z'
    }
  ];

  const mockEvents: Event[] = [
    {
      id: '1',
      title: 'Tributo a Freddy Mercury',
      description: 'Una noche mágica reviviendo los mejores éxitos de Queen',
      event_date: '2025-09-15T20:00:00Z',
      location: 'Teatro Principal, Ciudad de México',
      capacity: 500,
      price: 850,
      status: 'active',
      bookings_count: 375
    },
    {
      id: '2',
      title: 'Michael Jackson Experience',
      description: 'El rey del pop revive en un espectáculo lleno de baile y música',
      event_date: '2025-09-22T19:30:00Z',
      location: 'Auditorio Nacional, Ciudad de México',
      capacity: 800,
      price: 1200,
      status: 'active',
      bookings_count: 600
    }
  ];

  useEffect(() => {
    checkAdminAccess();
  }, [user]);

  const checkAdminAccess = async () => {
    if (!user) {
      navigate('/auth');
      return;
    }

    // Simular verificación de rol admin
    // En producción, esto verificaría contra Supabase
    const userEmail = user.email;
    const adminEmails = ['admin@alxjackson.com', 'alex@alxjackson.com'];
    
    if (adminEmails.includes(userEmail || '')) {
      setIsAdmin(true);
      loadDashboardData();
    } else {
      toast({
        title: "Acceso denegado",
        description: "No tienes permisos de administrador",
        variant: "destructive",
      });
      navigate('/');
    }
  };

  const loadDashboardData = async () => {
    try {
      // Simular carga de datos
      setTimeout(() => {
        setStats(mockStats);
        setUsers(mockUsers);
        setEvents(mockEvents);
        setLoading(false);
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos del dashboard",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  const handleRoleChange = async (userId: string, newRole: 'admin' | 'organizer' | 'user') => {
    try {
      setUsers(prev => prev.map(user => 
        user.id === userId ? { ...user, role: newRole } : user
      ));

      toast({
        title: "Rol actualizado",
        description: "El rol del usuario ha sido actualizado exitosamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el rol del usuario",
        variant: "destructive",
      });
    }
  };

  const handleEventStatusChange = async (eventId: string, newStatus: 'draft' | 'active' | 'cancelled' | 'completed') => {
    try {
      setEvents(prev => prev.map(event => 
        event.id === eventId ? { ...event, status: newStatus } : event
      ));

      toast({
        title: "Estado actualizado",
        description: "El estado del evento ha sido actualizado exitosamente",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado del evento",
        variant: "destructive",
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-600';
      case 'organizer': return 'bg-blue-600';
      case 'user': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-600';
      case 'draft': return 'bg-yellow-600';
      case 'cancelled': return 'bg-red-600';
      case 'completed': return 'bg-gray-600';
      default: return 'bg-gray-600';
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="text-center">
            <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <CardTitle className="text-white">Acceso Denegado</CardTitle>
            <CardDescription className="text-gray-300">
              No tienes permisos de administrador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate('/')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link 
              to="/"
              className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors bg-white/10 px-4 py-2 rounded-full backdrop-blur-lg border border-white/20 hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4" />
              Inicio
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard Admin</h1>
              <p className="text-gray-300">Panel de control de AlxJackson</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-purple-400" />
            <span className="text-white font-medium">Administrador</span>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg border border-white/20">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-purple-500">
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="users" className="text-white data-[state=active]:bg-purple-500">
              <Users className="w-4 h-4 mr-2" />
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="events" className="text-white data-[state=active]:bg-purple-500">
              <Calendar className="w-4 h-4 mr-2" />
              Eventos
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-purple-500">
              <Settings className="w-4 h-4 mr-2" />
              Configuración
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Usuarios</CardTitle>
                  <Users className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalUsers}</div>
                  <p className="text-xs text-gray-400">+12% desde el mes pasado</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Eventos Activos</CardTitle>
                  <Calendar className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalEvents}</div>
                  <p className="text-xs text-gray-400">3 próximos este mes</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Total Reservas</CardTitle>
                  <Eye className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalBookings}</div>
                  <p className="text-xs text-gray-400">+23% desde el mes pasado</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white">Ingresos</CardTitle>
                  <BarChart3 className="h-4 w-4 text-purple-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{formatCurrency(stats.revenue)}</div>
                  <p className="text-xs text-gray-400">+18% desde el mes pasado</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Eventos Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">{event.title}</p>
                          <p className="text-gray-400 text-sm">{formatDate(event.event_date)}</p>
                        </div>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Usuarios Recientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">
                            {user.first_name} {user.last_name}
                          </p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                        <Badge className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Gestión de Usuarios</CardTitle>
                <CardDescription className="text-gray-300">
                  Administra roles y permisos de usuarios
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">
                          {user.first_name} {user.last_name}
                        </p>
                        <p className="text-gray-400 text-sm">{user.email}</p>
                        <p className="text-gray-500 text-xs">
                          Registrado: {formatDate(user.created_at)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={user.role}
                          onChange={(e) => handleRoleChange(user.id, e.target.value as any)}
                          className="bg-white/10 border border-white/20 text-white rounded px-3 py-1 text-sm"
                        >
                          <option value="user">User</option>
                          <option value="organizer">Organizer</option>
                          <option value="admin">Admin</option>
                        </select>
                        <Badge className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-white">Gestión de Eventos</CardTitle>
                  <CardDescription className="text-gray-300">
                    Administra eventos y su estado
                  </CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Nuevo Evento
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex-1">
                        <p className="text-white font-medium">{event.title}</p>
                        <p className="text-gray-400 text-sm">{event.location}</p>
                        <p className="text-gray-500 text-xs">
                          {formatDate(event.event_date)} • {event.bookings_count}/{event.capacity} reservas
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{formatCurrency(event.price)}</span>
                        <select
                          value={event.status}
                          onChange={(e) => handleEventStatusChange(event.id, e.target.value as any)}
                          className="bg-white/10 border border-white/20 text-white rounded px-3 py-1 text-sm"
                        >
                          <option value="draft">Borrador</option>
                          <option value="active">Activo</option>
                          <option value="cancelled">Cancelado</option>
                          <option value="completed">Completado</option>
                        </select>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="text-white hover:bg-white/10">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400 hover:bg-red-500/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Configuración de Email
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Configura templates y SMTP personalizado
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Servidor SMTP</Label>
                    <Input 
                      placeholder="smtp.gmail.com" 
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Puerto</Label>
                    <Input 
                      placeholder="587" 
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Email de envío</Label>
                    <Input 
                      placeholder="noreply@alxjackson.com" 
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Guardar Configuración
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">Template de Bienvenida</CardTitle>
                  <CardDescription className="text-gray-300">
                    Personaliza el email de bienvenida
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white">Asunto</Label>
                    <Input 
                      defaultValue="¡Bienvenido a AlxJackson!" 
                      className="bg-white/10 border-white/20 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Mensaje</Label>
                    <Textarea 
                      defaultValue="Gracias por unirte a AlxJackson. Prepárate para experiencias únicas de entretenimiento."
                      className="bg-white/10 border-white/20 text-white min-h-[100px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Actualizar Template
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
