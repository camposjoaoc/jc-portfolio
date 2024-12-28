import { Link } from 'react-router-dom';
import '../styles/footer.scss';

function Footer() {
    return (
        <div className="container">
            <div className="footer-content">
                {/* Footer text with copyright */}
                <p>&copy; 2025 JC DEV</p>
                <p>All rights reserved.</p>

                {/* Social media icons with links */}
                <div className="social-icons">
                    {/* Facebook icon with accessible label */}
                    <a href="https://github.com/camposjoaoc" target="_blank" aria-label="GitHub">
                        <i className="fa-brands fa-github"></i>
                    </a>

                    {/* Instagram icon with accessible label */}
                    <a href="https://www.instagram.com/camposjoaoc/" target="_blank" aria-label="Instagram">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    {/* LinkedIn icon with accessible label */}
                    <a href="https://www.linkedin.com/in/joaoccampos/" target="_blank" aria-label="LinkedIn">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;