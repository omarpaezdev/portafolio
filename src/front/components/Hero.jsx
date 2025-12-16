import imgPerfil from '../assets/img/img_perfil.png';


const Hero = () => {

    const handleContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleDownloadCV = () => {
        const cvUrl = 'https://drive.google.com/file/d/1JEn7U1EOORuOWUwfy3I9twQdhPLzGUJ8/view?usp=drive_link';
        window.open(cvUrl, '_blank');
    }




    return (
      <section className="hero-section">
        <div className="container  ">
          <div className="row align-items-center">
            <div className="col-lg-6 text-center text-md-start">
              <h1 className="hero-title">Hola, soy Omar Páez</h1>
              <p className="hero-subtitle">
                Desarrollador FullStack. Enfocado en la resolución eficiente de
                problemas y la colaboración efectiva en equipos.
              </p>

              <div className="d-flex justify-content-center flex-column flex-sm-row gap-4">
                <button
                  type="button"
                  className="btn btn-custom btn-contact"
                  onClick={handleContact}
                >
                  Contactame
                </button>
                <button
                  type="button"
                  className="btn btn-custom btn-download"
                  onClick={handleDownloadCV}
                >
                  Descargar CV
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={imgPerfil} alt="Omar Páez" className="hero-image" />
            </div>
          </div>
        </div>
      </section>
    );



}

export default Hero;