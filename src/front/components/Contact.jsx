import { useState } from 'react';
import { Mail, Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-6">
            <h2 className="contact-title">Contacto</h2>
            <p className="contact-subtitle">¡No dudes en contactarme!</p>

            <div className="d-flex flex-column gap-3">
              <a
                href="mailto:info@omarpaez.es"
                className="contact-item"
              >
                <Mail className='contact-icon' />
                <span className="contact-text">info@omarpaez.es</span>
              </a>

              <a
                href="https://linkedin.com/in/omarpaez/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <Linkedin className="contact-icon" />
                <span className="contact-text">linkedin.com/in/omarpaez/</span>
              </a>

              <a
                href="https://github.com/omarpaezdev"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <Github className="contact-icon" />
                <span className="contact-text">github.com/omarpaezdev</span>
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form">
              <h3 className="contact-form-title">Envíame un mensaje</h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Su nombre"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control form-control-custom"
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Su correo electrónico"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control form-control-custom"
                  />
                </div>

                <div className="mb-4">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-select form-select-custom"
                  >
                    <option value="">Seleccione un tema...</option>
                    <option value="trabajo">Oportunidad de trabajo</option>
                    <option value="proyecto">Colaboración en proyecto</option>
                    <option value="consulta">Consulta general</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Su mensaje...."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-control form-control-custom"
                  />
                </div>

                <button type="submit" className="btn btn-submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
