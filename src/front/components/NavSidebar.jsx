import { useState, useEffect } from "react";
import { useNavScroll } from "../hooks/usePortfolio";

const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#conoceme", label: "Sobre mí" },
  { href: "#skills", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  useNavScroll();
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="op-nav" id="op-nav" aria-label="Navegación principal">
      <a href="#inicio" className="op-nav-logo" aria-label="Inicio">
        OP<span>.</span>
      </a>
      <ul className="op-nav-links">
        {NAV_LINKS.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={active === l.href ? "active" : ""}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contacto" className="op-btn op-btn-primary op-btn-sm">
        Contáctame
      </a>
    </nav>
  );
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#conoceme", label: "Sobre mí" },
    { href: "#skills", label: "Habilidades" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="op-mobile-nav" aria-label="Navegación móvil">
      <button
        className="op-hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      >
        <span className={`op-hamburger-line ${isOpen ? "open" : ""}`} />
        <span className={`op-hamburger-line ${isOpen ? "open" : ""}`} />
        <span className={`op-hamburger-line ${isOpen ? "open" : ""}`} />
      </button>
      {isOpen && <div className="op-mobile-overlay" onClick={() => setIsOpen(false)} />}
      <div
        className={`op-mobile-menu ${isOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navegación"
      >
        <ul className="op-mobile-links">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="op-mobile-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="op-sidebar" aria-label="Redes sociales">
      <a href="https://www.linkedin.com/in/omarpaez/" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
      <a href="https://github.com/omarpaezdev" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      </a>
      <a href="mailto:info@omarpaez.es" title="Email" aria-label="Enviar correo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M22 7l-10 7L2 7"/>
        </svg>
      </a>
    </aside>
  );
}
