import React from 'react';
import SingleCategory from './SingleCategory';

const Category = () => {
    const perfumes = [
        { id: 1, name: 'Fresh Fragrances', description: 'Fresh perfumes are popular in sporty or casual situations, as they give off an energetic and lively vibe.' },
        { id: 2, name: 'Floral Fragrances', description: 'Floral fragrances are often associated with femininity, romance, and elegance, and are suitable for a variety of occasions, from formal events to everyday wear.' },
        { id: 3, name: 'Oceanic Fragrances', description: 'Oceanic fragrances are often described as clean, refreshing, and invigorating, and are suitable for both men and women. ' },
        { id: 4, name: 'Woody Fragrances', description: "Woody fragrances often have a warm, earthy, and masculine scent and are commonly used in men's fragrances, but can also be found in women's fragrances." },
    ];
    return (
        <div className='container w-full mx-auto pb-10 md:py-20 lg:py-20 px-4'>
            <p className='text-center text-yellow-700 font-bold text-lg italic'>Category</p>
            <h1 className='text-center capitalize text-2xl md:text-5xl lg:text-5xl font-medium my-4'>Fragrance Types</h1>
            <p className='text-center mb-4'>The stylish and organized cosmetic products</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    perfumes.map(perfume => <SingleCategory
                        key={perfume.id}
                        perfume={perfume}
                    ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Category;  