import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    location: '',
    notes: ''
  });

  const timeSlots = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', 
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  const eventTypes = [
    'Boda', 'XV Años', 'Cumpleaños', 'Aniversario', 
    'Evento Corporativo', 'Graduación', 'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se integraría con Supabase para guardar la reservación
    const bookingData = {
      ...formData,
      date: selectedDate,
      time: selectedTime,
      status: 'pending'
    };
    
    // Por ahora, redirigir a WhatsApp con los datos
    const message = `Hola! Quiero hacer una reservación:
    
📅 Fecha: ${selectedDate}
⏰ Hora: ${selectedTime}
👤 Nombre: ${formData.name}
📱 Teléfono: ${formData.phone}
📧 Email: ${formData.email}
🎉 Tipo de evento: ${formData.eventType}
📍 Ubicación: ${formData.location}
📝 Notas: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/5215617184109?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="bg-white/10 backdrop-blur-lg border-white/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-white flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 text-purple-400" />
            Reservar Evento
          </CardTitle>
          <p className="text-white/80">Selecciona fecha, hora y completa tus datos</p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Selección de Fecha */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date" className="text-white font-semibold flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Fecha del Evento
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="bg-white/10 border-white/20 text-white"
                  required
                />
              </div>

              <div>
                <Label htmlFor="time" className="text-white font-semibold flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Hora de Inicio
                </Label>
                <select
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                  required
                >
                  <option value="">Seleccionar hora</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time} className="bg-gray-800">
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Información Personal */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white font-semibold flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Nombre Completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-white font-semibold flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Tu número de teléfono"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-white font-semibold flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="eventType" className="text-white font-semibold">
                  Tipo de Evento
                </Label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white"
                  required
                >
                  <option value="">Seleccionar tipo</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800">
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="location" className="text-white font-semibold flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Ubicación del Evento
              </Label>
              <Input
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white"
                placeholder="Dirección completa del evento"
                required
              />
            </div>

            <div>
              <Label htmlFor="notes" className="text-white font-semibold">
                Notas Adicionales
              </Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                className="bg-white/10 border-white/20 text-white"
                placeholder="Detalles especiales, número de invitados, preferencias musicales, etc."
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
                disabled={!selectedDate || !selectedTime}
              >
                Confirmar Reservación por WhatsApp
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => {
                  setSelectedDate('');
                  setSelectedTime('');
                  setFormData({
                    name: '', phone: '', email: '', eventType: '', location: '', notes: ''
                  });
                }}
              >
                Limpiar Formulario
              </Button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <p className="text-blue-300 text-sm text-center">
              📱 Tu reservación será procesada vía WhatsApp para confirmación inmediata
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CalendarBooking;
