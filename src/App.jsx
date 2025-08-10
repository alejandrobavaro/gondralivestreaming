import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import StreamArchive from './componentes/StreamArchive';
import LiveStream from './componentes/LiveStream';
import MainNovedades from './componentes/MainNovedades';
import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import ErrorBoundary from './componentes/ErrorBoundary';
import './assets/scss/estilo.scss';

/**
 * COMPONENTE PRINCIPAL DE LA APLICACIÓN (App.jsx)
 * 
 * Funcionalidades:
 * 1. Configura el enrutamiento de toda la aplicación
 * 2. Estructura base del layout (Header > Main > Footer)
 * 3. Manejo global de errores con ErrorBoundary
 * 4. Incluye el botón flotante de WhatsApp
 * 
 * Rutas disponibles:
 * - / : Página principal con contenido de streaming
 * - /archivo : Transmisiones anteriores
 * - /live : Reproductor de transmisión en vivo
 * - /novedades : Próximos eventos y noticias
 * - /contacto : Formulario de contacto
 */
function App() {
  return (
    <Router>
      <div className="app-wrapper streaming-mode">
        <Header />
        
        <main>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/archivo" element={<StreamArchive />} />
              <Route path="/live" element={<LiveStream />} />
              <Route path="/novedades" element={<MainNovedades />} />
              <Route path="/contacto" element={<Contacto />} />
              
              {/* Ruta de fallback para páginas no encontradas */}
              <Route path="*" element={<MainContent />} />
            </Routes>
          </ErrorBoundary>
        </main>
        
        <Footer />
        <MainWhatsappIcon />
      </div>
    </Router>
  );
}

export default App;