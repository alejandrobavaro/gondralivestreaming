// MainContent.jsx
import React from 'react';
import MainBanner from './MainBanner';
import LiveStream from './LiveStream';
import UpcomingStreams from './UpcomingStreams';
import StreamArchive from './StreamArchive';

const MainContent = () => {
  // Datos de ejemplo con valores por defecto
  const currentStream = {
    isLive: true,
    title: "Transmición de Prueba",
    viewers: 1245,
    thumbnail: ".../../../../img/02-logos/logogondralivestreaming2.png",
    schedule: "Lunes y Miércoles 19:00"
  };

  const upcomingStreams = [
    {
      id: 1,
      title: "Ensayo en vivo de Almango Pop Covers",
      date: "2023-11-10T20:00:00",
      thumbnail: ".../../../../img/02-logos/logogondralivestreaming2.png",
    },
    {
      id: 2,
      title: "La Boda de Ale y Fabi en vivo",
      date: "2023-11-12T18:00:00",
      thumbnail: ".../../../../img/02-logos/logogondralivestreaming2.png",
    }
  ];

  const pastStreams = [
    {
      id: 1,
      title: "Banda Almango Ensayo en vivo en el estudio",
      date: "2023-10-15",
      views: 2450,
      duration: "1:45:22",
      thumbnail: ".../../../../img/02-logos/logogondralivestreaming2.png",
    }
  ];

  return (
    <div className="main-content streaming-layout">
      <MainBanner
        title="Gondra Live Streaming"
        subtitle="Transmisiones en vivo de Eventos / Programas / Bandas"
        isStreaming={currentStream.isLive}
      />

      <LiveStream streamData={currentStream} />

      <UpcomingStreams streams={upcomingStreams} />

      <StreamArchive 
        streams={pastStreams} 
        title="Transmisiones Anteriores" 
      />
    </div>
  );
};

export default MainContent;