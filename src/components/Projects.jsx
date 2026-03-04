import React from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: "Project Alpha",
        category: "Full Stack",
        description: "A comprehensive web application built with modern technologies.",
        image: "https://via.placeholder.com/600x400/1a1a1a/00e5ff?text=Project+Alpha"
    },
    {
        id: 2,
        title: "Project Beta",
        category: "React Native",
        description: "Mobile application for cross-platform seamless experience.",
        image: "https://via.placeholder.com/600x400/1a1a1a/7000ff?text=Project+Beta"
    },
    {
        id: 3,
        title: "Project Gamma",
        category: "UI/UX Design",
        description: "Elegant and user-friendly design interface for enterprise solutions.",
        image: "https://via.placeholder.com/600x400/1a1a1a/00ffaa?text=Project+Gamma"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Selected <span className="highlight">Works</span></h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <span className="category">{project.category}</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href="#" className="project-link">Learn More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
