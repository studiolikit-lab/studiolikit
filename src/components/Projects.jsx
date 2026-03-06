import React, { useEffect, useState } from 'react';
import './Projects.css';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CategoryTabs from './CategoryTabs';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';

const Projects = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("ALL");

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

    const categories = ["ALL", ...new Set(videos.map(v => v.category))];

    const filteredVideos = selectedCategory === "ALL"
        ? videos
        : videos.filter(v => v.category === selectedCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <header className="projects-header">
                    <h2 className="section-header">↓ STUDIO LIKIT© Portfolio.</h2>
                </header>

                <CategoryTabs
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <div className="projects-grid">
                    {filteredVideos.map((video) => (
                        <ProjectCard
                            key={video.id}
                            video={video}
                            onClick={setSelectedVideo}
                        />
                    ))}
                </div>
            </div>

            <VideoModal
                video={selectedVideo}
                onClose={() => setSelectedVideo(null)}
            />
        </section>
    );
};

export default Projects;
