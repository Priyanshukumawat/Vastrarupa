import React, { useState, useEffect } from 'react'
import b1 from '../../assets/home/b1.jpg';
import b2 from '../../assets/home/b2.jpg';
import b3 from '../../assets/home/b3.jpg';
import b4 from '../../assets/home/b4.jpg';
import b5 from '../../assets/home/b5.jpg';
import b6 from '../../assets/home/b6.jpg';
import ShopByCategory from './ShopByCategory';

function ImageSlider() {

    const images = [b1, b2, b3, b4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);


    return (
        <>
            <div>
                <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
                <div className='w-full mt-4 mb-4'>
                    <ShopByCategory />
                </div>
                <div class='flex flex-col gap-2 mt-2 mb-2'>
                    <img src={b5} alt="" class='w-full' />
                    <img src={b6} alt="" class='w-full md:h-auto' />
                </div>
            </div >
        </>

    )
}

export default ImageSlider