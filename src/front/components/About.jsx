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
                Construyo aplicaciones web de principio a fin: desde interfaces
                con React y Next.js hasta backends robustos con Python, Django,
                Flask y PostgreSQL. También integro capacidades de IA para llevar
                los productos un paso más allá.
              </p>

              <p>
                Con 2-4 años en el campo, he aprendido que el código más valioso
                es el que resuelve problemas reales, y eso guía cada decisión que
                tomo.
              </p>

              <p>
                Comparto ese aprendizaje en{" "}
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
                . Y si buscas un desarrollador que contribuya, aprenda rápido y
                no le tema a los retos, me encantaría que conversemos.
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
