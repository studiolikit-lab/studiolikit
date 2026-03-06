import React from 'react';
import './CategoryTabs.css';

const CategoryTabs = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="category-tabs">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`tab-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => onSelectCategory(category.id)}
                >
                    {category.name}
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
