import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header';
import MainContent from './componentes/MainContent';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import MainWhatsappIcon from './componentes/MainWhatsappIcon';
import './assets/scss/estilo.scss';

function App() {
  return (
    <Router>
      <div className="app-wrapper streaming-mode">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <MainWhatsappIcon />
      </div>
    </Router>
  );
}

export default App;
