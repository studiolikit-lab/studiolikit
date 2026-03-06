import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-tabs">
            {categories.map((category) => (
                <button
                    key={category}
                    className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
