import React from 'react';
import PropTypes from 'prop-types';
import StreamCard from './StreamCard';
import "../assets/scss/_03-Componentes/_StreamArchive.scss";

/**
 * COMPONENTE STREAM ARCHIVE - Muestra transmisiones pasadas
 * 
 * Funcionalidades:
 * 1. Muestra grid de streams archivados
 * 2. Incluye título de sección
 * 3. Utiliza el componente StreamCard para cada item
 * 4. Diseño responsive (1-3 columnas)
 * 
 * Props:
 * - streams: Array de objetos con streams pasados
 * - title: Título de la sección (opcional)
 */
const StreamArchive = ({ streams = [], title = 'Archivo de Streams' }) => {
  // Datos de ejemplo si no se proporcionan streams
  const demoStreams = [
    {
      id: 1,
      title: "Concierto de Almango - Edición Especial",
      date: "2023-10-15T21:00:00",
      thumbnail: "../../public/img/05-gif/web 1_1.gif",
      views: 1250,
      duration: "1:45:22"
    },
    {
      id: 2,
      title: "Sesión Acústica en Vivo",
      date: "2023-09-28T20:30:00",
      thumbnail: "../../public/img/04-img-banners/banner16.png",
      views: 892,
      duration: "1:12:10"
    },
    {
      id: 3,
      title: "Entrevista y Presentación de Nuevo Álbum",
      date: "2023-08-05T19:00:00",
      thumbnail: "../../public/img/05-gif/web 1_2.gif",
      views: 1532,
      duration: "2:05:45"
    },
    {
      id: 4,
      title: "Tutorial: Producción Musical con Gondra",
      date: "2023-07-22T18:00:00",
      thumbnail: "../../public/img/04-img-banners/banner7.png",
      views: 2105,
      duration: "1:30:15"
    },
    {
      id: 5,
      title: "Stream de Gaming con Almango",
      date: "2023-06-10T22:00:00",
      thumbnail: "../../public/img/05-gif/web 1_4.gif",
      views: 745,
      duration: "3:22:18"
    },
    {
      id: 6,
      title: "Concierto Aniversario Gondra World",
      date: "2023-05-20T21:30:00",
      thumbnail: "../../public/img/04-img-banners/banner20.png",
      views: 1842,
      duration: "2:45:00"
    }
  ];

  // Usamos los streams proporcionados o los de demo
  const streamsToShow = streams.length > 0 ? streams : demoStreams;

  return (
    <section className="stream-archive">
      <h2 className="section-title">{title}</h2>
      <div className="archive-grid">
        {streamsToShow.map(stream => (
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