import React from 'react';
import MainBanner from './MainBanner';
import LiveStream from './LiveStream';
import UpcomingStreams from './UpcomingStreams';
import StreamArchive from './StreamArchive';
import "../assets/scss/_03-Componentes/_MainContent.scss";

/**
 * COMPONENTE MAINCONTENT - Contenido principal de la plataforma
 * 
 * Funcionalidades:
 * 1. Organiza la estructura principal de la página
 * 2. Proporciona datos demo/configuración para:
 *    - Transmisión actual
 *    - Eventos próximos
 *    - Archivo histórico
 * 3. Integra todos los componentes de streaming
 * 
 * Configuración:
 * - Modificar los objetos currentStream, upcomingStreams y pastStreams
 * - Para transmisión real, cambiar isLive a true y proveer embedUrl
 */
const MainContent = () => {
  // CONFIGURACIÓN DE TRANSMISIÓN ACTUAL
  const currentStream = {
    isLive: false, // Cambiar a true para transmisión en vivo
    title: "Concierto Especial de Almango",
    viewers: 1250,
    thumbnail: "/img/stream-thumbnails/live-default.jpg",
    embedUrl: "https://www.youtube.com/embed/TU_ID_DE_TRANSMISION", // Reemplazar con tu URL
    nextStream: {
      date: "2023-12-15T21:00:00",
      title: "Evento Navideño Especial",
      description: "Transmisión con invitados sorpresa"
    }
  };

  // PRÓXIMOS EVENTOS
  const upcomingStreams = [
    {
      id: 1,
      title: "Almango Pop Covers - Ensayo en Vivo",
      date: "2023-11-10T20:00:00",
      thumbnail: "/img/stream-thumbnails/upcoming-1.jpg",
      description: "Repertorio de versiones acústicas"
    },
    {
      id: 2,
      title: "La Boda de Ale y Fabi - Transmisión Especial",
      date: "2023-11-12T18:00:00",
      thumbnail: "/img/stream-thumbnails/upcoming-2.jpg",
      description: "Ceremonia y recepción en vivo"
    },
    {
      id: 3,
      title: "Tutorial: Producción Musical",
      date: "2023-11-20T16:00:00",
      thumbnail: "/img/stream-thumbnails/upcoming-3.jpg",
      description: "Técnicas profesionales en el estudio"
    }
  ];

  // ARCHIVO HISTÓRICO
  const pastStreams = [
    {
      id: 1,
      title: "Almango - Ensayo en el Estudio",
      date: "2023-10-15T21:00:00",
      views: 2450,
      duration: "1:45:22",
      thumbnail: "/img/05-gif/logogondraworldanimado5.gif"
    },
    {
      id: 2,
      title: "Concierto Aniversario",
      date: "2023-09-28T20:30:00",
      views: 3200,
      duration: "2:15:10",
         thumbnail: "/img/05-gif/2iniciogondraworld-unscreen1.gif"
    },
    {
      id: 3,
      title: "Sesión de Grabación",
      date: "2023-08-10T18:00:00",
      views: 1850,
      duration: "1:30:45",
            thumbnail: "/img/05-gif/1logoanimadogif2a.gif"
    }
  ];

  return (
    <main className="main-content">
      {/* Banner principal */}
      <MainBanner
        title="Gondra Live Streaming"
        subtitle="Transmisiones en vivo de Eventos / Programas / Bandas"
        isStreaming={currentStream.isLive}
      />

      {/* Reproductor principal */}
      <LiveStream streamData={currentStream} />

      {/* Separador visual */}
      <div className="content-separator">
        <div className="separator-line"></div>
      </div>

      {/* Próximos eventos */}
      <UpcomingStreams 
        streams={upcomingStreams} 
        title="Próximas Transmisiones"
      />

      {/* Separador visual */}
      <div className="content-separator">
        <div className="separator-line"></div>
      </div>

      {/* Archivo histórico */}
      <StreamArchive 
        streams={pastStreams} 
        title="Transmisiones Anteriores"
      />
    </main>
  );
};

export default MainContent;