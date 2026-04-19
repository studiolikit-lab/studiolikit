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
        try {
            // 1. 단순하게 생성일 순으로만 가져옵니다 (복합 인덱스 불필요)
            const q = query(collection(db, "videos"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);

            const videoList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            // 2. 가져온 데이터를 로컬에서 'order' 필드 기준으로 정렬합니다.
            // 관리자 페이지에서 설정한 순서대로 완벽하게 보여줍니다.
            videoList.sort((a, b) => {
                const orderA = typeof a.order === 'number' ? a.order : 999999;
                const orderB = typeof b.order === 'number' ? b.order : 999999;
                if (orderA !== orderB) return orderA - orderB;
                // 순서가 같으면 최신순(createdAt)으로 유지
                return 0; // 이미 쿼리에서 createdAt desc로 가져왔으므로 순서만 같으면 유지됨
            });

            setVideos(videoList);
        } catch (error) {
            console.error("영상 목록을 불러오는 중 오류가 발생했습니다:", error);
        }
    };

    const fetchCategories = async () => {
        const q = query(collection(db, "categories"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);

        const categoryList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        setCategories(categoryList);
        setSelectedCategory(categoryList[0].id);
    }

    useEffect(() => {
        fetchVideos();
        fetchCategories();
    }, []);

    const allCategories = [...categories];

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
