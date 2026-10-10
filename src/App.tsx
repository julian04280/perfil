import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import heroBg from './assets/fondo-developer.jpg';
import heroAvatar from './assets/julian-avatar.png';
import profileImg from './assets/hero-bg2.jpeg';
import './App.css';

const projects = [
  {
    id: 5,
    title: 'BRZY University',
    subtitle: 'Plataforma de Capacitación LMS',
    description: 'Plataforma de capacitación con paneles por rol, onboarding y certificaciones. Desarrollo full stack con agentes de IA como apoyo al proceso, dirigiendo y validando la implementación técnica.',
    url: 'https://brzy.org/',
    tech: ['React', 'PocketBase', 'AI-assisted development', 'LMS', 'Certificaciones']
  },
  {
    id: 2,
    title: 'Dojasoft',
    subtitle: 'Software Factory & Soluciones ERP',
    description: 'Portal oficial de Dojasoft, compañía dedicada al desarrollo de software y soluciones informáticas a la medida para la gestión corporativa.',
    url: 'https://dojasoft.com/inicio',
    tech: ['HTML5', 'React / PHP', 'Sistemas ERP', 'Bases de Datos']
  },
  {
    id: 4,
    title: 'Herramientas Naranjo',
    subtitle: 'Grabado & Herramientas de Joyería',
    description: 'Catálogo web y plataforma interactiva para Herramientas Naranjo S.A.S., comercializador líder de herramientas para joyería y grabado.',
    url: 'https://herramientas-naranjo.vercel.app/',
    tech: ['React', 'Vercel', 'Joyería y Grabado', 'Catálogo Web']
  },
  {
    id: 1,
    title: 'Grupo Nivel 5',
    subtitle: 'Seguridad Privada & Consultoría',
    description: 'Plataforma corporativa de Grupo Nivel 5 enfocada en soluciones integrales de seguridad física, electrónica y consultoría de riesgos en Colombia.',
    url: 'https://www.gruponivel5.com/',
    tech: ['Next.js', 'React', 'CSS Moderno', 'Web Corporativa']
  },
  {
    id: 3,
    title: 'Seguridad Nivel 5 Ltda',
    subtitle: 'Vigilancia y Seguridad Electrónica',
    description: 'Sitio oficial de la empresa de vigilancia y seguridad privada Seguridad Nivel 5, con servicios de monitoreo 24/7, CCTV y rastreo satelital.',
    url: 'https://seguridadnivel5ltda.com/',
    tech: ['Vigilancia', 'Monitoreo 24/7', 'CCTV', 'Seguridad Privada']
  }
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeMenuAndRestoreFocus = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <div className="App">
      <Helmet>
        <title>Julián Andrés Díaz Rueda | Ingeniero de IA y Automatización</title>
        <meta name="description" content="Ingeniero de software enfocado en soluciones aplicadas de IA y automatización: integración de LLM y NLP mediante APIs, flujos con Node-RED e interfaces web para asistentes y agentes." />
        <meta name="keywords" content="Ingeniero de IA, Automatización, IA Generativa, LLM, NLP, Node-RED, React, Java, Bogotá, Colombia" />
        <meta name="author" content="Julian Andres Diaz Rueda" />
        <meta property="og:title" content="Julián Andrés Díaz Rueda | Ingeniero de IA y Automatización" />
        <meta property="og:description" content="Ingeniero de software enfocado en soluciones aplicadas de IA, integración de LLM y NLP, automatización con Node-RED y desarrollo full stack." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Navigation */}
      <nav className="navbar" aria-label="Navegación principal">
        <div className="container">
          <a className="logo" href="#hero" onClick={closeMenu} aria-label="Inicio: Julián Andrés Díaz Rueda">JAD<span aria-hidden="true">.</span></a>
          <button 
            ref={menuButtonRef}
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú de navegación"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            type="button"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul id="primary-navigation" className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#hero" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#about" onClick={closeMenu}>Sobre Mí</a></li>
            <li><a href="#skills" onClick={closeMenu}>Habilidades</a></li>
            <li><a href="#soft-skills" onClick={closeMenu}>Habilidades Blandas</a></li>
            <li><a href="#portfolio" onClick={closeMenu}>Portafolio</a></li>
            <li><a href="#experience" onClick={closeMenu}>Experiencia</a></li>
            <li><a href="#education" onClick={closeMenu}>Educación</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {isMenuOpen && <button className="nav-overlay" type="button" aria-label="Cerrar menú de navegación" onClick={closeMenuAndRestoreFocus}></button>}

      <a className="skip-link" href="#main-content">Saltar al contenido principal</a>
      <main id="main-content" tabIndex={-1}>
      {/* Hero Section */}
      <section id="hero" className="hero" style={heroStyle} aria-labelledby="page-title">
        <div className="hero-content">
          <p className="eyebrow"><span className="availability-dot" /> Portafolio profesional · Bogotá, Colombia</p>
          <h1 id="page-title"><span>Ingeniero de IA<br className="hero-break" /> y Automatización</span></h1>
          <p className="hero-subtitle">Soy Julián Andrés Díaz Rueda, ingeniero de software enfocado en soluciones aplicadas de IA: integro LLM y NLP mediante APIs, orquesto flujos con Node-RED y conecto asistentes y agentes con interfaces web.</p>
          <div className="hero-actions">
            <a href="#portfolio" className="cta-button">Ver proyectos <span aria-hidden="true">↗</span></a>
            <a href="#about" className="hero-secondary">Conoce mi perfil <span aria-hidden="true">↓</span></a>
          </div>
          <dl className="hero-stats" aria-label="Resumen profesional">
            <div><dt>IA aplicada</dt><dd>LLM, NLP y agentes vía API</dd></div>
            <div><dt>Node-RED</dt><dd>automatización de flujos</dd></div>
            <div><dt>Full stack</dt><dd>React, Angular, Java y Node.js</dd></div>
          </dl>
        </div>
        <div className="hero-portrait" aria-hidden="true"><img src={heroAvatar} alt="" fetchPriority="high" /></div>
        <a href="#about" className="scroll-cue" aria-label="Desplazarse a la sección Sobre mí">DESLIZA <span aria-hidden="true">↓</span></a>
      </section>

      {/* About Section */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title">Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Ingeniero de software enfocado en diseñar e integrar soluciones aplicadas de inteligencia artificial y automatización. En Fractalia Colombia, para GENIA de Telefónica, integré LLM y procesamiento de lenguaje natural mediante APIs, orquesté servicios y flujos con Node-RED y conecté asistentes y agentes con interfaces web para apoyar procesos corporativos.</p>
              <p>Combino esa experiencia con desarrollo full stack y trayectoria en equipos de producto y tecnología. Trabajo con React, Angular, Java, Node.js y APIs REST/SOAP, con prácticas de calidad como TDD, pruebas unitarias, SonarQube y CI/CD. También utilizo herramientas de IA como apoyo al proceso de desarrollo, revisando y validando la implementación técnica.</p>
              <p>Mi formación en Ingeniería de Sistemas cursó hasta octavo semestre en la Universidad Central (2017–2024); además, cursé hasta quinto semestre en la Universidad Nacional (2011–2014) y obtuve un título técnico en sistemas. Me interesa construir integraciones útiles, mantenibles y alineadas con las necesidades del negocio.</p>
            </div>
            <div className="about-image">
              <img src={profileImg} alt="Julian Andres Diaz Rueda" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-bg" aria-labelledby="skills-title">
        <div className="container">
          <h2 id="skills-title">Habilidades Técnicas</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <h3>IA aplicada y automatización</h3>
              <p>IA Generativa, agentes y asistentes, integración de LLM y NLP vía APIs, Node-RED, Power Automate, prompt engineering, Ollama y Llama 3</p>
            </div>
            <div className="skill-item">
              <h3>Backend</h3>
              <p>Java 8, Spring Boot, Node.js, Python, PHP, C++, microservicios, arquitectura hexagonal, SOA, REST y SOAP</p>
            </div>
            <div className="skill-item">
              <h3>Frontend</h3>
              <p>React, Angular, TypeScript, JavaScript, Next.js, Vite, Tailwind CSS y conexión de asistentes con interfaces web</p>
            </div>
            <div className="skill-item">
              <h3>Herramientas & DevOps</h3>
              <p>Jenkins, CI/CD, SonarQube, JUnit 5, TDD, Git y herramientas de análisis de seguridad</p>
            </div>
            <div className="skill-item">
              <h3>Bases de Datos</h3>
              <p>MySQL, Oracle, SQL Server, MongoDB, H2, JPA y JDBC</p>
            </div>
          </div>

          {/* Soft Skills */}
          <h2 id="soft-skills" className="soft-skills-title">Habilidades Blandas</h2>
          <div className="soft-skills-grid">

            {/* Highlighted: Trabajo en Equipo */}
            <div className="soft-skill-item soft-skill-featured">
              <div className="soft-skill-icon" aria-hidden="true">🤝</div>
              <h3>Trabajo en Equipo</h3>
              <p>Creo firmemente en el poder de la colaboración. Me integro con naturalidad en equipos multidisciplinarios, fomento un ambiente de confianza y respeto mutuo, y priorizo los objetivos colectivos sobre los individuales para entregar resultados excepcionales.</p>
              <span className="soft-skill-badge">Destacada</span>
            </div>

            {/* Highlighted: Mentoría & Enseñanza */}
            <div className="soft-skill-item soft-skill-featured">
              <div className="soft-skill-icon" aria-hidden="true">🎓</div>
              <h3>Mentoría & Enseñanza</h3>
              <p>Me apasiona compartir el conocimiento y guiar a otros en su crecimiento profesional. Disfruto acompañar a desarrolladores junior y senior, transmitir buenas prácticas, y ayudar a que cada miembro del equipo alcance su máximo potencial técnico.</p>
              <span className="soft-skill-badge">Destacada</span>
            </div>

            <div className="soft-skill-item">
              <div className="soft-skill-icon" aria-hidden="true">🧭</div>
              <h3>Liderazgo Técnico</h3>
              <p>Capacidad para guiar equipos hacia arquitecturas sólidas, tomar decisiones técnicas asertivas y ser referente técnico en proyectos complejos bajo metodologías ágiles.</p>
            </div>

            <div className="soft-skill-item">
              <div className="soft-skill-icon" aria-hidden="true">💬</div>
              <h3>Comunicación Efectiva</h3>
              <p>Habilidad para traducir conceptos técnicos complejos en lenguaje comprensible para stakeholders no técnicos, facilitando la alineación entre áreas de negocio y tecnología.</p>
            </div>

            <div className="soft-skill-item">
              <div className="soft-skill-icon" aria-hidden="true">🔄</div>
              <h3>Adaptabilidad</h3>
              <p>Me adapto con facilidad a nuevos entornos, tecnologías y metodologías de trabajo. La agilidad y el aprendizaje continuo son parte esencial de mi perfil profesional.</p>
            </div>

            <div className="soft-skill-item">
              <div className="soft-skill-icon" aria-hidden="true">🎯</div>
              <h3>Orientación a Resultados</h3>
              <p>Enfocado en entregar soluciones de alto impacto dentro de los plazos establecidos, con un ojo crítico en la calidad del código y la experiencia del usuario final.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio-section" aria-labelledby="portfolio-title">
        <div className="container">
          <h2 id="portfolio-title">Portafolio de Proyectos</h2>
          <p className="section-subtitle">Explora e interactúa con cada sitio web directamente desde su previsualización.</p>
          
          <div className="portfolio-grid">
            {projects.map((project) => (
              <div key={project.id} className="portfolio-card">
                <div className="portfolio-card-header">
                  <h3>{project.title}</h3>
                  <span className="project-badge">{project.subtitle}</span>
                </div>
                <p className="portfolio-card-desc">{project.description}</p>
                
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Direct Browser mockup iframe integration */}
                <div className="browser-mockup">
                  <div className="browser-topbar">
                    <div className="browser-dots" aria-hidden="true">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <div className="browser-urlbar">
                      <span className="lock-icon" aria-hidden="true">🔒</span>
                      <span className="url-text">{project.url}</span>
                    </div>
                    <div className="browser-actions">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={`Abrir ${project.title} en una pestaña nueva`}
                        title="Abrir en pestaña nueva"
                        className="browser-btn"
                      >
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </div>
                  <div className="browser-iframe-container">
                    <iframe 
                      src={project.url} 
                      title={`Vista previa de ${project.title}`}
                      className="browser-iframe"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>

                <p className="iframe-warning">
                  <span aria-hidden="true">⚠️ </span><strong>Nota:</strong> Si el sitio no carga, haz clic en <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${project.title} en una pestaña nueva`}>Abrir sitio <span aria-hidden="true">↗</span></a>.
                </p>

                <div className="portfolio-card-actions">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-external"
                    aria-label={`Visitar el sitio oficial de ${project.title} en una pestaña nueva`}
                  >
                    Visitar Sitio Oficial ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" aria-labelledby="experience-title">
        <div className="container">
          <h2 id="experience-title">Experiencia Profesional</h2>
          <div className="experience-item">
            <h3>Especialista en IA y Automatización</h3>
            <p className="company">Fractalia Colombia · Proyecto GENIA para Telefónica</p>
            <p className="date">Jun. 2025 – 23 abr. 2026</p>
            <p>Desarrollé e integré asistentes de IA generativa para optimizar procesos corporativos. Orquesté con Node-RED flujos que conectan servicios web, APIs y capacidades de IA; integré LLM y NLP mediante APIs y conecté agentes con interfaces frontend. Colaboré con equipos multidisciplinarios en la definición e implementación de las soluciones.</p>
          </div>
          <div className="experience-item">
            <h3>Full Stack Developer</h3>
            <p className="company">BRZY University</p>
            <p className="date">Jun. 1 – ago. 1, 2026</p>
            <p>Construí una plataforma pública y autenticada de capacitación con paneles por rol y funciones de incorporación, seguimiento del progreso, certificación y administración, usando PocketBase, React, JavaScript, React Router, Vite y Tailwind. Utilicé agentes de IA como apoyo durante el desarrollo y dirigí y validé la implementación técnica.</p>
          </div>
          <div className="experience-item">
            <h3>Senior Advanced Developer / Tech Lead</h3>
            <p className="company">Scotiabank Colpatria</p>
            <p className="date">Jun. 2021 – feb. 2025</p>
            <p>Lideré equipo y ceremonias Scrum, y desarrollé soluciones full stack con Angular y React. Apliqué TDD, pruebas unitarias, SonarQube y CI/CD como parte del ciclo de desarrollo y entrega.</p>
          </div>
          <div className="experience-item">
            <h3>Architect Developer</h3>
            <p className="company">CEIBA Software</p>
            <p className="date">Jul. 2020 – jun. 2021</p>
            <p>Desarrollé backend con Java 8 y arquitectura hexagonal, aplicaciones Angular y soluciones con bases de datos relacionales y NoSQL. Trabajé con JUnit 5, TDD, Jenkins y SonarQube.</p>
          </div>
          <div className="experience-item">
            <h3>Java Developer</h3>
            <p className="company">Softtek</p>
            <p className="date">Abr. 2017 – jul. 2020</p>
            <p>Desarrollé microservicios Java y servicios REST/SOAP, además de interfaces con Angular y TypeScript. Trabajé con Oracle, SQL Server, JDBC, JPA y procesos de integración con Jenkins.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section" aria-labelledby="education-title">
        <div className="container">
          <h2 id="education-title">Educación</h2>
          <div className="experience-item">
            <h3>Estudios de Ingeniería de Sistemas (hasta 8.º semestre)</h3>
            <p className="company">Universidad Central</p>
            <p className="date">2017 – 2024</p>
          </div>
          <div className="experience-item">
            <h3>Estudios de Ingeniería de Sistemas (hasta 5.º semestre)</h3>
            <p className="company">Universidad Nacional de Colombia</p>
            <p className="date">2011 – 2014</p>
          </div>
          <div className="experience-item">
            <h3>Técnico en Sistemas de Información</h3>
            <p className="company">Colegio Bosques de Sherwood</p>
            <p className="date">2008 – 2010</p>
          </div>
          <div className="experience-item">
            <h3>Certificado Daxus: Inmersión IA en la Práctica</h3>
            <p className="company">Daxus</p>
            <p className="date">3 oct. 2026 · 8 horas · Certificado de participación</p>
            <p><a href="/Certificado%20Daxus%20-%20Inmersi%C3%B3n%20IA%20en%20la%20Pr%C3%A1ctica.pdf" target="_blank" rel="noopener noreferrer">Ver certificado PDF (se abre en una pestaña nueva)</a></p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-bg" aria-labelledby="contact-title">
        <div className="container">
          <h2 id="contact-title">Contacto</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:julian04280@gmail.com">julian04280@gmail.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Teléfono</h3>
              <p><a href="https://wa.me/573024498292" target="_blank" rel="noopener noreferrer">3024498292 (WhatsApp)</a></p>
            </div>
            <div className="contact-item">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/julian04280/" target="_blank" rel="noopener noreferrer">linkedin.com/in/julian04280</a></p>
            </div>
            <div className="contact-item">
              <h3>GitHub</h3>
              <p><a href="https://github.com/julian04280" target="_blank" rel="noopener noreferrer">github.com/julian04280</a></p>
            </div>
            <div className="contact-item">
              <h3>Facebook</h3>
              <p><a href="https://www.facebook.com/julian04280" target="_blank" rel="noopener noreferrer">facebook.com/julian04280</a></p>
            </div>
            <div className="contact-item">
              <h3>Instagram</h3>
              <p><a href="https://www.instagram.com/julian04280/" target="_blank" rel="noopener noreferrer">@julian04280</a></p>
            </div>
          </div>
        </div>
      </section>
      </main>

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
