// StreamArchive.jsx
import React from 'react';
import PropTypes from 'prop-types';
import StreamCard from './StreamCard';

const StreamArchive = ({ streams = [], title = 'Archivo de Streams' }) => {
  return (
    <section className="stream-archive">
      <h2 className="section-title">{title}</h2>
      <div className="archive-grid">
        {streams.map(stream => (
          <StreamCard
            key={stream.id}
            type="archive"
            stream={stream}
            onClick={() => console.log('Ver stream', stream.id)}
          />
        ))}
      </div>
    </section>
  );
};

StreamArchive.propTypes = {
  streams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      views: PropTypes.number,
      duration: PropTypes.string
    })
  ),
  title: PropTypes.string
};

export default StreamArchive;