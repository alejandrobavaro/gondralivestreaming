import React from 'react';
import PropTypes from 'prop-types';
import "../assets/scss/_03-Componentes/_StreamCard.scss";

/**
 * COMPONENTE STREAMCARD - Tarjeta para transmisiones
 * 
 * Funcionalidades:
 * 1. Muestra tarjetas para streams (en vivo, próximos o archivados)
 * 2. Badge dinámico según tipo de stream
 * 3. Información completa (título, fecha, estadísticas)
 * 4. Diseño responsive y hover effects
 * 
 * Uso:
 * <StreamCard 
 *   type="archive" 
 *   stream={{
 *     title: "Concierto Especial",
 *     date: "2023-12-15T21:00:00",
 *     thumbnail: "/img/stream1.jpg",
 *     views: 1250,
 *     duration: "1:45:22"
 *   }}
 *   onClick={() => handleSelect(stream.id)}
 * />
 */
const StreamCard = ({ 
  type = 'upcoming',
  stream = {}, 
  onClick = () => {}
}) => {
  // Datos con valores por defecto
  const {
    title = 'Título no disponible',
    date = '',
    thumbnail = '/img/default-thumbnail.jpg',
    duration = '0:00',
    views = 0
  } = stream;

  // Formatea la fecha en español
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return 'Fecha no disponible';
    }
  };

  // Badge según tipo de stream
  const renderBadge = () => {
    switch(type) {
      case 'live':
        return (
          <span className="stream-badge live">
            ● EN VIVO
            <span className="pulse-dot"></span>
          </span>
        );
      case 'upcoming':
        return <span className="stream-badge upcoming">PRÓXIMAMENTE</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`stream-card ${type}`} onClick={onClick}>
      <div className="thumbnail-container">
        <img src={thumbnail} alt={`Miniatura: ${title}`} />
        {renderBadge()}
        
        {/* Estadísticas para streams archivados */}
        {type === 'archive' && (
          <div className="stream-stats">
            <span className="duration">{duration}</span>
            <span className="views">{views.toLocaleString()} vistas</span>
          </div>
        )}
      </div>
      
      <div className="stream-info">
        <h3 className="title">{title}</h3>
        <p className="date">{formatDate(date)}</p>
      </div>
    </div>
  );
};

StreamCard.propTypes = {
  type: PropTypes.oneOf(['live', 'upcoming', 'archive']),
  stream: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    thumbnail: PropTypes.string,
    duration: PropTypes.string,
    views: PropTypes.number
  }),
  onClick: PropTypes.func
};

export default StreamCard;