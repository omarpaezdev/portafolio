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
];

export function Conoceme() {
  return (
    <section className="op-section op-section-alt" id="conoceme">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">01</span>
        <h2 className="op-section-title">¡Conóceme!</h2>
        <div className="op-section-line" />
      </div>
      <div className="op-conoceme-card op-reveal op-rd1">
        <p>
          Construyo aplicaciones web de principio a fin: desde interfaces con React y Next.js
          hasta backends robustos con Python, Django, Flask y PostgreSQL. También integro
          capacidades de IA para llevar los productos un paso más allá.
        </p>
        <p>
          Con 2-4 años en el campo, he aprendido que el código más valioso es el que resuelve
          problemas reales, y eso guía cada decisión que tomo.
        </p>
        <p>
          Comparto ese aprendizaje en{" "}
          <a href="https://www.linkedin.com/in/omarpaez/" target="_blank" rel="noreferrer">LinkedIn</a>
          {" "}e Instagram. Y si buscas un desarrollador que contribuya, aprenda rápido y no le
          tema a los retos, me encantaría que conversemos.
        </p>
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
          {SKILLS.map((s) => (
            <div className="op-skill-item" key={s.name}>
              <img src={s.src} alt={s.name} style={s.style} />
              <span className="op-skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
