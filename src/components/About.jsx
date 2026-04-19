import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid" style={{ alignItems: 'center' }}>
                    <div className="about-logo">
                        <img src={`${import.meta.env.BASE_URL}logo_about.png`} alt="Logo" style={{ width: '150px', height: 'auto' }} />
                    </div>
                    <div className="about-header" style={{ flex: 1, textAlign: 'center' }}>
                        ‘지루하게 선명하기보다는 흐릿해도 흥미롭게’<br></br>
                        영상을 사랑하는 마음, 따뜻한 목소리, 삶의 지혜에 집중하고 기록하는 삶을 추구합니다.
                    </div>

                    <div className="about-content">
                        <div className="profile-card">
                            <div className="profile-image-container">
                                <img src={`${import.meta.env.BASE_URL}profile_about.png`} alt="이수빈 Profile" className="profile-image" />
                            </div>
                            <div className="profile-info-container">
                                <h3 className="profile-label">Creator</h3>
                                <h2 className="profile-name">이수빈 . THINGBELL</h2>
                                <p className="profile-email">thingbelltv@gmail.com</p>
                                
                                <div className="profile-description">
                                    <p>성장과 행복을 고민하며</p>
                                    <p>이를 기반한 즐거운 일들을 탐구합니다.</p>
                                    <p>어릴적부터 막연하게 좋아하던 영상의 길을 꾸준히 걸어와 초심을 잃지 않으려고 노력했습니다.</p>
                                    <p>멋진 작품을 남겨 사람들에게 긍정적 메시지를 전달할 수 있는 사람이 되고 싶습니다.</p>
                                </div>
                                
                                <div className="profile-tags">
                                    #유튜브PD #인디성우 #크리에이터 #멀티포텐셜라이트
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
