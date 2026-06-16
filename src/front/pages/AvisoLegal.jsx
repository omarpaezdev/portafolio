import "../index.css";

const LEGAL = {
  holder: import.meta.env.VITE_LEGAL_HOLDER || "Omar Páez",
  nif: import.meta.env.VITE_LEGAL_NIF || "",
  address: import.meta.env.VITE_LEGAL_ADDRESS || "",
  email: import.meta.env.VITE_LEGAL_EMAIL || "info@omarpaez.es",
  web: import.meta.env.VITE_LEGAL_WEB || "www.omarpaez.es",
};

export const AvisoLegal = () => {
  return (
    <main className="op-legal-page">
      <div className="op-legal-content">
        <h1>Aviso Legal</h1>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen los siguientes datos identificativos:
        </p>
        <div className="op-legal-info">
          <p><strong>Titular:</strong> {LEGAL.holder}</p>
          {LEGAL.nif && <p><strong>NIF/DNI:</strong> {LEGAL.nif}</p>}
          {LEGAL.address && <p><strong>Domicilio:</strong> {LEGAL.address}</p>}
          <p><strong>Correo electrónico:</strong> {LEGAL.email}</p>
          <p><strong>Sitio Web:</strong> {LEGAL.web}</p>
        </div>
        <p>
          El acceso y/o uso de este portal le atribuye la condición de USUARIO, que acepta los términos y condiciones aquí reflejados.
        </p>
      </div>
    </main>
  );
};