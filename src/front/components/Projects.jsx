import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

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
    desc: "Funcionalidades Principales: Gestión de vehículos y clientes. Registro de vehículos con ficha técnica completa (VIN, matrícula, tipo de combustible, transmisión, kilometraje) y vinculación a clientes con datos de contacto y documentación. Diagnósticos: Los técnicos generan informes de diagnóstico con imágenes, horas estimadas y estados. Cada diagnóstico genera un enlace público único con token para que el cliente lo consulte sin autenticación. Presupuestos: Creación, envío y aprobación/rechazo digital de presupuestos. Tracking de vehículos en tiempo real. Notificaciones automáticas vía WhatsApp Business API.",
    year: "2026",
    duration: "4 meses",
    difficulty: "Avanzado",
    tags: ["Python", "React", "Bootstrap", "Flask", "APIs REST", "Whatsapp API"],
    demo: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "Quiniela Mundial 2026",
    images: [
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/inicio_qpt9ee.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594190/pag-1_otaza4.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594190/pag-2_itkvcd.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/pag-3_a1gvym.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/pag-4_by8zzq.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594190/pag-5_o2jqwx.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/pag-6_mtw3ha.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/pag-7_qt5uti.png",
      "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1781594191/pag-8_kzdpms.png",
    ],
    desc: "Plataforma web para la gestión de quinielas del Mundial 2026. Los usuarios pueden registrar sus pronósticos, seguir puntuaciones en tiempo real y competir en ligas privadas con amigos. Incluye sistema de autenticación, panel de administración para gestionar partidos y resultados, cálculo automático de puntuaciones según reglas personalizables, y rankings actualizados dinámicamente.",
    year: "2026",
    duration: "2 meses",
    difficulty: "Intermedio",
    tags: ["Python", "React", "Bootstrap", "Flask", "PostgreSQL", "APIs REST", "JWT"],
    demo: "https://play.iatecapp.com/",
    repo: "https://github.com/omarpaezdev/quiniela-mundial-2026",
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

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const goTo = (n) => {
    const idx = (n + PROJECTS.length) % PROJECTS.length;
    setCurrent(idx);
    if (sliderRef.current) {
      const slideW = sliderRef.current.children[0]?.offsetWidth || 0;
      const gap = parseFloat(getComputedStyle(sliderRef.current).gap) || 16;
      sliderRef.current.style.transform = `translateX(-${idx * (slideW + gap)}px)`;
    }
  };

  let touchStart = 0;
  const onTouchStart = (e) => { touchStart = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) goTo(current + (delta > 0 ? 1 : -1));
  };

  const needsTruncation = (text) => text.length > 180;

  const openModal = (p) => {
    document.body.style.overflow = "hidden";
    setSelectedProject(p);
    setImageIndex(0);
  };

  const closeModal = () => {
    document.body.style.overflow = "";
    setSelectedProject(null);
    setImageIndex(0);
  };

  useEffect(() => {
    if (!selectedProject) return;
    const onKey = (e) => { if (e.key === "Escape") closeModal(); };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const prevImage = () => {
    setImageIndex((prev) => prev > 0 ? prev - 1 : (selectedProject?.images?.length || 1) - 1);
  };

  const nextImage = () => {
    setImageIndex((prev) => ((prev + 1) % (selectedProject?.images?.length || 1)));
  };

  return (
    <>
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
                  <div className="op-project-card" onClick={() => openModal(p)}>
                    {p.images && p.images[0] ? (
                      <img className="op-project-img" src={p.images[0]} alt={p.title} loading="lazy" />
                    ) : (
                      <div className="op-project-img-placeholder">
                        <span>{p.title}</span>
                      </div>
                    )}
                    <div className="op-project-body">
                      <h3 className="op-project-title">{p.title}</h3>
                      <div className="op-project-desc-wrap">
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
                            onClick={(e) => { e.stopPropagation(); openModal(p); }}
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
                        <a href={p.demo} className="op-btn op-btn-sm op-btn-demo" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                          ⚡ Demo
                        </a>
                        <a href={p.repo} className="op-btn op-btn-sm op-btn-gh" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
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
            <button className="op-slider-btn" aria-label="Anterior" onClick={() => goTo(current - 1)}>
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
            <button className="op-slider-btn" aria-label="Siguiente" onClick={() => goTo(current + 1)}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>

      {selectedProject && createPortal(
        <div 
          className="op-modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
        >
          <div className="op-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="op-modal-accent-line" />
            <button 
              className="op-modal-close" 
              onClick={closeModal}
              aria-label="Cerrar"
            >
              <CloseIcon />
            </button>
            
            <div className="op-modal-header">
              <h3 className="op-modal-title">{selectedProject.title}</h3>
            </div>

            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="op-modal-gallery">
                {selectedProject.images.length > 1 && (
                  <button 
                    className="op-gallery-btn" 
                    onClick={prevImage}
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft />
                  </button>
                )}
                <div className="op-modal-image-wrap">
                  <img 
                    className="op-modal-image"
                    src={selectedProject.images[imageIndex]} 
                    alt={`${selectedProject.title} - Imagen ${imageIndex + 1}`}
                    loading="lazy"
                  />
                </div>
                {selectedProject.images.length > 1 && (
                  <button 
                    className="op-gallery-btn" 
                    onClick={nextImage}
                    aria-label="Imagen siguiente"
                  >
                    <ChevronRight />
                  </button>
                )}
              </div>
            )}

            {selectedProject.images && selectedProject.images.length > 1 && (
              <div className="op-modal-dots">
                {selectedProject.images.map((_, i) => (
                  <button
                    key={i}
                    className={`op-modal-dot${i === imageIndex ? " active" : ""}`}
                    onClick={() => setImageIndex(i)}
                    aria-label={`Ir a imagen ${i + 1}`}
                  />
                ))}
              </div>
            )}

            <div className="op-modal-body">
              <p className="op-modal-desc">{selectedProject.desc}</p>
              
              <div className="op-modal-meta">
                <div className="op-project-meta-item">
                  <span>📅</span><span><strong>Año:</strong> {selectedProject.year}</span>
                </div>
                <div className="op-project-meta-item">
                  <span>⏱</span><span><strong>Duración:</strong> {selectedProject.duration}</span>
                </div>
                <div className="op-project-meta-item">
                  <span>🎯</span><span><strong>Dificultad:</strong> {selectedProject.difficulty}</span>
                </div>
              </div>
              
              <div className="op-project-tags" style={{ marginBottom: "1.75rem" }}>
                {selectedProject.tags.map((t) => (
                  <span className="op-tag" key={t}>{t}</span>
                ))}
              </div>
              
              <div className="op-project-links">
                <a 
                  href={selectedProject.demo} 
                  className="op-btn op-btn-sm op-btn-demo"
                  target="_blank" 
                  rel="noreferrer"
                >
                  ⚡ Demo
                </a>
                <a 
                  href={selectedProject.repo} 
                  className="op-btn op-btn-sm op-btn-gh"
                  target="_blank" 
                  rel="noreferrer"
                >
                  <GithubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
