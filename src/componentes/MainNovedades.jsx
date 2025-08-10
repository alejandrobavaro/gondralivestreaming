// Importación de React, necesario para definir componentes en React
import React from 'react';
// Importación de la función format de date-fns para formatear fechas
import { format } from 'date-fns';
// Importación del locale español de date-fns para formatear fechas en español
import { es } from 'date-fns/locale';

// Definición del componente funcional MainNovedades
const MainNovedades = ({ items, title, type = 'streams' }) => {
  // Renderizado del componente
  return (
    <div className={`main-novedades ${type}-version`}>
      {/* Título de la sección */}
      <h2 className="section-title">{title}</h2>
      {/* Grid de novedades */}
      <div className="novedades-grid">
        {items.map(item => (
          <div key={item.id} className="novedad-item stream-item">
            {/* Fecha del stream formateada */}
            <div className="stream-date">
              {format(new Date(item.date), 'PPP', { locale: es })}
            </div>
            {/* Título del stream */}
            <h3>{item.title}</h3>
            {/* Botón de recordatorio, solo se muestra si el tipo es 'streams' */}
            {type === 'streams' && (
              <button className="stream-reminder">
                ⏰ Recordar
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Exportación del componente MainNovedades para su uso en otras partes de la aplicación
export default MainNovedades;
