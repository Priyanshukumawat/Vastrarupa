import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ShopByCategoryCard({ imageUrl, title1 }) {

    const naviagte = useNavigate();

    const handlelink = () => {
        naviagte('/product')
        window.scrollTo(0, 0);
    }

    return (
        <div className="relative bg-transparent overflow-hidden p-4">
            <div className="group relative cursor-pointer" onClick={handlelink} >
                <img src={imageUrl} alt="Category" className="w-full h-[500px] object-cover object-center transition-opacity duration-300 group-hover:opacity-75" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
                    <h2 className="text-[#FDF0D1] text-lg font-semibold">{title1}</h2>
                </div>
            </div>
        </div>
    );
}
