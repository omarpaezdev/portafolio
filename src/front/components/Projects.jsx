import { use } from "react";
import Skills from "./Skills";
import { useState, useEffect } from "react";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992); // Cambia el valor según el breakpoint deseado
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const projects = [
    {
      id: 1,
      title: "MentorMatch",
      description: `Web donde los mentores con experiencia y conocimiento en el area Tech pueden crear su perfil 
                            y crear sus tipos de mentorias y configurar sus sesiones. Los estudiantes pueden crear su 
                            perfil y realizar la busqueda del mentor que brinde mentorias en el tema especifico en el cual esta 
                            interesado. Al encontrar el mentor, el estudiante puede realizar una reserva de sesion. 
                            La web hace uso de la API de calendly usando la cuenta del mentor, previamente autorizada.`,
      image:
        "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1766053513/1_ggcldw.png",
      year: "2025",
      duration: "1 mes",
      difficulty: "Anvanzado",
      skills: [
        "Python",
        "React",
        "Bootstrap",
        "Flask",
        "JWT",
        "PostgreSQL",
        "APIs REST",
      ],
      demo: "https://sample-service-name-ovgh.onrender.com/",
      github: "https://github.com/omarpaezdev/proyecto-final-mentormatch",
    },
    {
      id: 2,
      title: "Tallepro",
      description: `Proyecto full-stack orientado a digitalizar y automatizar la operación de talleres mecánicos: desde la recepción del vehículo hasta su entrega al cliente.`,
      image:
        "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1775080862/1_yjlfcm.png",
      year: "2026",
      duration: "4 meses",
      difficulty: "Avanzado",
      skills: ["Python", "React", "Bootstrap", "Flask", "APIs REST", "Whatsapp API"],
      github: "https://github.com/omarpaezdev/tallerpro",
    },
    {
      id: 3,
      title: "PokeAPI",
      description: `Web desarrollada en haciendo uso de React y Python Flask. Consumiendo la API de PokeAPI.`,
      image:
        "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1766053684/1_anv5hc.png",
      year: "2025",
      duration: "2 semanas",
      difficulty: "Principiante",
      skills: ["Python", "React", "Bootstrap", "Flask", "APIs REST"],
      demo: "https://blog-pokemon-taupe.vercel.app/pokemon/bulbasaur",
      github: "https://github.com/omarpaezdev/blog-pokemon",
    },
  ];

  const projectsPerPage = isMobile ? 1 : 2 ;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };


  useEffect(() => {
   
      setCurrentPage(0); // Reinicia a la primera página en móvil
    },[isMobile]);   


  const startIndex = currentPage * projectsPerPage;
  const currentProjects = projects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  return (
  <section className="section-custom">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>

        <div className="projects-wrapper">
          {/* Botón Anterior - Lado Izquierdo */}
          {totalPages > 1 && (
            <button
              onClick={prevPage}
              className="btn-nav-arrow d-none d-lg-flex"
              aria-label="Página anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          )}

          {/* Cards Container */}
          <div className="projects-cards-container">
            <div className="row g-4">
              {currentProjects.map((project, index) => (
                <div className="col-lg-6" key={startIndex + index}>
                  <div className="project-card h-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />

                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>

                      <p className="project-description">{project.description}</p>

                      <div className="project-info">
                        <div className="project-info-item">
                          <span>🗓️</span>
                          <div>
                            <span className="project-info-label">Año: </span>
                            <span className="project-info-value">{project.year}</span>
                          </div>
                        </div>
                        <div className="project-info-item">
                          <span>🕛</span>
                          <div>
                            <span className="project-info-label">Duración: </span>
                            <span className="project-info-value">{project.duration}</span>
                          </div>
                        </div>
                        <div className="project-info-item">
                          <span>🎯</span>
                          <div>
                            <span className="project-info-label">Dificultad: </span>
                            <span className="project-info-value">{project.difficulty}</span>
                          </div>
                        </div>
                      </div>

                      <div className="project-skills">
                        {project.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="d-flex flex-column flex-sm-row gap-3">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-custom btn-demo"
                        >
                          <img src='https://res.cloudinary.com/dp6e1sg4y/image/upload/v1766059499/demo_kf4t4s.png' alt="Demo" width="24" height="24" />
                          Demo
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-custom btn-github"
                        >
                          <img src='https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/github_yxwcau.png' alt="GitHub" width="24" height="24" />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Siguiente - Lado Derecho */}
          {totalPages > 1 && (
            <button
              onClick={nextPage}
              className="btn-nav-arrow d-none d-lg-flex"
              aria-label="Página siguiente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          )}

        </div>
        
           { isMobile ? null :
            <span className="project-counter mt-4 d-none d-lg-inline-block">
              {currentPage + 1} / {totalPages}
            </span>
}
          



        {/* Navegación móvil - debajo de las cards */}
        {totalPages > 1 && (
          <div className="project-nav d-flex d-lg-none">
            <button
              onClick={prevPage}
              className="btn-nav-arrow"
              aria-label="Página anterior"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <span className="project-counter">
              {currentPage + 1} / {totalPages}
            </span>

            <button
              onClick={nextPage}
              className="btn-nav-arrow"
              aria-label="Página siguiente"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default Projects;
