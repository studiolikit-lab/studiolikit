import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Work.</h1>
                <div className="hero-divider"></div>
                <p className="hero-description">
                    지금까지 STUDIO LIKIT©에서<br />진행한 작업물입니다.
                </p>
            </div>
        </section>
    );
};

export default Hero;
