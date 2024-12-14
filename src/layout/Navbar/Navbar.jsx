import React, { useState } from "react";
import './style/Navbar.css';
import Bar from '../../assets/menu-bars-icon-7.jpg';

const Navbar = () => {
    const [Toggle, showMenu] = useState(false);

    // Function to handle closing the menu
    const closeMenu = () => {
        showMenu(false);
    };

    return (
        <header className="header">
            <nav className="nav_container">
                <a href="index.html" className="nav__logo">
                    <img 
                        src="https://cdn.prod.website-files.com/66ffb182a2a1dbe73904d0b5/675c56a0e695ba67e18eafaf_Screenshot%202024-12-13%20205024.png" 
                        alt="Rudrika Logo" 
                        className="nav__logo-img" 
                    />
                </a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#Home" className="nav__link active-link" onClick={closeMenu}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#experience" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-briefcase nav__icon"></i>Experience
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-scenary nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-file nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link" onClick={closeMenu}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <p className="nav__close"
                         style={{fontSize : "1rem"}}
                        onClick={closeMenu}
                    >X</p>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <img src={Bar} alt="Bar" />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
