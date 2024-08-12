import React, { useState, useEffect } from 'react';
import I1 from '../../assets/home/instagramcard/I1.jpg';
import I2 from '../../assets/home/instagramcard/I2.jpg';
import I3 from '../../assets/home/instagramcard/I3.jpg';
import I4 from '../../assets/home/instagramcard/I4.jpg';
import I5 from '../../assets/home/instagramcard/I5.jpg';
import I6 from '../../assets/home/instagramcard/I6.jpg';
import I7 from '../../assets/home/instagramcard/I7.jpg';
import I8 from '../../assets/home/instagramcard/I8.jpg';
import I9 from '../../assets/home/instagramcard/I9.jpg';
import I10 from '../../assets/home/instagramcard/I10.jpg';
import { FaInstagram } from "react-icons/fa6";

function Instagram() {
    const cardData = [I1, I2, I3, I4, I5, I6, I7, I8, I9, I10];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(goToNextImage, 3000); // Change image every 2 seconds

        return () => clearInterval(interval);
    }, [currentIndex]); // Run effect whenever currentIndex changes

    const goToNextImage = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
                setTransitioning(false);
            }, 500);
        }
    };

    const goToPreviousImage = () => {
        if (!transitioning) {
            setTransitioning(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
                setTransitioning(false);
            }, 500);
        }
    };

    return (
        <>
            <div className='p-5'>
                <div className='mb-10'>
                    <h1 className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>GRAM FAM!</h1>
                    <p className='text-center text-sm sm:text-sm md:text-sm text-[#AC7D88]'>Bringing Families Closer.</p>
                </div>

                <div className='p-5 flex justify-center items-center gap-5 relative'>
                    <img
                        onClick={goToPreviousImage}
                        className={`h-[400px] absolute cursor-pointer hover:scale-105 transition-all right-10  duration-500 ${transitioning ? '-translate-x-full' : 'translate-x-0'}`}
                        src={currentIndex === 0 ? cardData[cardData.length - 1] : cardData[currentIndex - 1]}
                        alt="Previous"
                    />

                    <div className="relative cursor-pointer hover:scale-105 transition-all">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

                            <img
                                className={`h-[500px] `}
                                src={cardData[currentIndex]}
                                alt="Instagram"
                            />
                            <div className="absolute inset-0 flex justify-center items-center bg-[#222] opacity-0 hover:opacity-50 duration-300 transition-opacity">
                                <FaInstagram className="text-[#FDF0D1] text-4xl" />
                            </div>
                        </a>
                    </div>

                    <img
                        onClick={goToNextImage}
                        className={`h-[400px] absolute cursor-pointer left-10 hover:scale-105 transition-all  duration-500 ${transitioning ? 'translate-x-full' : 'translate-x-0'}`}
                        src={cardData[(currentIndex + 1) % cardData.length]}
                        alt="Next"
                    />
                </div>
            </div>
        </>
    );
}

export default Instagram;
