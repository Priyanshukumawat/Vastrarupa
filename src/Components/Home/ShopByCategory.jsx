import React from 'react';
import ShopByCategoryCard from './ShopByCategoryCard';
import c1 from '../../assets/home/ShopByCategory/c1.jpg'
import c2 from '../../assets/home/ShopByCategory/c2.jpg'
import c3 from '../../assets/home/ShopByCategory/c3.jpg'
import c4 from '../../assets/home/ShopByCategory/c4.jpg'

function ShopByCategory() {
    // Sample array of data
    const categoryData = [
        {
            imageUrl: c1,
            title1: "Saree",
        },
        {
            imageUrl: c2,
            title1: "Lahanga",
        },
        {
            imageUrl: c3,
            title1: "Gown",
        },
        {
            imageUrl: c4,
            title1: "Suit",
        },

    ];

    return (
        <>
            <div className='mt-10 mb-10'>
                <h1 className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>Elegant Ensemble</h1>
                <p className='text-center text-sm sm:text-sm md:text-sm text-[#AC7D88]'>Where Tradition Meets Style in Every Stitch</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {categoryData.map((category, index) => (
                    <ShopByCategoryCard
                        key={index}
                        imageUrl={category.imageUrl}
                        title1={category.title1}
                    />
                ))}
            </div>
        </>

    );
}

export default ShopByCategory;
