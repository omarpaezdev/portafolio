import { useState } from "react";



const About = () => {
    const [showFullText, setShowFullText] = useState(false);
  return (
    <section className="section-custom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h2 className="section-title">¡Conoceme!</h2>
            <div className={`about-card ${showFullText ? "expanded" : "collapsed"}`}>
              <p>
                Soy un desarrollador{" "}
                <span style={{ color: "white", fontWeight: "500" }}>
                  full stack
                </span>
                , que diseña y desarrolla sitios y aplicaciones web, lo que
                contribuye al éxito del producto final. Consulta algunos de mis
                trabajos en la sección de Proyectos.
              </p>

              <p>
                También me gusta compartir contenido relacionado con lo que he
                aprendido a lo largo de los años en desarrollo web para que
                pueda ayudar a otros miembros de la comunidad de
                desarrolladores. No dudes en conectarte o seguirme en{" "}
                <a
                  href="https://linkedin.com/in/omarpaez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>{" "}
                e{" "}
                <a
                  href="https://instagram.com/omarp.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                , donde publico contenido útil sobre desarrollo web y
                programación.
              </p>

              <p>
                Estoy abierto a oportunidades laborales donde pueda contribuir,
                aprender y crecer. Si encuentras una buena oportunidad que se
                ajuste a mis habilidades y experiencia, no dudes en contactarme.
              </p>


            </div>
                <button
                  className="read-more-btn"
                  onClick={() => setShowFullText(!showFullText)}
                >
                  {showFullText ? "Leer menos  ▲" : "Leer más ▼"}
                </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
