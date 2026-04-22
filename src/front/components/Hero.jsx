// Si tienes una foto, importa y pasa como prop:
// import foto from "../assets/foto.jpg"
// <Hero foto={foto} />

export default function Hero({ foto }) {
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
          <div className="op-hero-actions">
            <a href="#contacto" className="op-btn op-btn-primary">Contáctame →</a>
            {/* Reemplaza href con la URL real de tu CV */}
            <a href="#" className="op-btn op-btn-ghost">Descargar CV</a>
          </div>
        </div>

        <div className="op-hero-photo-wrap">
          {foto ? (
            <img className="op-hero-photo" src={foto} alt="Omar Páez" />
          ) : (
            // Quita esto cuando añadas tu foto
            <div className="op-hero-photo-placeholder">OP</div>
          )}
        </div>
      </div>

      <div className="op-hero-scroll">
        <div className="op-scroll-line" />
        <span className="op-scroll-label">scroll</span>
      </div>
    </section>
  );
}
