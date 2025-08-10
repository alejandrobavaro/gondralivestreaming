import React from 'react';
import PropTypes from 'prop-types';
import "../assets/scss/_03-Componentes/_LiveStream.scss";

const LiveStream = ({ streamData = {} }) => {
  // CONFIGURACIÓN DEMO - Cambiar a false para producción
  const isLiveDemo = true;
  
  // Datos de demostración
  const demoData = {
    isLive: false,
    nextStream: {
      date: "2023-12-15T21:00:00",
      title: "Concierto Especial de Fin de Año",
      description: "Únete para nuestro evento especial con invitados sorpresa"
    },
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    title: "Transmisión en vivo",
    viewers: 0,
    thumbnail: "/img/demo-thumbnail.jpg"
  };

//   Para usar el componente:
//   En producción:
  
//   Cambia isLiveDemo a false
  
//   Proporciona los datos reales via streamData prop:
  
//   jsx
//   <LiveStream streamData={{
//     isLive: true,
//     embedUrl: "TU_URL_DE_YOUTUBE_O_TWITCH",
//     title: "Título de tu transmisión",
//     viewers: 1250,
//     thumbnail: "/ruta/a/tu/miniatura.jpg"
//   }} />
//   En desarrollo:
  
//   Puedes dejar isLiveDemo en true para ver el modo de demostración
  
//   Cambia los datos en el objeto demoData para probar diferentes estados



  // Datos combinados (props tienen prioridad sobre demo)
  const {
    isLive = isLiveDemo ? demoData.isLive : false,
    title = isLiveDemo ? demoData.title : 'Transmisión en vivo',
    viewers = isLiveDemo ? demoData.viewers : 0,
    thumbnail = isLiveDemo ? demoData.thumbnail : '/img/default-thumbnail.jpg',
    embedUrl = isLiveDemo ? demoData.embedUrl : '',
    nextStream = isLiveDemo ? demoData.nextStream : null
  } = streamData;

  // Calcula tiempo restante para próxima transmisión
  const calculateTimeLeft = () => {
    if (!nextStream) return { hours: 0, minutes: 0 };
    
    const difference = new Date(nextStream.date) - new Date();
    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);
    
    return () => clearTimeout(timer);
  });

  return (
    <section className="publico-live-stream">
      {/* Encabezado con estado */}
      <div className="stream-header">
        <h2>{isLive ? 'TRANSMISIÓN EN VIVO' : 'PRÓXIMO STREAM'}</h2>
        {isLive && <span className="live-badge">● EN VIVO</span>}
      </div>

      {/* Contenedor principal */}
      <div className="video-container">
        {isLive ? (
          <iframe 
            src={embedUrl} 
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        ) : (
          <div className="upcoming-stream">
            <div className="upcoming-thumbnail">
              <img
                src="/img/02-logos/logogondralivestreaming4.png"
                alt="Próxima transmisión"
                className="logo-thumbnail"
              />
            </div>
            {nextStream && (
              <div className="countdown-container">
                <h3>PRÓXIMAMENTE: {nextStream.title}</h3>
                <p>{nextStream.description}</p>
                <div className="countdown">
                  <span>{timeLeft.hours}h {timeLeft.minutes}m</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Información adicional */}
      {isLive ? (
        <>
          <h1 className="stream-title">{title}</h1>
          <div className="stream-info">
            <span className="viewer-count">👁️ {viewers} espectadores</span>
          </div>
        </>
      ) : (
        <div className="upcoming-info">
          <h3>No hay transmisión en este momento</h3>
          <p>Próximo stream: {nextStream?.date ? new Date(nextStream.date).toLocaleString() : 'Próximamente'}</p>
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
    thumbnail: PropTypes.string,
    embedUrl: PropTypes.string,
    nextStream: PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  })
};

export default LiveStream;