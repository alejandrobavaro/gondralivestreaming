// UpcomingStreams.jsx actualizado con estado de carga
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StreamCard from './StreamCard';
import "../assets/scss/_03-Componentes/_UpcomingStreams.scss";

/**
 * COMPONENTE UPCOMING-STREAMS
 * Muestra una grilla de próximas transmisiones con:
 * - Estado de carga
 * - Manejo de errores
 * - Grid responsive
 * 
 * Props:
 * - streams: Array de objetos con streams próximos
 * - loading: Booleano para estado de carga (opcional)
 * - error: Mensaje de error (opcional)
 */
const UpcomingStreams = ({ streams = [], loading = false, error = null }) => {
  // --- RENDERIZADO CONDICIONAL ---
  
  // Estado de error
  if (error) {
    return (
      <div className="upcoming-streams">
        <h2 className="section-title">Próximas Transmisiones</h2>
        <div className="error-message">
          ⚠️ {error.message || 'Error al cargar las transmisiones'}
        </div>
      </div>
    );
  }

  // Estado de carga
  if (loading) {
    return (
      <div className="upcoming-streams">
        <h2 className="section-title">Próximas Transmisiones</h2>
        <div className="streams-grid loading">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="stream-card-skeleton"></div>
          ))}
        </div>
      </div>
    );
  }

  // Estado normal
  return (
    <div className="upcoming-streams">
      <h2 className="section-title">Próximas Transmisiones</h2>
      <div className="streams-grid">
        {streams.map(stream => (
          <StreamCard
            key={stream.id}
            type="upcoming"
            stream={stream}
          />
        ))}
      </div>
    </div>
  );
};

UpcomingStreams.propTypes = {
  streams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.shape({
    message: PropTypes.string
  })
};

export default UpcomingStreams;