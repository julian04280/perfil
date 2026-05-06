import React from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Julian Andres Diaz Rueda - Ingeniero de Sistemas Senior</title>
        <meta name="description" content="Ingeniero de Sistemas Senior con más de 12 años de experiencia en Full-stack, IA Generativa y Automatización. Especialista en Java, React, Node.js y microservicios." />
        <meta name="keywords" content="Ingeniero de Sistemas, Full-stack Developer, IA Generativa, Automatización, Java, React, Node.js, Bogotá, Colombia" />
        <meta name="author" content="Julian Andres Diaz Rueda" />
        <meta property="og:title" content="Julian Andres Diaz Rueda - Portfolio" />
        <meta property="og:description" content="Portfolio profesional de Julian Andres Diaz Rueda, Ingeniero de Sistemas Senior especializado en IA y desarrollo Full-stack." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">JULIAN ANDRES DIAZ RUEDA</h1>
          <ul className="nav-links">
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Sobre Mí</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#experience">Experiencia</a></li>
            <li><a href="#education">Educación</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Hola, soy Julian Andres Diaz Rueda</h1>
          <p className="hero-subtitle">Ingeniero de Sistemas Senior | Especialista en IA Generativa y Automatización</p>
          <a href="#about" className="cta-button">Conóceme más</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Ingeniero de Sistemas Senior con más de 12 años de trayectoria liderando arquitecturas Full-stack y
                optimización de sistemas. Especialista en IA Generativa y Automatización, destacando el diseño del bot
                GENIA para Telefónica, donde orquesté flujos lógicos mediante Node-RED e integración de LLMs. Experto
                en microservicios con Java (Spring Boot) y ecosistemas Front-end (React/Angular). Líder técnico enfocado
                en la calidad de software bajo metodologías ágiles, implementando TDD y Arquitectura Hexagonal.
              </p>
              <p>
                Bogotá / Chía, Colombia | 3024498292 | julian04280@gmail.com
              </p>
            </div>
            <div className="about-image">
              <img src="https://via.placeholder.com/300x300" alt="Julian Andres Diaz Rueda" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-bg">
        <div className="container">
          <h2>Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>IA & Automatización</h3>
              <p>GenAI (IA Generativa), Node-RED, Orquestación de APIs, Integración de LLMs (OpenAI/Watson), Prompt Engineering</p>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <p>Java (8/11/17), Spring Boot, Node.js, PHP, Microservicios, Arquitectura Hexagonal, SOA, REST/SOAP</p>
            </div>
            <div className="skill-item">
              <h3>Frontend</h3>
              <p>React, Angular, TypeScript, JavaScript (ES6+), NPM, Redux, SCSS, Bootstrap</p>
            </div>
            <div className="skill-item">
              <h3>Herramientas & DevOps</h3>
              <p>Azure, Jenkins, CI/CD Pipelines, SonarQube, Git, Maven, Gradle, Fortify</p>
            </div>
            <div className="skill-item">
              <h3>Bases de Datos</h3>
              <p>SQL Server, Oracle, MySQL, MongoDB, PostgreSQL, JPA, JDBC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2>Experiencia Profesional</h2>
          <div className="experience-item">
            <h3>Especialista en IA y Automatización | Proyecto GENIA (Telefónica)</h3>
            <p className="company">Telefónica</p>
            <p className="date">8 Meses</p>
            <p>
              • Diseño técnico y desarrollo de GENIA, asistente virtual de IA Generativa para la optimización de
              procesos corporativos.<br/>
              • Orquestación de flujos lógicos complejos con Node-RED, integrando procesamiento de lenguaje natural
              (NLP).<br/>
              • Integración de modelos de lenguaje (LLM) vía APIs, asegurando la interoperabilidad con sistemas
              legados.
            </p>
          </div>
          <div className="experience-item">
            <h3>Senior Lead Developer | Scotiabank Colpatria</h3>
            <p className="company">Fábrica Digital</p>
            <p className="date">Jun. 2021 – Feb. 2025</p>
            <p>
              • Liderazgo técnico de equipos multidisciplinarios, garantizando la entrega de funcionalidades bancarias
              críticas con alta disponibilidad.<br/>
              • Diseño de microservicios escalables en Java y desarrollo de interfaces modernas en React/Angular.<br/>
              • Implementación de TDD y estándares de calidad con SonarQube, reduciendo la deuda técnica en un
              30%.<br/>
              • Desarrollo de librerías internas (NPM) para estandarizar seguridad (JWT) y diseño visual en micro-
              frontends.
            </p>
          </div>
          <div className="experience-item">
            <h3>Arquitecto Desarrollador | CEIBA (Consultoría Scotiabank)</h3>
            <p className="company">CEIBA</p>
            <p className="date">Ago. 2020 – Jun. 2021</p>
            <p>
              • Construcción de microservicios bajo Arquitectura Hexagonal en Java 8, mejorando la testabilidad del
              sistema.<br/>
              • Automatización de despliegues mediante pipelines de CI/CD (Jenkins) y ejecución de pruebas con JUnit
              5.
            </p>
          </div>
          <div className="experience-item">
            <h3>Fullstack Developer | Softtek</h3>
            <p className="company">Softtek</p>
            <p className="date">Abr. 2017 – Jul. 2020</p>
            <p>
              • Liderazgo en la migración de arquitectura de datos de JDBC a JPA/Hibernate para optimizar consultas
              en Ternium.<br/>
              • Desarrollo de componentes reutilizables en Angular e implementación de patrones de diseño DTO y
              Singleton.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2>Educación</h2>
          <div className="experience-item">
            <h3>Ingeniería de Sistemas (8° Semestre)</h3>
            <p className="company">Universidad Central de Colombia</p>
            <p className="date">2017 – 2024</p>
          </div>
          <div className="experience-item">
            <h3>Técnico en Sistemas de Información</h3>
            <p className="company">Colegio Bosques de Sherwood</p>
            <p className="date">2008 – 2010</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-bg">
        <div className="container">
          <h2>Contacto</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>julian04280@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Teléfono</h3>
              <p>3024498292</p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p><a href="https://linkedin.com/in/julian-diaz" target="_blank" rel="noopener noreferrer">linkedin.com/in/julian-diaz</a></p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p><a href="https://github.com/julian04280" target="_blank" rel="noopener noreferrer">github.com/julian-diaz</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Julian Andres Diaz Rueda. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
