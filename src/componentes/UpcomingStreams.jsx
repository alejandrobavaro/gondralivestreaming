// UpcomingStreams.jsx
import React from 'react';
import PropTypes from 'prop-types';
import StreamCard from './StreamCard';
import "../assets/scss/_03-Componentes/_UpcomingStreams.scss";

const UpcomingStreams = ({ streams = [] }) => {
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
  )
};

export default UpcomingStreams;