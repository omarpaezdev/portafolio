// ─── Importa el CSS (ajusta la ruta a tu estructura) ───────────────────────
import "../index.css";

// ─── Hooks ─────────────────────────────────────────────────────────────────
import { useCursor, useBgCanvas, useScrollReveal, useNavScroll } from "../hooks/usePortfolio.js";


// ─── Componentes ───────────────────────────────────────────────────────────
import { Navbar, Sidebar } from "../components/NavSidebar.jsx";
import Hero from "../components/Hero.jsx";
import { Conoceme, Skills } from "../components/ConocemeSkills.jsx";
import Projects from "../components/Projects.jsx";
import { Contact, Footer } from "../components/ContactFooter.jsx";

// ─── Foto (descomenta y ajusta la ruta cuando tengas la imagen) ─────────────
//import foto from "../assets/foto.jpg";

export const Home = () => {
  useCursor();
  useBgCanvas();
  useScrollReveal();
  useNavScroll();

  return (
    <>
      {/* Cursor */}
      <div className="op-cursor" id="op-cur" />
      <div className="op-cursor-ring" id="op-cur-ring" />

      {/* Fondo animado */}
      <canvas className="op-bg-canvas" id="op-canvas" />

      {/* Layout */}
      <Sidebar />
      {/* <Navbar /> */}

      <main>
        <Hero /* foto={foto} */ />
        <Conoceme />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
