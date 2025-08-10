import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/scss/_03-Componentes/_Footer.scss';

/**
 * COMPONENTE FOOTER - Pie de página para Gondra Live Streaming
 * 
 * Adaptado con:
 * - Enlaces relevantes para streaming
 * - Información de contacto
 * - Redes sociales
 * - Copyright
 * 
 * No recibe props - Contenido estático
 */
const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Contenedor principal */}
      <div className="footer-container">
        
        {/* Sección de logo y descripción */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img
      src="/img/02-logos/logogondralivestreaming4.png" 
              alt="Gondra Live Streaming"
              className="brand-logo"
              loading="lazy"
            />
          </Link>
          <p className="brand-description">
            Plataforma de transmisiones en vivo sobre desarrollo web y tecnología
          </p>
        </div>

        {/* Secciones de enlaces */}
        <div className="footer-sections">
          
          {/* Sección de navegación */}
          <div className="footer-section">
            <h3 className="section-heading">Navegación</h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">Inicio</Link>
              <Link to="/live" className="footer-link">En Vivo</Link>
              <Link to="/programacion" className="footer-link">Programación</Link>
              <Link to="/archivo" className="footer-link">Archivo</Link>
              <Link to="/contacto" className="footer-link">Contacto</Link>
            </div>
          </div>

          {/* Sección de contacto */}
          <div className="footer-section">
            <h3 className="section-heading">Contacto</h3>
            <div className="contact-info">
              <a href="mailto:contacto@gondralive.com" className="contact-item">
                <i className="bi bi-envelope"></i>
                <span>contacto@gondralive.com</span>
              </a>
              <a href="tel:+123456789" className="contact-item">
                <i className="bi bi-telephone"></i>
                <span>+123 456 789</span>
              </a>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h3 className="section-heading">Síguenos</h3>
          <div className="social-links">
            <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-twitch"></i>
              <span className="social-tooltip">Twitch</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-youtube"></i>
              <span className="social-tooltip">YouTube</span>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-twitter"></i>
              <span className="social-tooltip">Twitter</span>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="bi bi-discord"></i>
              <span className="social-tooltip">Discord</span>
            </a>
          </div>
        </div>

        {/* Copyright y créditos */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Gondra Live Streaming. Todos los derechos reservados.
          </p>
          <p className="credits">
            Desarrollado por <Link to="/">Gondra World Dev</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;