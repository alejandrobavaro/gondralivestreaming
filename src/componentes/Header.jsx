import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../assets/scss/_03-Componentes/_Header.scss";

/**
 * COMPONENTE HEADER - Barra de navegación superior
 * 
 * Adaptado para Gondra Live Streaming con:
 * - Indicador de transmisión en vivo
 * - Navegación simplificada
 * - Búsqueda opcional
 * 
 * Props:
 * - searchQuery: Estado para búsqueda (string)
 * - setSearchQuery: Función para actualizar búsqueda
 */
const Header = ({ searchQuery, setSearchQuery }) => {
  // --- ESTADOS ---
  const location = useLocation(); // Hook para ruta actual
  const navigate = useNavigate(); // Hook para navegación
  const [isScrolled, setIsScrolled] = useState(false); // Controla si se hizo scroll
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Controla menú móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // Detecta mobile
  const [isLive, setIsLive] = useState(true); // Simula estado de transmisión (luego conectar a API)

  // --- EFECTOS ---
  // Efecto para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    // Efecto para detectar cambios de tamaño
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener('resize', handleResize);

    // Limpieza
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Cierra menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // --- HANDLERS ---
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const showSearch = location.pathname === "/"; // Muestra búsqueda solo en home

  // --- RENDER ---
  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Barra superior con indicador de live */}
      <div className={`header-top-bar ${isLive ? "live" : ""}`}></div>
      
      {/* Contenedor principal */}
      <div className="header-container">
        {/* Logo clickeable */}
        <Link to="/" className="header-logo">
          <img
            src="/img/02-logos/logogondralivestreaming4.png" // Cambiar por logo de streaming
            alt="Gondra Live Streaming"
            className="logo-image"
            loading="lazy"
          />
        </Link>

        {/* Búsqueda (solo en home) */}
        {showSearch && (
          <div className="search-container">
            <input
              type="search"
              className="search-input"
              placeholder="Buscar transmisiones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Buscar transmisiones"
            />
          </div>
        )}

        {/* Navegación principal */}
        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/live" className="nav-link live-link">
              {isLive ? "● EN VIVO" : "Próximos"}
            </Link>
            <Link to="/archivo" className="nav-link">Archivo</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </div>

          {/* Botón menú móvil */}
          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Menú"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;