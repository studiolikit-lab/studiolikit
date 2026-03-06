import React, { useEffect, useState } from 'react';
import './Projects.css';
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import CategoryTabs from './CategoryTabs';
import ProjectCard from './ProjectCard';
import VideoModal from './VideoModal';

const Projects = () => {
    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);
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

    const fetchCategories = async () => {
        const q = query(collection(db, "categories"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        const categoryList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setCategories(categoryList);
    }

    useEffect(() => {
        fetchVideos();
        fetchCategories();
    }, []);

    const allCategories = [{ id: "ALL", name: "ALL" }, ...categories];

    const filteredVideos = selectedCategory === "ALL"
        ? videos
        : videos.filter(v => v.categoryId === selectedCategory);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <header className="projects-header">
                    <h2 className="section-header">↓ STUDIO LIKIT© Portfolio.</h2>
                </header>

                <CategoryTabs
                    categories={allCategories}
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
