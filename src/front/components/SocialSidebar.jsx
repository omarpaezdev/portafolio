import React, { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";



const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      name: "Linkedin",
      url: "https://linkedin.com/in/omarpaez/",
      icon: <Linkedin size={24} color="white"/>,
      bgColor: "#1E293B",
    },
    {
      name: "GitHub",
      url: "https://github.com/omarpaezdev",
      icon: <Github size={24} color="white" />,
      bgColor: "#1E293B",
    },
    {
      name: "Email",
      url: "mailto:paez142@gmail.com",
      icon: <Mail size={24} color="white" />,
      bgColor: "#1E293B",
    },
  ];




  return (
    <>
      <div className="social-sidebar">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn"
            style={{ backgroundColor: link.bgColor }}
            title={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>

      <button
        className={`mobile-social-toggle ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Social Sidebar"
      >
        {isOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="mobile-social-menu">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              style={{
                backgroundColor: link.bgColor,
                animation: `slideIn 0.3s ease ${index * 0.1}s both`,
              }}
              title={link.name}
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default SocialSidebar;
