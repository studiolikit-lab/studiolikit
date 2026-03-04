import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">
                    안녕하세요 <span className="highlight">수빈찡</span>
                </h1>
                <p className="hero-subtitle">
                    안녕하세요, 사용자 맞춤형 웹 경험을 만드는 프론트엔드 개발자입니다.<br />
                    Vite와 React를 활용하여 빠르고 세련된 인터페이스를 구현합니다.
                </p>
                <div className="hero-btns">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
