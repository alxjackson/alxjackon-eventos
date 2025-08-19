import React from 'react';

interface EmailTemplateProps {
  userName?: string;
  eventTitle?: string;
  eventDate?: string;
  eventLocation?: string;
  bookingId?: string;
}

// Template de bienvenida
export const WelcomeEmailTemplate: React.FC<EmailTemplateProps> = ({ userName }) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
          borderRadius: '50%',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          🎭
        </div>
        <h1 style={{
          margin: '0 0 10px',
          fontSize: '32px',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          ¡Bienvenido a AlxJackson!
        </h1>
        <p style={{
          margin: '0',
          fontSize: '18px',
          opacity: '0.9'
        }}>
          Tu plataforma de entretenimiento premium
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '24px',
          marginBottom: '20px'
        }}>
          Hola {userName || 'Amigo'}! ✨
        </h2>
        
        <p style={{
          color: '#cbd5e1',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '20px'
        }}>
          Gracias por unirte a <strong style={{ color: '#8b5cf6' }}>AlxJackson</strong>, 
          donde cada evento es una experiencia única e inolvidable.
        </p>

        <p style={{
          color: '#cbd5e1',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Prepárate para vivir momentos mágicos con los mejores artistas del entretenimiento. 
          Desde tributos épicos hasta experiencias VIP exclusivas, tenemos algo especial para ti.
        </p>

        <div style={{
          backgroundColor: '#1e293b',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          border: '1px solid #334155'
        }}>
          <h3 style={{
            color: '#8b5cf6',
            fontSize: '18px',
            marginBottom: '15px'
          }}>
            🎪 Lo que te espera:
          </h3>
          <ul style={{
            color: '#cbd5e1',
            fontSize: '14px',
            lineHeight: '1.6',
            paddingLeft: '20px'
          }}>
            <li>Eventos exclusivos con artistas de renombre</li>
            <li>Experiencias VIP y acceso premium</li>
            <li>Reservas fáciles y confirmación instantánea</li>
            <li>Notificaciones de eventos próximos</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'transform 0.2s'
          }}>
            🎟️ Explorar Eventos
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#0f172a',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{
          color: '#64748b',
          fontSize: '14px',
          margin: '0 0 10px'
        }}>
          © 2025 AlxJackson Entertainment Platform
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '12px',
          margin: '0'
        }}>
          Si no deseas recibir estos emails, puedes{' '}
          <a href="#" style={{ color: '#8b5cf6' }}>darte de baja aquí</a>
        </p>
      </div>
    </div>
  );
};

// Template de confirmación de reserva
export const BookingConfirmationTemplate: React.FC<EmailTemplateProps> = ({ 
  userName, 
  eventTitle, 
  eventDate, 
  eventLocation, 
  bookingId 
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          ✅
        </div>
        <h1 style={{
          margin: '0 0 10px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          ¡Reserva Confirmada!
        </h1>
        <p style={{
          margin: '0',
          fontSize: '16px',
          opacity: '0.9'
        }}>
          Tu lugar está asegurado
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '22px',
          marginBottom: '20px'
        }}>
          Hola {userName || 'Amigo'}! 🎉
        </h2>
        
        <p style={{
          color: '#cbd5e1',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Tu reserva ha sido <strong style={{ color: '#10b981' }}>confirmada exitosamente</strong>. 
          ¡Prepárate para una experiencia increíble!
        </p>

        {/* Event Details */}
        <div style={{
          backgroundColor: '#1e293b',
          padding: '25px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #334155'
        }}>
          <h3 style={{
            color: '#8b5cf6',
            fontSize: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            📅 Detalles del Evento
          </h3>
          
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#ffffff' }}>Evento:</strong>
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              {eventTitle || 'Evento Especial'}
            </span>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#ffffff' }}>Fecha:</strong>
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              {eventDate || 'Por confirmar'}
            </span>
          </div>
          
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#ffffff' }}>Ubicación:</strong>
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              {eventLocation || 'Por confirmar'}
            </span>
          </div>
          
          <div>
            <strong style={{ color: '#ffffff' }}>ID de Reserva:</strong>
            <span style={{ 
              color: '#10b981', 
              marginLeft: '10px',
              fontFamily: 'monospace',
              backgroundColor: '#0f172a',
              padding: '2px 8px',
              borderRadius: '4px'
            }}>
              {bookingId || 'ALX-' + Math.random().toString(36).substr(2, 9).toUpperCase()}
            </span>
          </div>
        </div>

        {/* Important Info */}
        <div style={{
          backgroundColor: '#fbbf24',
          color: '#92400e',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h4 style={{
            margin: '0 0 10px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            ⚠️ Información Importante
          </h4>
          <ul style={{
            margin: '0',
            paddingLeft: '20px',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            <li>Llega 30 minutos antes del evento</li>
            <li>Presenta este email como comprobante</li>
            <li>Las reservas no tienen cancelación ni devolución</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            marginRight: '10px'
          }}>
            📱 Ver en App
          </a>
          <a href="#" style={{
            display: 'inline-block',
            backgroundColor: '#374151',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            📧 Contactar Soporte
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#0f172a',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{
          color: '#64748b',
          fontSize: '14px',
          margin: '0 0 10px'
        }}>
          © 2025 AlxJackson Entertainment Platform
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '12px',
          margin: '0'
        }}>
          ¿Necesitas ayuda? Contáctanos en{' '}
          <a href="mailto:soporte@alxjackson.com" style={{ color: '#8b5cf6' }}>
            soporte@alxjackson.com
          </a>
        </p>
      </div>
    </div>
  );
};

// Template de recordatorio de evento
export const EventReminderTemplate: React.FC<EmailTemplateProps> = ({ 
  userName, 
  eventTitle, 
  eventDate, 
  eventLocation 
}) => {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#0f172a',
      color: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '32px'
        }}>
          ⏰
        </div>
        <h1 style={{
          margin: '0 0 10px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          ¡Tu evento es mañana!
        </h1>
        <p style={{
          margin: '0',
          fontSize: '16px',
          opacity: '0.9'
        }}>
          No te lo pierdas
        </p>
      </div>

      {/* Content */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{
          color: '#ffffff',
          fontSize: '22px',
          marginBottom: '20px'
        }}>
          Hola {userName || 'Amigo'}! 🎭
        </h2>
        
        <p style={{
          color: '#cbd5e1',
          fontSize: '16px',
          lineHeight: '1.6',
          marginBottom: '30px'
        }}>
          Este es un recordatorio amistoso de que tu evento 
          <strong style={{ color: '#f59e0b' }}> {eventTitle || 'especial'} </strong>
          es mañana. ¡Esperamos verte allí!
        </p>

        {/* Event Details */}
        <div style={{
          backgroundColor: '#1e293b',
          padding: '25px',
          borderRadius: '12px',
          marginBottom: '30px',
          border: '1px solid #334155'
        }}>
          <h3 style={{
            color: '#f59e0b',
            fontSize: '20px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            📍 Detalles del Evento
          </h3>
          
          <div style={{ marginBottom: '15px' }}>
            <strong style={{ color: '#ffffff' }}>📅 Cuándo:</strong>
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              {eventDate || 'Mañana'}
            </span>
          </div>
          
          <div>
            <strong style={{ color: '#ffffff' }}>📍 Dónde:</strong>
            <span style={{ color: '#cbd5e1', marginLeft: '10px' }}>
              {eventLocation || 'Ubicación por confirmar'}
            </span>
          </div>
        </div>

        {/* Checklist */}
        <div style={{
          backgroundColor: '#065f46',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px'
        }}>
          <h4 style={{
            color: '#ffffff',
            margin: '0 0 15px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            ✅ Lista de preparación:
          </h4>
          <ul style={{
            color: '#d1fae5',
            margin: '0',
            paddingLeft: '20px',
            fontSize: '14px',
            lineHeight: '1.6'
          }}>
            <li>Confirma la ubicación y hora</li>
            <li>Llega 30 minutos antes</li>
            <li>Trae tu confirmación de reserva</li>
            <li>¡Prepárate para una experiencia increíble!</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="#" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
            color: '#ffffff',
            padding: '15px 30px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>
            🗺️ Ver Ubicación
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#0f172a',
        padding: '30px 20px',
        textAlign: 'center',
        borderTop: '1px solid #334155'
      }}>
        <p style={{
          color: '#64748b',
          fontSize: '14px',
          margin: '0 0 10px'
        }}>
          © 2025 AlxJackson Entertainment Platform
        </p>
        <p style={{
          color: '#64748b',
          fontSize: '12px',
          margin: '0'
        }}>
          ¡Nos vemos mañana! 🎉
        </p>
      </div>
    </div>
  );
};
