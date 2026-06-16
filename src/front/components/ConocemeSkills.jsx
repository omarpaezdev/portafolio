import { useState, useRef, useEffect } from "react";

const SKILLS = [
  { name: "React",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Python",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node JS",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Flask",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",       style: { filter: "invert(1)" } },
  { name: "Bootstrap",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MySQL",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "WordPress",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",  style: { filter: "invert(1)" } },
  { name: "WooCommerce", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg" },
  { name: "Git",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",    style: { filter: "invert(1)" } },
  { name: "OpenCode",    src: "https://opencode.ai/favicon.svg" },
  { name: "Claude Code", src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/claude.svg", style: { filter: "invert(1)" } },
];

const EXPERTISE = [
  {
    title: "Full Stack Development",
    desc: "Aplicaciones web de principio a fin: interfaces con React y Flask hasta backends robustos con Python, PostgreSQL y APIs REST.",
    tech: ["React", "Flask", "Python", "PostgreSQL", "Node.js"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "E-commerce & CMS",
    desc: "Tiendas online completas con WordPress y WooCommerce, optimización de rendimiento, integración de analytics y SEO técnico.",
    tech: ["WordPress", "WooCommerce", "Elementor", "GTM", "GA4"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    title: "Optimización & Analytics",
    desc: "Mejora de rendimiento web (WPO), reducción de tiempos de carga, implementación de herramientas de medición y análisis de datos.",
    tech: ["WPO", "SEO", "GTM", "Google Analytics", "Lighthouse"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: "AI-Assisted Development",
    desc: "Integración de modelos de IA como asistentes de codificación para acelerar el desarrollo, generar código limpio y crear skills personalizados que optimizan el flujo de trabajo.",
    tech: ["OpenCode", "Claude Code", "LLMs", "Prompt Engineering", "Cursor"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4c0 2-2 4-4 4s-4-2-4-4 2-4 4-4z" />
        <path d="M12 14c-4 0-8 1.5-8 4v2h16v-2c0-2.5-4-4-8-4z" />
        <circle cx="19" cy="7" r="3" />
        <path d="M22 11v2" />
      </svg>
    ),
  },
];

export function Conoceme() {
  return (
    <section className="op-section op-section-alt" id="conoceme">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">01</span>
        <h2 className="op-section-title">Sobre mí</h2>
        <div className="op-section-line" />
      </div>
      <p className="op-conoceme-intro op-reveal op-rd1">
        Construyo aplicaciones web de principio a fin. Con 2-4 años en el campo,
        he aprendido que el código más valioso es el que resuelve problemas reales.
      </p>
      <div className="op-expertise-grid">
        {EXPERTISE.map((ex, i) => (
          <div key={ex.title} className={`op-expertise-card op-reveal op-rd${i + 1}`}>
            <div className="op-expertise-icon">{ex.icon}</div>
            <h3 className="op-expertise-title">{ex.title}</h3>
            <p className="op-expertise-desc">{ex.desc}</p>
            <div className="op-expertise-tech">
              {ex.tech.map((t) => (
                <span key={t} className="op-expertise-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const sliderRef = useRef(null);
  const itemsPerSlide = 2;
  const totalSlides = Math.ceil(SKILLS.length / itemsPerSlide);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToSlide((currentSlide + 1) % totalSlides);
      } else {
        goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
      }
    }
  };

  return (
    <section className="op-section" id="skills">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">02</span>
        <h2 className="op-section-title">Skills</h2>
        <div className="op-section-line" />
      </div>

      <div 
        id="op-skills-slider-wrapper" 
        className="op-skills-slider-outer op-reveal op-rd1"
        style={{ display: isMobile ? "block" : "none" }}
      >
        <div
          className="op-skills-slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div className="op-skills-slide" key={slideIndex}>
              {SKILLS
                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                .map((s, idx) => (
                  <div className="op-skill-item" key={s.name}>
                    <img src={s.src} alt={s.name} style={s.style} />
                    <span className="op-skill-name">{s.name}</span>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div 
        id="op-skills-dots-wrapper" 
        className="op-skills-dots op-reveal"
        style={{ display: isMobile ? "flex" : "none" }}
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`op-skill-dot${index === currentSlide ? " active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <div 
        id="op-skills-grid-wrapper" 
        className="op-skills-card op-reveal op-rd1 desktop-only"
        style={{ display: isMobile ? "none" : "grid" }}
      >
        <div className="op-skills-grid desktop-only">
          {SKILLS.map((s, i) => (
            <div className={`op-skill-item op-reveal op-rd${(i % 4) + 1}`} key={s.name}>
              <img src={s.src} alt={s.name} style={s.style} />
              <span className="op-skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
