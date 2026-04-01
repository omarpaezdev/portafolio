import { Link } from "react-router-dom";
import { useState } from "react";
import { X, Menu } from "lucide-react";

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Conoceme" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Proyectos" },
    { id: "contact", label: "Contacto" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-container">
      <div className="container-fluid mx-5">
        {/*Logo*/}
        <a className="navbar-brand logo-brand"></a>
        <button
          className="navbar-toggler navbar-icon bg-white "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white "></span>
        </button>
        {/* Navbar Desktop */}
        <div
          className="collapse navbar-collapse d-flex justify-content-center align-items-center gap-4 w-50 between-navlinks "
          id="navbarNav"
        >
          <div class="collapse navbar-collapse  justify-content-end  gap-4 me-5 " id="navbarNav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        {/* Button Mobile Menu*/}
      </div>
    </nav>
  );
};
