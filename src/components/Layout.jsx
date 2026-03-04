import React, { useState } from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className={`layout ${isMenuOpen ? 'menu-open' : ''}`}>
            <nav className="navbar">
                <div className="container nav-content">
                    <div className="logo">STUDIO LIKIT</div>
                    <button className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>
            </nav>

            <aside className={`side-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="side-menu-content">
                    <ul className="side-nav-links">
                        <li><a href="#projects" onClick={toggleMenu}>WORK</a></li>
                        <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
                    </ul>
                </div>
            </aside>

            <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

            <main>{children}</main>
            <footer className="footer">
                <div className="container">
                </div>
            </footer>
        </div>
    );
};

export default Layout;
