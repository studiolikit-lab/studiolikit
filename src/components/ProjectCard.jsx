import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ video, onClick }) => {
    return (
        <div className="project-card" onClick={() => onClick(video)}>
            <div className="project-image-wrapper">
                <img src={video.thumbnailUrl} alt={video.title} className="project-img" />
                <div className="project-play-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="project-details">
                <h3 className="project-card-title">{video.title}</h3>
                <p className="project-card-category">{video.category}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
