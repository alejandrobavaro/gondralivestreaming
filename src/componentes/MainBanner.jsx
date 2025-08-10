import React from 'react';

/**
 * COMPONENTE MainBanner - Ahora para streaming
 * 
 * Props:
 * - title: Título principal
 * - subtitle: Subtítulo
 * - isStreaming: Booleano para mostrar estado
 */
const MainBanner = ({ title, subtitle, isStreaming }) => {
  return (
    <div className="main-banner streaming-banner">
     <img src="/img/02-logos/logogondralivestreaming4.png" alt="" />
      <div className="banner-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {isStreaming && (
          <div className="streaming-status">
            <span className="live-pulse">●</span> EN VIVO AHORA
          </div>
        )}
      </div>
    </div>
  );
};

export default MainBanner;