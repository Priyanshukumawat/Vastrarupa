import React, { useState } from 'react';
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ name, price, originalPrice, rating }) => {
    const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
    const naviagte = useNavigate();
    // Function to generate stars based on rating
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const truncatedName = name.length > 20 ? name.slice(0, 20) + '...' : name;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<MdStar key={i} className="text-yellow-500" />);
        }

        if (hasHalfStar) {
            stars.push(<MdStarHalf key={stars.length} className="text-yellow-500" />);
        }

        const remainingStars = 5 - stars.length;
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<MdStarBorder key={stars.length} className="text-yellow-500" />);
        }

        return stars;
    };

    const truncateName = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    const handleAddToWishlist = () => {
        if (isAddedToWishlist) {
            setIsAddedToWishlist(false);
            toast.error('Product removed from wishlist!');
        } else {
            setIsAddedToWishlist(true);
            toast.success('Product added to wishlist!');
        }
    };

    const handlenavigate = () => {
        naviagte('/specific-product')
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="bg-[#F0F0F0] cursor-pointer hover:scale-105">

            <div className='relative'>
                <img
                    src="https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
                    alt="Product"
                    className='w-full object-cover object-center'
                    onClick={handlenavigate}
                />
                <div className='absolute top-4 right-3 bg-[#FDF0D1] p-2 rounded-lg text-md text-[#85586F] hover:text-[#643843]'
                    onClick={handleAddToWishlist}>
                    {isAddedToWishlist ? <FaHeart /> : <FaRegHeart />}
                </div>
            </div>

            <div className='text-center p-4'>
                <p className="text-[#AC7D88] cursor-pointer" onClick={handlenavigate}>{truncateName(name, 25)}</p>
                <div className="mt-2 flex flex-col items-center justify-center cursor-text">
                    <div className="text-[#643843] font-semibold">
                        ₹{price}
                        <sub className="text-[#AC7D88] line-through ml-1">₹{originalPrice}</sub>
                    </div>
                    <div className="flex items-center mt-2">
                        {renderStars()}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCard;
