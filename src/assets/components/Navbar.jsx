import { useState } from "react";
import "../styles/navbar.scss";

function Navbar() {
  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggles the mobile menu
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Closes the mobile menu
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  return (
    <div className="container">
      <nav className="navbar">
        {/* Title scrolls to home */}
        <div className="navbar-title" onClick={() => scrollToSection("home")}>
          {"{"}JC. DEV{"}"}
        </div>

        {/* Desktop navigation links */}
        <ul className="nav-links-desktop">
          <li>
            <a href="#home" onClick={() => scrollToSection("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => scrollToSection("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#techstack" onClick={() => scrollToSection("techstack")}>
              Tech Stack
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "flex" : ""}`}>
          {/* Close button for mobile menu */}
          <button className="close" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="nav-links-mobile">
            {/* Links close the menu after navigation */}
            <li>
              <a href="#home" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection("projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#techstack" onClick={() => scrollToSection("techstack")}>
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection("contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Hamburger button toggles mobile menu */}
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>

        {/* Overlay closes the menu when clicked */}
        {isMobileMenuOpen && (
          <div className="overlay" onClick={closeMenu}></div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
