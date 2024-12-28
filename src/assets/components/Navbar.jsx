import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

    // Navigation hook for programmatic redirection
    const navigate = useNavigate();

    // Redirect to home
    const goToHome = () => {
        navigate('/');
    };

    return (
        <nav className="navbar">

            {/* Title redirects to home */}
            <div className="navbar-title" onClick={goToHome}>{'{'}JC DEV{'}'}</div>

            {/* Desktop navigation links */}
            <ul className="nav-links-desktop">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/tech-stack">TechStack</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            {/* Mobile menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'flex' : ''}`}>
                {/* Close button for mobile menu */}
                <button className="close" onClick={closeMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </button>
                <ul className="nav-links-mobile">
                    {/* Links close the menu after navigation */}
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/tech-stack">Tech Stack</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Hamburger button toggles mobile menu */}
            <button className="hamburger" onClick={toggleMenu}>
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Overlay closes the menu when clicked */}
            {isMobileMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
        </nav>
    );
}

export default Navbar;