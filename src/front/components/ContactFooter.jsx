// ─── Contact ───────────────────────────────────────────────────────────────

import { useState } from "react";

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/>
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conecta tu backend Flask: fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", topic: "", message: "" });
  };

  return (
    <section className="op-section" id="contacto">
      <div className="op-section-header op-reveal">
        <span className="op-section-num">04</span>
        <h2 className="op-section-title">Contacto</h2>
        <div className="op-section-line" />
      </div>

      <div className="op-contact-grid">
        {/* Info */}
        <div className="op-reveal op-rd1">
          <div className="op-contact-info">
            <h3>¡No dudes en contactarme!</h3>
            <p>Estoy disponible para nuevas oportunidades y proyectos.</p>
          </div>
          <div className="op-contact-list">
            <a href="mailto:paez142@gmail.com" className="op-contact-item">
              <EmailIcon />
              paez142@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/omarpaez/" target="_blank" rel="noreferrer" className="op-contact-item">
              <LinkedInIcon />
              linkedin.com/in/omarpaez/
            </a>
            <a href="https://github.com/omarpaezdev" target="_blank" rel="noreferrer" className="op-contact-item">
              <GithubIcon />
              github.com/omarpaezdev
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="op-form-card op-reveal op-rd2">
          <h3>Envíame un mensaje</h3>
          <form onSubmit={handleSubmit}>
            <div className="op-form-group">
              <input
                name="name" className="op-input" placeholder="Su nombre"
                value={form.name} onChange={handleChange} required
              />
            </div>
            <div className="op-form-group">
              <input
                name="email" type="email" className="op-input" placeholder="Su correo electrónico"
                value={form.email} onChange={handleChange} required
              />
            </div>
            <div className="op-form-group">
              <select
                name="topic" className="op-select"
                value={form.topic} onChange={handleChange} required
              >
                <option value="" disabled>Seleccione un tema...</option>
                <option value="empleo">Oportunidad laboral</option>
                <option value="freelance">Proyecto freelance</option>
                <option value="consulta">Consulta técnica</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="op-form-group">
              <textarea
                name="message" className="op-textarea" placeholder="Su mensaje..."
                value={form.message} onChange={handleChange} required
              />
            </div>
            <button type="submit" className="op-btn-send">
              {sent ? "✓ Mensaje enviado" : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────

export function Footer() {
  return (
    <footer className="op-footer">
      <span className="op-footer-copy">
        © 2026 Omar Alfonso Páez Carrero — Desarrollador Freelance
      </span>
      <span className="op-footer-right">
        <span>TallerPro</span> es un proyecto de software operado por Omar Páez
      </span>
    </footer>
  );
}
