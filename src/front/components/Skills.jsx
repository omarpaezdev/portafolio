
const Skills = () => {
  const skills = [
    { name: "React", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917945/react_hv0ypo.png" },
    { name: "Python", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765920993/python_tymgio.png" },
    { name: "JavaScript", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/js_cb8int.png" },
    { name: "Node JS", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917945/nodejs_bfkljt.png" },
    { name: "Flask", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/flask_chlhwe.png" },
    { name: "Bootstrap", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/boostrap_i4bbzm.png" },
    { name: "MySQL", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917945/mysql_ucaw2q.png" },
    { name: "PostgreSQL", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917945/postgresql_ztp1jk.png" },
    { name: "WordPress", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917951/wordpress_nt8wuv.png" },
    { name: "WooCommerce", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917951/woo_fkyyed.png" },
    { name: "Git", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/git_ft1b9f.png" },
    { name: "GitHub", image: "https://res.cloudinary.com/dp6e1sg4y/image/upload/v1765917944/github_yxwcau.png" },
  ];
  return (
    <section className="section-custom">
      <div className="container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-container">
          <div className="row">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="skill-item">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <p className="skill-name">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
