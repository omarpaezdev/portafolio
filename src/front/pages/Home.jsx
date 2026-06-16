import "../index.css";
import { useCursor, useBgCanvas, useScrollReveal, useNavScroll } from "../hooks/usePortfolio.js";

import Hero from "../components/Hero.jsx";
import { Conoceme, Skills } from "../components/ConocemeSkills.jsx";
import Projects from "../components/Projects.jsx";
import Experience from "../components/Experience.jsx";
import { Contact } from "../components/ContactFooter.jsx";

export const Home = () => {
  useCursor();
  useBgCanvas();
  useScrollReveal();
  useNavScroll();

  return (
    <>
      <div className="op-cursor" id="op-cur" />
      <div className="op-cursor-ring" id="op-cur-ring" />
      <canvas className="op-bg-canvas" id="op-canvas" />

      <main>
        <Hero />
        <Conoceme />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
