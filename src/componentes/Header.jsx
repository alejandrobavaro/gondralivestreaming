// Importaciones básicas de React y hooks
import React, { useState, useEffect } from "react";
// Importaciones de React Router para navegación
import { Link, useLocation, useNavigate } from "react-router-dom";
// Importación de estilos SCSS
import "../assets/scss/_03-Componentes/_Header.scss";

/**
 * COMPONENTE HEADER - Barra de navegación superior
 * 
 * Funcionalidades principales:
 * 1. Barra de navegación responsive (mobile/desktop)
 * 2. Menú móvil desplegable
 * 3. Indicador de transmisión en vivo
 * 4. Sistema de búsqueda (opcional)
 * 5. Efectos de scroll
 * 
 * Props que recibe:
 * - searchQuery: Estado para almacenar la búsqueda
 * - setSearchQuery: Función para actualizar la búsqueda
 */
const Header = ({ searchQuery, setSearchQuery }) => {
  // ========== ESTADOS DEL COMPONENTE ==========
  
  // 1. Hook para obtener la ruta actual
  const location = useLocation();
  
  // 2. Hook para navegación programática
  const navigate = useNavigate();
  
  // 3. Estado para controlar si se hizo scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
  // 4. Estado para controlar menú móvil (abierto/cerrado)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // 5. Estado para detectar si está en móvil
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  
  // 6. Estado para simular transmisión en vivo (luego conectar a API real)
  const [isLive, setIsLive] = useState(true);

  // ========== EFECTOS SECUNDARIOS ==========
  
  // Efecto 1: Detectar scroll y cambios de tamaño
  useEffect(() => {
    // Función para manejar el scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Función para manejar cambios de tamaño (responsive)
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Agregar event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Efecto 2: Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // ========== MANEJADORES DE EVENTOS ==========
  
  // 1. Alternar menú móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // 2. Mostrar búsqueda solo en la página principal
  const showSearch = location.pathname === "/";

  // ========== RENDERIZADO ==========
  return (
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
      {/* Barra superior con indicador de estado EN VIVO */}
      <div className={`header-top-bar ${isLive ? "live" : ""}`}></div>
      
      {/* Contenedor principal del header */}
      <div className="header-container">
        {/* Logo clickeable que lleva al home */}
        <Link to="/" className="header-logo">
          <img
            src="/img/02-logos/logogondralivestreaming4.png"
            alt="Gondra Live Streaming"
            className="logo-image"
            loading="lazy"
          />
        </Link>

        {/* Contenedor de búsqueda (solo visible en home) */}
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
          {/* Lista de enlaces */}
          <div className="nav-links">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/live" className="nav-link live-link">
  {isLive ? "● EN VIVO" : "Próximos"}
</Link>
<Link to="/novedades" className="nav-link">Novedades</Link>
            <Link to="/archivo" className="nav-link">Archivo</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
          </div>

          {/* Botón de menú hamburguesa (solo móvil) */}
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