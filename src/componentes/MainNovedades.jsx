import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import PropTypes from 'prop-types';
import "../assets/scss/_03-Componentes/_MainNovedades.scss";

/**
 * COMPONENTE MAIN NOVEDADES - Muestra novedades y próximos eventos
 * 
 * Funcionalidades:
 * 1. Muestra listado de streams o noticias
 * 2. Formatea fechas en español
 * 3. Diseño responsive (1-3 columnas)
 * 4. Integración con sistema de recordatorios
 * 
 * Props:
 * - items: Array de objetos con las novedades
 * - title: Título de la sección
 * - type: Tipo de contenido ('streams' o 'news')
 */
const MainNovedades = ({ items = [], title = 'Novedades', type = 'streams' }) => {
  // Datos de ejemplo si no se proporcionan items
  const demoItems = type === 'streams' ? [
    {
      id: 1,
      title: "Concierto Especial de Fin de Año",
      date: "2023-12-31T21:00:00",
      description: "Evento exclusivo con invitados sorpresa"
    },
    {
      id: 2,
      title: "Sesión de Preguntas y Respuestas",
      date: "2024-01-15T19:00:00",
      description: "Envía tus preguntas para que respondamos en vivo"
    },
    {
      id: 3,
      title: "Tutorial: Producción Musical Avanzada",
      date: "2024-02-05T18:00:00",
      description: "Aprende técnicas profesionales de producción"
    }
  ] : [
    {
      id: 1,
      title: "Nuevo álbum en producción",
      date: "2023-11-20T00:00:00",
      description: "Estamos trabajando en nuevo material musical"
    },
    {
      id: 2,
      title: "Gira 2024 confirmada",
      date: "2023-11-15T00:00:00",
      description: "Próximamente anunciaremos fechas y ciudades"
    }
  ];

  // Usamos los items proporcionados o los de demo
  const itemsToShow = items.length > 0 ? items : demoItems;

  return (
    <section className="main-novedades">
      <h2 className="section-title">{title}</h2>
      
      <div className="novedades-grid">
        {itemsToShow.map(item => (
          <article key={item.id} className={`novedad-item ${type}-item`}>
            <div className="item-date">
              {format(new Date(item.date), "EEEE d 'de' MMMM, yyyy", { locale: es })}
            </div>
            <h3 className="item-title">{item.title}</h3>
            <p className="item-description">{item.description}</p>
            
            {type === 'streams' && (
              <div className="item-actions">
                <button className="reminder-btn">
                  ⏰ Recordar
                </button>
                <span className="live-badge upcoming">PRÓXIMAMENTE</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

MainNovedades.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ),
  title: PropTypes.string,
  type: PropTypes.oneOf(['streams', 'news'])
};

export default MainNovedades;