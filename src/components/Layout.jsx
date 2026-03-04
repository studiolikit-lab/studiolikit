import React from 'react';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <nav className="navbar">
                <div className="container nav-content">
                    <div className="logo">STUDIO LIKIT</div>
                    <ul className="nav-links">
                        <li><a href="#projects">WORK</a></li>
                        <li><a href="#about">ABOUT</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </nav>
            <main>{children}</main>
            <footer className="footer">
                <div className="container">
                </div>
            </footer>
        </div>
    );
};

export default Layout;
