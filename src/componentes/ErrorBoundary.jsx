// ErrorBoundary.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * COMPONENTE ERROR-BOUNDARY
 * Captura errores en componentes hijos y muestra UI alternativa
 * 
 * Props:
 * - fallback: Componente alternativo (opcional)
 * - children: Componentes hijos a renderizar
 */
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary capturó un error:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary">
          <h2>Algo salió mal</h2>
          <p>{this.state.error.message}</p>
          <button onClick={() => window.location.reload()}>
            Recargar página
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  fallback: PropTypes.node,
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;