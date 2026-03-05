import React, { useEffect, useState } from 'react';
import './Projects.css';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const projects = [
    {
        id: 1,
        title: "Nike",
        category: "Brand Film",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Adidas",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Puma",
        category: "Short Film",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        title: "Apple",
        category: "Product Video",
        image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        title: "Sony",
        category: "Brand Film",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        title: "Tesla",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&w=800&q=80"
    }
];


const Projects = () => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const fetchVideos = async () => {
        const q = query(collection(db, "videos"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const videoList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setVideos(videoList);
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    const getEmbedUrl = (url) => {
        if (!url) return '';
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
            : url;
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <header className="projects-header">
                    <h2 className="section-header">↓ STUDIO LIKIT© Portfolio.</h2>
                </header>
                <div className="projects-grid">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="project-card"
                            onClick={() => setSelectedVideo(video)}
                        >
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
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={() => setSelectedVideo(null)}>×</button>
                        <div className="video-iframe-container">
                            <iframe
                                src={getEmbedUrl(selectedVideo.url)}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-info">
                            <h3>{selectedVideo.title}</h3>
                            <p>{selectedVideo.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
