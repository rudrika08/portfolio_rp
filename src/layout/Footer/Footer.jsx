import React from "react";
import './style/Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">&copy; {new Date().getFullYear()} Rudrika. All Rights Reserved.</p>
                <div className="footer__socials">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__link">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;