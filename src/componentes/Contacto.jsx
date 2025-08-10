import React, { useState } from "react";
import Slider from "react-slick";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
  FaPaypal,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  const [activeTab, setActiveTab] = useState("redes");

  const redes = [
    {
      icon: <FaFacebook className="contacto-icono" size={24} />,
      text: "Facebook",
      url: "https://www.facebook.com/alegondramusic",
    },
    {
      icon: <FaInstagram className="contacto-icono" size={24} />,
      text: "Instagram",
      url: "https://www.instagram.com/alegondramusic/",
    },
    {
      icon: <FaYoutube className="contacto-icono" size={24} />,
      text: "YouTube",
      url: "https://www.youtube.com/@almangopopmusic",
    },
    {
      icon: <MdEmail className="contacto-icono" size={24} />,
      text: "Email",
      url: "mailto:bavaroalejandro@gmail.com",
    },
    {
      icon: <FaPaypal className="contacto-icono" size={24} />,
      text: "Donaciones",
      url: "https://www.paypal.com/gondraworld",
    },
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
      <h1 className="contacto-titulo-principal">CONTACTA A GONDRA WORLD</h1>

      <div className="contacto-tabs">
        <button
          className={`contacto-tab ${activeTab === "redes" ? "active" : ""}`}
          onClick={() => setActiveTab("redes")}
        >
          REDES SOCIALES
        </button>
        <button
          className={`contacto-tab ${activeTab === "formulario" ? "active" : ""}`}
          onClick={() => setActiveTab("formulario")}
        >
          FORMULARIO
        </button>
      </div>

      <div className="contacto-contenido">
        {activeTab === "redes" ? (
          <div className="contacto-redes">
            <div className="contacto-logo-container">
              <img
                src="../../img/05-gif/web 1_1.gif"
                alt="Gondra World"
                className="contacto-logo"
              />
            </div>
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
                  <FaUser className="formulario-icono" /> NOMBRE:
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
                <label htmlFor="telefono">
                  <FaPhone className="formulario-icono" /> TELÉFONO:
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="Tu teléfono..."
                />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="email">
                  <FaEnvelope className="formulario-icono" /> EMAIL:
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
                <label htmlFor="asunto">
                  <FaComment className="formulario-icono" /> ASUNTO:
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="¿Cómo podemos ayudarte?"
                  required
                />
              </div>
              <div className="formulario-grupo">
                <label htmlFor="mensaje">
                  <FaComment className="formulario-icono" /> MENSAJE:
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Describe tu proyecto o consulta..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="formulario-boton">
                <span>ENVIAR MENSAJE</span>
                <FaPaperPlane className="boton-icono" />
              </button>
            </form>
            <div className="contacto-slider">
              <Slider {...settings}>
                <div className="slider-item">
                  <img
                    src="../../img/05-img-costados-larga/carrusellargo1.jpg"
                    alt="Diseño web Gondra World"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="../../img/05-img-costados-larga/carrusellargo2.jpg"
                    alt="Desarrollo web"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="../../img/05-img-costados-larga/carrusellargo3.jpg"
                    alt="Desarrollo web"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="../../img/05-img-costados-larga/carrusellargo4.jpg"
                    alt="Desarrollo web"
                  />
                </div>
                <div className="slider-item">
                  <img
                    src="../../img/05-img-costados-larga/carrusellargo5.jpg"
                    alt="Desarrollo web"
                  />
                </div>
              </Slider>
            </div>
          </div>
        )}
      </div>

      <div className="contacto-newsletter">
        <div className="contacto-newsletter-contenedor">
          <div className="contacto-newsletter-texto">
            <h2 className="contacto-newsletter-titulo">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="contacto-newsletter-descripcion">
              Recibe el Gondra World News y mantente actualizado con nuestros
              proyectos y servicios
            </p>
            <div className="contacto-newsletter-linea"></div>
          </div>

          <form className="contacto-newsletter-formulario" onSubmit={handleSubmit}>
            <div className="contacto-newsletter-grupo">
              <input
                type="email"
                placeholder="Tu email"
                className="contacto-newsletter-input"
                required
              />
              <button type="submit" className="contacto-newsletter-boton">
                <span>Suscribirse</span>
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
