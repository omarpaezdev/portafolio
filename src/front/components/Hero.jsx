const TECH_BADGES = ["React", "Flask", "Python", "PostgreSQL", "Node.js", "WordPress"];

export default function Hero() {
  const foto = "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1777200272/foto_xquef2.png";
  return (
    <section className="op-hero" id="inicio">
      <div className="op-hero-grid">
        <div>
          <div className="op-hero-tag">Full Stack Developer · disponible</div>
          <h1 className="op-hero-name">
            <span className="line">Hola, soy</span>
            <span className="line">Omar Páez</span>
          </h1>
          <p className="op-hero-sub">
            Desarrollador FullStack. Enfocado en la resolución eficiente de
            problemas y la colaboración efectiva en equipos.
          </p>
          <div className="op-hero-tech-badges">
            {TECH_BADGES.map((tech) => (
              <span className="op-tech-badge" key={tech}>{tech}</span>
            ))}
          </div>
          <div className="op-hero-actions">
            <a href="#contacto" className="op-btn op-btn-primary">Contáctame →</a>
            <a href="https://drive.google.com/file/d/1uQKcxLLc7zSurrjowhzDnfY1VGxSEBkS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="op-btn op-btn-ghost">Descargar CV</a>
          </div>
        </div>

        <div className="op-hero-photo-wrap">
          <div className="op-hero-glow" />
          <img className="op-hero-photo" src={foto} alt="Omar Páez" loading="eager" />

        </div>
      </div>

      <div className="op-hero-scroll">
        <div className="op-scroll-line" />
        <span className="op-scroll-label">scroll</span>
      </div>
    </section>
  );
}
