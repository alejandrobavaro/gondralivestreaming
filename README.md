# Documentación Técnica del Proyecto Gondra Live Streaming

## 📌 Descripción General

**Gondra Live Streaming** es una plataforma para transmitir y visualizar contenido en vivo, con las siguientes características:
- Transmisión en vivo con reproductor integrado
- Programación de eventos futuros
- Archivo de transmisiones pasadas
- Diseño responsive y optimizado
- Interfaz intuitiva y accesible

## 🏗️ Estructura del Proyecto

```
src/
├── assets/
│   └── scss/
│       ├── _01-General/          # Estilos base
│       └── _03-Componentes/      # Estilos por componente
├── componentes/                  # Componentes React
├── App.jsx                       # Componente principal
└── main.jsx                      # Punto de entrada
```

## 🎨 Sistema de Diseño

### Principios de Diseño
- **Mobile-first**: Desarrollo priorizado para móviles
- **Consistencia visual**: Mismos patrones en toda la aplicación
- **Performance**: Código optimizado y mínimo
- **Accesibilidad**: Contraste adecuado y semántica HTML

### Paleta de Colores
- Primario: `#0a0a0a` (fondo oscuro)
- Secundario: `#1a1a1a` (elementos secundarios)
- Acento: `#ff5500` (naranja para elementos interactivos)
- Texto: `#ffffff` (principal), `#cccccc` (secundario)

## 📂 Componentes Principales

### 1. App.jsx (Componente Raíz)
```jsx
/**
 * COMPONENTE PRINCIPAL
 * Configura:
 * - Enrutamiento (React Router)
 * - Estructura base de la aplicación
 * - Provee el Error Boundary global
 */
```

### 2. Header.jsx (Barra de Navegación)
```jsx
/**
 * HEADER
 * Funcionalidades:
 * - Navegación entre secciones
 * - Indicador de transmisión en vivo
 * - Búsqueda de contenido
 * - Menú adaptable para móviles
 */
```

### 3. LiveStream.jsx (Reproductor Principal)
```jsx
/**
 * REPRODUCTOR DE STREAMING
 * Muestra:
 * - Transmisión en vivo actual
 * - Contador de espectadores
 * - Estado de conexión
 * - Mensaje cuando no hay transmisión
 */
```

### 4. UpcomingStreams.jsx (Eventos Futuros)
```jsx
/**
 * PRÓXIMOS STREAMS
 * Funcionalidades:
 * - Grid de eventos programados
 * - Manejo de estados (carga, error)
 * - Diseño responsive (1-3 columnas)
 */
```

### 5. StreamArchive.jsx (Archivo Histórico)
```jsx
/**
 * ARCHIVO DE STREAMS
 * Muestra:
 * - Transmisiones pasadas
 * - Estadísticas (vistas, duración)
 * - Sistema de búsqueda/filtrado
 */
```

### 6. StreamCard.jsx (Componente Reutilizable)
```jsx
/**
 * TARJETA DE STREAM
 * Componente reusable para:
 * - Streams en vivo (badge "EN VIVO")
 * - Eventos próximos (badge "PRÓXIMAMENTE")
 * - Archivo (muestra estadísticas)
 */
```

### 7. ErrorBoundary.jsx (Manejo de Errores)
```jsx
/**
 * MANEJADOR DE ERRORES
 * Captura errores en componentes hijos y:
 * - Muestra UI alternativa
 * - Registra errores en consola
 * - Ofrece opción de recargar
 */
```

## 🖌️ Estilos SCSS

### Estructura SCSS
```scss
/* _01-General/_App.scss */
.app-wrapper {
  /* Estilos base de la aplicación */
}

/* _03-Componentes/_Header.scss */
.site-header {
  /* Estilos específicos del header */
}

/* _03-Componentes/_LiveStream.scss */
.publico-live-stream {
  /* Estilos del reproductor principal */
}

/* estilo.scss (global) */
@import '_01-General/_App';
@import '_03-Componentes/_Header';
/* ... otros imports ... */
```

### Patrones de Diseño SCSS
1. **Mobile-first**: Todos los estilos comienzan por móvil
2. **Breakpoints claros**:
   ```scss
   @media (min-width: 768px) { /* Tablet */ }
   @media (min-width: 1024px) { /* Desktop */ }
   ```
3. **Anidamiento mínimo**: Solo para relaciones padre-hijo claras
4. **Especificidad baja**: Evitar selectores complejos

## 🛠️ Configuración Técnica

### Dependencias Clave
- React 18
- React Router DOM
- date-fns (manejo de fechas)
- Sass (preprocesador CSS)

### Estructura de Datos
```javascript
// Ejemplo de objeto stream
{
  id: 1,
  title: "Título del Stream",
  date: "2023-11-10T20:00:00",
  thumbnail: "/img/stream.jpg",
  views: 1250,            // Opcional para archivo
  duration: "1:45:22"     // Opcional para archivo
}
```

## 🚀 Guía de Implementación

### Para agregar un nuevo stream:
1. Actualizar el array en `MainContent.jsx`
2. Asegurar que tenga:
   - ID único
   - Título descriptivo
   - Fecha en formato ISO
   - Miniatura adecuada

### Para modificar estilos:
1. Editar el archivo SCSS correspondiente al componente
2. Mantener la estructura mobile-first
3. Verificar en todos los breakpoints

## ✅ Buenas Prácticas Implementadas

1. **Componentes**:
   - Responsabilidad única
   - Reutilizables (StreamCard)
   - Documentados con PropTypes

2. **Estilos**:
   - Orden lógico de propiedades
   - Selectores semánticos
   - Sin redundancias

3. **Performance**:
   - Lazy loading de imágenes
   - Optimización de re-renders
   - Código minimalista

## 📝 Ejemplo de Uso Completo

```jsx
// En MainContent.jsx
<>
  <MainBanner 
    title="Gondra Live" 
    isStreaming={currentStream.isLive} 
  />
  
  <LiveStream streamData={currentStream} />
  
  <UpcomingStreams 
    streams={upcomingStreams} 
    loading={isLoading}
    error={error}
  />
  
  <StreamArchive streams={pastStreams} />
</>
```

## 🌟 Características Destacables

1. **Sistema de Streaming**:
   - Reproductor adaptable
   - Detección automática de estado "en vivo"
   - Marcador de espectadores

2. **Experiencia de Usuario**:
   - Estados de carga (skeletons)
   - Manejo elegante de errores
   - Navegación intuitiva

3. **Diseño Responsive**:
   - Adaptación perfecta a cualquier dispositivo
   - Transiciones suaves entre breakpoints
   - Touch-friendly en móviles



# 🧒📺 Explicación Súper Sencilla de Gondra Live Streaming

## 🌈 ¿Qué es esto?
Es como una **tele por internet** donde puedes:
- Ver programas EN VIVO 🎥
- Saber qué programas vienen después 📅
- Ver programas viejos que ya pasaron 🕰️

## 🧩 Partes Principales

### 1. 📺 La Pantalla Grande (LiveStream.jsx)
- Aquí se ve el programa que está pasando AHORA
- Si no hay nada, sale un cartel que dice "Volvé más tarde"

### 2. 🗓️ Cartelera (UpcomingStreams.jsx)
- Muestra los programas que van a salir
- Parece una vidriera con fotos de lo que viene

### 3. 🗄️ Archivo (StreamArchive.jsx)
- Acá están todos los programas viejos
- Puedes ver cuánta gente los vio y cuánto duraron

## 🔌 Cómo Poner un Programa EN VIVO

### Paso 1: Preparar el Video
Necesitas:
1. Un video que quieras transmitir (como en YouTube Live o Twitch)
2. El "link mágico" donde está tu video (se llama URL de streaming)

### Paso 2: Pegar el Link en el Código
Busca en `LiveStream.jsx` esta parte:

```jsx
<div className="video-container">
  {/* Aquí va el reemplazo */}
  <iframe 
    src="PEGA_AQUÍ_TU_LINK" 
    title="Tu programa en vivo"
    allowFullScreen
  ></iframe>
</div>
```

### Paso 3: Links que Funcionan
Usa links de:
- YouTube Live: `https://www.youtube.com/embed/TU_ID`
- Twitch: `https://player.twitch.tv/?channel=TU_NOMBRE`
- Vimeo: `https://vimeo.com/event/TU_ID/embed`

Ejemplo real:
```jsx
<iframe 
  src="https://www.youtube.com/embed/abc123" 
  title="Mi programa favorito"
  allowFullScreen
></iframe>
```

## 🎮 Cómo Probar Sin Transmitir

1. En `MainContent.jsx`, cambia esto:
```jsx
const currentStream = {
  isLive: true,  // Poner "false" para ver el mensaje de "No hay transmisión"
  title: "Mi Programa",
  viewers: 100,
  thumbnail: "/img/ejemplo.jpg"
}
```

2. Para el video de prueba, usa:
```jsx
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="Video de prueba"
  allowFullScreen
></iframe>
```

## 🧠 Trucos Mágicos

1. **Si se traba**: Recarga la página (F5)
2. **Si no se ve**: Revisa que el link esté bien pegado
3. **Para poner horarios**: Edita `upcomingStreams` en `MainContent.jsx`




# 🎥 Gondra Live Streaming - Explicación Sencilla para Transmitir en Vivo

## 🔴 Cómo Poner un Programa en Vivo 

### 1. Primero: Elige Dónde Vas a Transmitir
Necesitas una plataforma como:
- YouTube Live (como cuando ves videos)
- Twitch (para gamers y streamers)
- Facebook Live (para transmitir a amigos)

### 2. Consigue el Link Mágico
Cuando empieces a transmitir, la plataforma te dará un link especial que parece esto:
```
https://www.youtube.com/embed/tu-codigo-especial
```

### 3. Cambia el Código del Reproductor

En el archivo `LiveStream.jsx`, busca esta parte:

```jsx
<div className="video-container">
  {/* ESTO ES LO QUE VAMOS A CAMBIAR */}
  {isLive ? (
    <>
      <img
        src={thumbnail}
        alt="Stream en vivo"
        className="stream-thumbnail"
      />
      <div className="viewer-count">👁️ {viewers} espectadores</div>
    </>
  ) : (
    <div className="offline-thumbnail">
      <img
        src="/img/02-logos/logogondralivestreaming4.png"
        alt="Logo Gondra Live Streaming"
        className="logo-thumbnail"
      />
    </div>
  )}
</div>
```

### 4. Pega Tu Link de Transmisión

Cambia esa parte por esto:

```jsx
<div className="video-container">
  {isLive ? (
    <iframe 
      src="https://www.youtube.com/embed/tu-codigo-especial" 
      title="Mi programa en vivo"
      allowFullScreen
    ></iframe>
  ) : (
    <div className="offline-thumbnail">
      <img
        src="/img/02-logos/logogondralivestreaming4.png"
        alt="Logo Gondra Live Streaming"
        className="logo-thumbnail"
      />
    </div>
  )}
</div>
```

## 🧑‍🏫 Ejemplo Real con Datos Falsos

### En `MainContent.jsx`:

```jsx
const currentStream = {
  isLive: true,  // Esto activa el reproductor
  title: "Concierto de Almango en Vivo",
  viewers: 1250,
  thumbnail: "/img/02-logos/logogondralivestreaming2.png",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Link de ejemplo
};
```

### En `LiveStream.jsx` (actualizado):

```jsx
<div className="video-container">
  {isLive ? (
    <iframe 
      src={streamData.embedUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"} 
      title={streamData.title || "Transmisión en vivo"}
      allowFullScreen
    ></iframe>
  ) : (
    <div className="offline-thumbnail">
      <img
        src="/img/02-logos/logogondralivestreaming4.png"
        alt="Logo Gondra Live Streaming"
        className="logo-thumbnail"
      />
    </div>
  )}
</div>
```

## 🎮 Cómo Probar Sin Transmitir

1. Usa este video de prueba de YouTube:
```jsx
<iframe 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="Video de prueba"
  allowFullScreen
></iframe>
```

2. Cambia en `MainContent.jsx`:
```jsx
const currentStream = {
  isLive: true,  // Poner false para ver el mensaje "No hay transmisión"
  title: "Transmisión de Prueba",
  viewers: 9999,
  thumbnail: "/img/02-logos/logogondralivestreaming2.png",
  embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
};
```

## 📝 Paso a Paso para Transmitir

1. **Prepara tu transmisión** en YouTube/Twitch
2. **Copia el link** de embed/incrustación
3. **Pégalo** en el código donde dice `embedUrl`
4. **Cambia** `isLive` a `true`
5. **Guarda** los cambios
6. **¡Listo!** Tu transmisión aparecerá en la web

## 💡 Consejos Importantes

1. Si no se ve:
   - Revisa que el link empiece con `https://`
   - Verifica que la transmisión esté activa
   - Prueba recargando la página (F5)

2. Para mejores resultados:
   - Usa YouTube Live (es más estable)
   - Prueba primero con el video de prueba
   - Avisa a tus amigos que vas a transmitir







### 🏗️ Componentes Principales (Esenciales)

1. **App.jsx** (Raíz)
   - ✅ **Función**: Configura el enrutamiento y estructura base
   - 📌 Importante: Une todos los componentes y maneja las rutas

2. **Header.jsx** (Navegación)
   - ✅ **Función**: Barra superior con logo, menú y búsqueda
   - 📌 Importante: Navegación entre secciones

3. **LiveStream.jsx** (Reproductor)
   - ✅ **Función**: Muestra el stream en vivo o mensaje "offline"
   - 📌 Clave: Aquí va el iframe con tu transmisión (YouTube/Twitch)

4. **StreamCard.jsx** (Reutilizable)
   - ✅ **Función**: Tarjeta para mostrar streams (vivos/futuros/pasados)
   - 📌 Versátil: Usado en UpcomingStreams y StreamArchive

5. **UpcomingStreams.jsx** (Eventos futuros)
   - ✅ **Función**: Muestra la programación de próximos streams
   - 📌 Útil: Grid con fechas y miniaturas

6. **StreamArchive.jsx** (Historial)
   - ✅ **Función**: Muestra streams pasados con estadísticas
   - 📌 Valor: Contenido permanente para usuarios

7. **ErrorBoundary.jsx** (Seguridad)
   - ✅ **Función**: Captura errores y muestra UI alternativa
   - 📌 Preventivo: Evita que toda la app se caiga por un error

### 🛠️ Componentes Secundarios (Opcionales pero recomendados)

8. **Footer.jsx** (Pie de página)
   - ℹ️ Muestra info de contacto/legal

9. **MainWhatsappIcon.jsx** (Contacto)
   - ℹ️ Botón flotante de WhatsApp

10. **Contacto.jsx** (Formulario)
    - ℹ️ Página independiente para contacto

### 🔄 Estructura Optimizada Recomendada

```
src/
├── componentes/
│   ├── core/               # Componentes esenciales
│   │   ├── LiveStream.jsx
│   │   ├── StreamCard.jsx
│   │   ├── UpcomingStreams.jsx
│   │   └── StreamArchive.jsx
│   │
│   ├── layout/             # Estructura de página
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   │
│   └── utils/              # Utilidades
│       ├── ErrorBoundary.jsx
│       └── MainWhatsappIcon.jsx
│
└── pages/                  # Páginas completas
    ├── Home.jsx            # (Contendría MainContent)
    └── Contacto.jsx
```


