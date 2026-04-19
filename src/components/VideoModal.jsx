import React from 'react';
import './VideoModal.css';

const VideoModal = ({ video, onClose }) => {
    if (!video) return null;

    const getEmbedUrl = (url) => {
        if (!url) return '';
        // shorts/ 형식을 포함하도록 정규식 업데이트
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11)
            ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
            : url;
    };

    return (
        <div className="video-modal-overlay" onClick={onClose}>
            <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>×</button>
                <div className="video-iframe-container">
                    <iframe
                        src={getEmbedUrl(video.url)}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="video-info">
                    <h3>{video.title}</h3>
                    <p>{video.category}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
