import React, { useState } from "react";
import Slider from "react-slick";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaUser,
  FaPhone,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  const [activeTab, setActiveTab] = useState("redes");

  const redes = [
    {
      icon: <FaFacebook className="contacto-icono" />,
      text: "Facebook",
      url: "https://www.facebook.com/alegondramusic",
    },
    {
      icon: <FaInstagram className="contacto-icono" />,
      text: "Instagram",
      url: "https://www.instagram.com/alegondramusic/",
    },
    {
      icon: <FaYoutube className="contacto-icono" />,
      text: "YouTube",
      url: "https://www.youtube.com/@almangopopmusic",
    },
    {
      icon: <FaEnvelope className="contacto-icono" />,
      text: "Email",
      url: "mailto:bavaroalejandro@gmail.com",
    }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de newsletter enviado");
  };

  return (
    <div className="contacto-container">
      <div className="contacto-cinta-top"></div>
      
      <h1 className="contacto-titulo-principal">CONTACTO</h1>

      <div className="contacto-tabs">
        <button
          className={`contacto-tab ${activeTab === "redes" ? "active" : ""}`}
          onClick={() => setActiveTab("redes")}
        >
          REDES
        </button>
        <button
          className={`contacto-tab ${activeTab === "formulario" ? "active" : ""}`}
          onClick={() => setActiveTab("formulario")}
        >
          MENSAJE
        </button>
      </div>

      <div className="contacto-contenido">
        {activeTab === "redes" ? (
          <div className="contacto-redes">
            <div className="contacto-redes-grid">
              {redes.map((red, index) => (
                <a
                  key={index}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contacto-red-item"
                >
                  {red.icon}
                  <span>{red.text}</span>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="contacto-formulario-container">
            <form
              className="contacto-formulario"
              action="https://formspree.io/f/xbjnlgzz"
              target="_blank"
              method="post"
            >
              <div className="formulario-grupo">
                <label htmlFor="nombre">
                  <FaUser className="formulario-icono" /> Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre..."
                  required
                />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="email">
                  <FaEnvelope className="formulario-icono" /> Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu email..."
                  required
                />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="mensaje">
                  <FaComment className="formulario-icono" /> Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Escribe tu mensaje..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="formulario-boton">
                <span>ENVIAR</span>
                <FaPaperPlane className="boton-icono" />
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="contacto-newsletter">
        <div className="contacto-newsletter-contenedor">
          <div className="contacto-newsletter-texto">
            <h2 className="contacto-newsletter-titulo">
              SUSCRÍBETE AL NEWSLETTER
            </h2>
            <div className="contacto-newsletter-linea"></div>
          </div>

          <form className="contacto-newsletter-formulario" onSubmit={handleSubmit}>
            <div className="contacto-newsletter-grupo">
              <input
                type="email"
                placeholder="Ingresa tu email"
                className="contacto-newsletter-input"
                required
              />
              <button type="submit" className="contacto-newsletter-boton">
                <FaPaperPlane className="contacto-newsletter-icono" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="contacto-cinta-bottom"></div>
    </div>
  );
};

export default Contacto;