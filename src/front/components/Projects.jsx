import { useState, useRef, useEffect } from "react";


const PROJECTS = [
  {
    id: 1,
    title: "MentorMatch",
    images: ["https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881973/mentormatch_1_vbdswq.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881973/mentormatch_2_b1wiai.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881973/mentormatch_3_psyzvp.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881973/mentormatch_4_izopoo.png"],
    desc: "Web donde los mentores con experiencia y conocimiento en el area Tech pueden crear su perfil y crear sus tipos de mentorias y configurar sus sesiones. Los estudiantes pueden crear su perfil y realizar la busqueda del mentor que brinde mentorias en el tema especifico. Al encontrar el mentor, el estudiante puede realizar una reserva de sesion usando la API de Calendly.",
    year: "2025", 
    duration: "1 mes",
    difficulty: "Avanzado",
    tags: ["Python", "React", "Bootstrap", "Flask", "JWT", "PostgreSQL", "APIs REST"],
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "TallerPro",
    images: ["https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_1_wi5hbr.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_2_cvegmu.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_3_afbrpy.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_4_fyni5i.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_5_axlunq.png", "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1776881948/tallerpro_6_qiwfdb.png"],
    desc: `Funcionalidades Principales
            Gestión de vehículos y clientes
            Registro de vehículos con ficha técnica completa (VIN, matrícula, tipo de combustible, transmisión, kilometraje) y vinculación a clientes con datos de contacto y documentación.
            Diagnósticos
            Los técnicos generan informes de diagnóstico con imágenes, horas estimadas y estados (borrador, completado, enviado al cliente). Cada diagnóstico genera un enlace público único con token para que el cliente lo consulte sin autenticación.
            Presupuestos
            Creación, envío y aprobación/rechazo digital de presupuestos. El cliente firma digitalmente desde un enlace público. El sistema registra IPs, timestamps y estado del flujo completo.
            Tracking de vehículos en tiempo real
            Sistema de seguimiento por etapas (recepción → diagnóstico → presupuesto → reparación → prueba de ruta → entrega) visible para el cliente mediante token único, sin necesidad de login.
            Notificaciones automáticas vía WhatsApp
            Integración con la API de WhatsApp Business de Meta. Cada cambio de estado del vehículo dispara una notificación automatizada al cliente usando templates aprobados por Meta (recepción, diagnóstico enviado, presupuesto para aprobación, reparación iniciada, listo para entrega, etc.).
            Configuración del taller con OAuth
            Panel de administración para configurar los datos del taller y conectar la cuenta de WhatsApp Business mediante flujo OAuth 2.0 con Meta. Las credenciales se almacenan en base de datos con fallback a variables de entorno.
            Control de acceso por roles
            Sistema de permisos con roles ADMIN y TECHNICIAN. Los técnicos sólo pueden gestionar sus propios diagnósticos; los administradores tienen acceso completo incluyendo eliminación y configuración global.
            Entregas y seguimiento post-entrega
            Registro de entregas con checklist digital, firma del cliente y seguimiento posterior con nivel de satisfacción e incidencias reportadas.`,
    year: "2026",
    duration: "4 meses",
    difficulty: "Avanzado",
    tags: ["Python", "React", "Bootstrap", "Flask", "APIs REST", "Whatsapp API"],
    demo: "#",
    repo: "#",
  },
];

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}

function ProjectModal({ project, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.images || [];
  const hasGallery = images.length > 1;

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prevImage = () => setCurrentImage((c) => (c - 1 + images.length) % images.length);
  const nextImage = () => setCurrentImage((c) => (c + 1) % images.length);

  return (
    <div 
      className="op-modal-overlay" 
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(6, 6, 10, 0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        backdropFilter: "blur(8px)"
      }}
    >
      <div 
        className="op-modal-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#06060a",
          border: "1px solid rgba(0, 229, 176, 0.2)",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "560px",
          maxHeight: "80vh",
          overflowX: "hidden",
          overflowY: "auto",
          position: "relative",
          boxShadow: "0 0 60px rgba(0, 229, 176, 0.1), 0 25px 50px rgba(0, 0, 0, 0.5)",
          scrollbarWidth: "thin",
          scrollbarColor: "#5a5868 #0d0d14"
        }}
        onScroll={(e) => {
          const thumb = e.currentTarget;
          if (thumb.scrollHeight > thumb.clientHeight) {
            thumb.style.scrollbarColor = "#00e5b0";
          }
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, #00e5b0, transparent)"
        }} />
        <button 
          className="op-modal-close" 
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
            background: "#13131d",
            border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "8px",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9896a4",
            cursor: "pointer",
            transition: "all 0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00e5b0";
            e.currentTarget.style.color = "#00e5b0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            e.currentTarget.style.color = "#9896a4";
          }}
        >
          <CloseIcon />
        </button>
        
        <div style={{ padding: "1.5rem 1.5rem 0" }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.5rem",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "1rem"
          }}>{project.title}</h3>
        </div>

        {hasGallery && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0 1.5rem",
            marginBottom: "1rem"
          }}>
            <button 
              className="op-gallery-btn" 
              onClick={prevImage}
              style={{
                width: "36px",
                height: "36px",
                flexShrink: 0,
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#13131d",
                color: "#9896a4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00e5b0";
                e.currentTarget.style.color = "#00e5b0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "#9896a4";
              }}
            >
              <ChevronLeft />
            </button>
            <div style={{
              flex: 1,
              aspectRatio: "16/9",
              overflow: "hidden",
              borderRadius: "8px",
              background: "#0d0d14",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img 
                src={images[currentImage]} 
                alt={`${project.title} - ${currentImage + 1}`} 
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain"
                }} 
              />
            </div>
            <button 
              className="op-gallery-btn" 
              onClick={nextImage}
              style={{
                width: "36px",
                height: "36px",
                flexShrink: 0,
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.07)",
                background: "#13131d",
                color: "#9896a4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#00e5b0";
                e.currentTarget.style.color = "#00e5b0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "#9896a4";
              }}
            >
              <ChevronRight />
            </button>
          </div>
        )}

        {hasGallery && images.length > 1 && (
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            paddingBottom: "1rem"
          }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                style={{
                  width: i === currentImage ? "20px" : "8px",
                  height: "8px",
                  borderRadius: i === currentImage ? "4px" : "50%",
                  background: i === currentImage ? "#00e5b0" : "#5a5868",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  padding: 0
                }}
              />
            ))}
          </div>
        )}

        <div style={{ padding: "0 1.5rem 2rem" }}>
          <p style={{
            color: "#9896a4",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            whiteSpace: "pre-wrap",
            marginBottom: "1.5rem"
          }}>{project.desc}</p>
          
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#9896a4" }}>
              <span>📅</span><span><strong style={{ color: "#f0eee8" }}>Año:</strong> {project.year}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#9896a4" }}>
              <span>⏱</span><span><strong style={{ color: "#f0eee8" }}>Duración:</strong> {project.duration}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: "#9896a4" }}>
              <span>🎯</span><span><strong style={{ color: "#f0eee8" }}>Dificultad:</strong> {project.difficulty}</span>
            </div>
          </div>
          
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}>
            {project.tags.map((t) => (
              <span 
                key={t}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#00e5b0",
                  background: "rgba(0,229,176,0.08)",
                  border: "1px solid rgba(0,229,176,0.2)",
                  padding: "0.28rem 0.7rem",
                  borderRadius: "4px",
                  letterSpacing: "0.04em"
                }}
              >
                {t}
              </span>
            ))}
          </div>
          
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <a 
              href={project.demo} 
              style={{
                background: "transparent",
                color: "#00e5b0",
                border: "1px solid #00e5b0",
                padding: "0.6rem 1.25rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                transition: "all 0.2s"
              }}
            >
              ⚡ Demo
            </a>
            <a 
              href={project.repo} 
              style={{
                background: "#13131d",
                color: "#f0eee8",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "0.6rem 1.25rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                transition: "all 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem"
              }}
            >
              <GithubIcon /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const sliderRef = useRef(null);

  const goTo = (n) => {
    const idx = (n + PROJECTS.length) % PROJECTS.length;
    setCurrent(idx);
    if (sliderRef.current) {
      const slideW = sliderRef.current.children[0]?.offsetWidth || 0;
      const gap = 24;
      sliderRef.current.style.transform = `translateX(-${idx * (slideW + gap)}px)`;
    }
  };

  let touchStart = 0;
  const onTouchStart = (e) => { touchStart = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(current + (delta > 0 ? 1 : -1));
  };

  const needsTruncation = (text) => {
    return text.length > 180;
  };

  return (
    <section className="op-section op-section-alt" id="proyectos">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">03</span>
        <h2 className="op-section-title">Proyectos</h2>
        <div className="op-section-line" />
      </div>

      <div className="op-reveal op-rd1">
        <div className="op-slider-outer">
          <div
            className="op-slider"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {PROJECTS.map((p) => (
              <div className="op-slide" key={p.id}>
                <div className="op-project-card">
                  {p.images && p.images[0] ? (
                    <img className="op-project-img" src={p.images[0]} alt={p.title} />
                  ) : (
                    <div className="op-project-img-placeholder">
                      <span>{p.title}</span>
                    </div>
                  )}
                  <div className="op-project-body">
                    <h3 className="op-project-title">{p.title}</h3>
                    <div className="op-project-desc-wrap" style={{ marginBottom: "1.5rem" }}>
                      <p 
                        className={`op-project-desc${needsTruncation(p.desc) ? " truncated" : ""}`}
                        style={needsTruncation(p.desc) ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          lineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden"
                        } : {}}
                      >
                        {p.desc}
                      </p>
                      {needsTruncation(p.desc) && (
                        <button 
                          className="op-btn-link" 
                          onClick={() => setSelectedProject(p)}
                          style={{
                            background: "transparent",
                            border: "none",
                            color: "#00e5b0",
                            cursor: "pointer",
                            marginTop: "0.5rem"
                          }}
                        >
                          Ver más
                        </button>
                      )}
                    </div>
                    <div className="op-project-meta">
                      <div className="op-project-meta-item">
                        <span>📅</span><span><strong>Año:</strong> {p.year}</span>
                      </div>
                      <div className="op-project-meta-item">
                        <span>⏱</span><span><strong>Duración:</strong> {p.duration}</span>
                      </div>
                      <div className="op-project-meta-item">
                        <span>🎯</span><span><strong>Dificultad:</strong> {p.difficulty}</span>
                      </div>
                    </div>
                    <div className="op-project-tags">
                      {p.tags.map((t) => <span className="op-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="op-project-links">
                      <a href={p.demo} className="op-btn op-btn-sm op-btn-demo" target="_blank" rel="noreferrer">
                        ⚡ Demo
                      </a>
                      <a href={p.repo} className="op-btn op-btn-sm op-btn-gh" target="_blank" rel="noreferrer">
                        <GithubIcon /> GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="op-slider-nav">
          <button className="op-slider-btn" onClick={() => goTo(current - 1)}>
            <ChevronLeft />
          </button>
          <div className="op-slider-dots">
            {PROJECTS.map((_, i) => (
              <div
                key={i}
                className={`op-dot${i === current ? " active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="op-slider-btn" onClick={() => goTo(current + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
