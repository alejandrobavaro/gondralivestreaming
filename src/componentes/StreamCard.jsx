// StreamCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const StreamCard = ({ 
  type = 'upcoming', 
  stream = {}, 
  title = '',
  date = '',
  thumbnail = '',
  duration = '',
  views = 0,
  onClick = () => {}
}) => {
  // Unificar datos (puede venir como objeto stream o props individuales)
  const streamData = {
    title: title || stream.title || '',
    date: date || stream.date || '',
    thumbnail: thumbnail || stream.thumbnail || '/img/default-thumbnail.jpg',
    duration: duration || stream.duration || '',
    views: views || stream.views || 0
  };

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
      return dateString; // Si hay error con la fecha, devolver el string original
    }
  };

  const getBadge = () => {
    switch(type) {
      case 'live':
        return <span className="stream-badge live">● EN VIVO</span>;
      case 'upcoming':
        return <span className="stream-badge upcoming">PRÓXIMAMENTE</span>;
      default:
        return null;
    }
  };

  return (
    <div className={`stream-card ${type}`} onClick={onClick}>
      <div className="thumbnail-container">
        <img src={streamData.thumbnail} alt={streamData.title} />
        {getBadge()}
        {type === 'archive' && (
          <div className="stream-stats">
            <span>{streamData.duration}</span>
            <span>{streamData.views} vistas</span>
          </div>
        )}
      </div>
      <div className="stream-info">
        <h3>{streamData.title}</h3>
        <p className="stream-date">
          {formatDate(streamData.date)}
        </p>
      </div>
    </div>
  );
};

StreamCard.propTypes = {
  type: PropTypes.oneOf(['live', 'upcoming', 'archive']),
  stream: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    duration: PropTypes.string,
    views: PropTypes.number,
  }),
  title: PropTypes.string,
  date: PropTypes.string,
  thumbnail: PropTypes.string,
  duration: PropTypes.string,
  views: PropTypes.number,
  onClick: PropTypes.func,
};

export default StreamCard;