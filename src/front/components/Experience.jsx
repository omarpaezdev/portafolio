const EXPERIENCE = [
  {
    period: "2024 - Actual",
    role: "Asociado de Almacén",
    company: "Arvato",
    location: "Toledo, España",
    desc: "Picking, Packing, Actividades Generales de Almacén",
    tags: ["Logística"],
  },
  {
    period: "2024",
    role: "Desarrollador Web",
    company: "Ecommerce newbac.net",
    location: "Móstoles, Madrid, España",
    desc: "Optimización del rendimiento del sitio de e-commerce rediseñando páginas clave e implementando WordPress/WooCommerce, logrando una reducción del 25% en el tiempo de carga.",
    tags: ["WordPress", "WooCommerce", "GTM", "GA4", "WPO"],
  },
  {
    period: "2023",
    role: "Desarrollador Web",
    company: "Los Mayores Primero S.L.",
    location: "Madrid, España",
    desc: "Instalación y configuración de WordPress. Diseño responsivo completo con Elementor Pro. Gestión de contenido y optimización técnica (WPO, SEO).",
    tags: ["WordPress", "Elementor Pro", "SEO", "WPO"],
  },
];

export default function Experience() {
  return (
    <section className="op-section op-section-alt" id="experiencia">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">04</span>
        <h2 className="op-section-title">Experiencia</h2>
        <div className="op-section-line" />
      </div>

      <div className="op-timeline">
        <div className="op-timeline-line" />
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.period + exp.company}
            className={`op-timeline-item op-reveal op-rd${(i % 3) + 1}`}
          >
            <div className="op-timeline-dot" />
            <div className="op-timeline-card">
              <span className="op-timeline-period">{exp.period}</span>
              <h3 className="op-timeline-role">{exp.role}</h3>
              <span className="op-timeline-company">
                {exp.company} · {exp.location}
              </span>
              <p className="op-timeline-desc">{exp.desc}</p>
              <div className="op-timeline-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="op-timeline-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
