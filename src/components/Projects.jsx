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

    return (
        <section id="projects" className="projects">
            <div className="container">
                <header className="projects-header">
                    <h2 className="section-header">↓ STUDIO LIKIT© Portfolio.</h2>
                </header>
                <div className="projects-grid">
                    {videos.map((video) => (
                        <div key={video.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img src={video.thumbnailUrl} alt={video.title} className="project-img" />
                                <div className="project-hover-overlay">
                                    <h3 className="project-brand-logo">{video.title}</h3>
                                    <span className="project-cat-label">{video.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
