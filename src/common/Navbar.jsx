import React, { useState } from "react";
// Jeśli masz plik CSS do navbara, upewnij się, że jest zaimportowany
// import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Stan otwarcia menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();

    // Zamykamy menu po kliknięciu w link (ważne na mobile!)
    setIsOpen(false);

    // Logika scrollowania (zachowana z poprzedniej wersji)
    if (targetId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "ContactFormSection" },
  ];

  return (
    <div className="navbar-container fade-in">
      <nav className="navbar">
        <div className="left-side-nav">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className="nav-logo-img"
          />
          <div className="logo">Aura Spaces</div>
        </div>

        {/* Przycisk Hamburgera (widoczny tylko na mobile dzięki CSS) */}
        <div className="hamburger" onClick={toggleMenu}>
          {/* Proste kreski zrobione ze znaków lub divów */}
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
          <span className={isOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Lista linków - dodajemy klasę "active" jeśli menu jest otwarte */}
        <div className={`right-side-nav ${isOpen ? "active" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
