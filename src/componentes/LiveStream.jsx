import React from 'react';
import PropTypes from 'prop-types';

const LiveStream = ({ streamData = {} }) => {
  // Valores por defecto
  const {
    isLive = false,
    title = 'Transmisión en vivo',
    viewers = 0,
    thumbnail = '/img/default-thumbnail.jpg'
  } = streamData;

  return (
    <section className="publico-live-stream">
      <div className="stream-header">
        <h2>{isLive ? 'TRANSMISIÓN EN VIVO' : 'FUERA DEL AIRE'}</h2>
        {isLive && <span className="live-badge">● EN VIVO</span>}
      </div>

      <div className="video-container">
        {isLive ? (
          <>
            <img
              src={thumbnail}
              alt="Stream en vivo"
              className="stream-thumbnail"
            />
            <div className="viewer-count">👁️ {viewers} espectadores</div>
          </>
        ) : (
          <div className="offline-thumbnail">
            <img
              src="/img/02-logos/logogondralivestreaming4.png"
              alt="Logo Gondra Live Streaming"
              className="logo-thumbnail"
            />
          </div>
        )}
      </div>

      {isLive ? (
        <h1 className="stream-title">{title}</h1>
      ) : (
        <div className="offline-message">
          <h2>No hay transmisión en este momento</h2>
          <p>Vuelve más tarde para nuestro próximo stream</p>
        </div>
      )}
    </section>
  );
};

LiveStream.propTypes = {
  streamData: PropTypes.shape({
    isLive: PropTypes.bool,
    title: PropTypes.string,
    viewers: PropTypes.number,
    thumbnail: PropTypes.string
  })
};

export default LiveStream;
