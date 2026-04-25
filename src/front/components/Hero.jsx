// Si tienes una foto, importa y pasa como prop:


//import foto from "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1777113351/foto_syyokt.png"; // Asegúrate de que la ruta sea correcta 
//<Hero foto={foto} />

export default function Hero() {
  const foto = "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1777113351/foto_syyokt.png"; // Asegúrate de que la ruta sea correcta
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
            <a href="https://drive.google.com/file/d/1uQKcxLLc7zSurrjowhzDnfY1VGxSEBkS/view?usp=sharing" target="_blank" rel="noopener" className="op-btn op-btn-ghost">Descargar CV</a>
          </div>
        </div>

        <div className="op-hero-photo-wrap">
          <img className="op-hero-photo" src={foto} alt="Omar Páez" />
          
        </div>
      </div>

      <div className="op-hero-scroll">
        <div className="op-scroll-line" />
        <span className="op-scroll-label">scroll</span>
      </div>
    </section>
  );
}
