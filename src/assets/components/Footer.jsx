import '../styles/footer.scss';

function Footer() {
    return (
        <div className="container">
            <div className="footer-content">
                {/* Footer text with copyright */}
                <p>&copy; 2025 JC DEV</p>
                <p>Created by João Canabarro Campos</p>
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

                    {/* Whatsapp icon with accessible label */}
                    <a href="https://wa.me/+46762728973?text=Hello%20João!%20I%20would%20like%20to%20know%20more%20about%20your%20services." target="_blank" aria-label="Instagram">
                        <i className="fa-brands fa-whatsapp"></i>
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