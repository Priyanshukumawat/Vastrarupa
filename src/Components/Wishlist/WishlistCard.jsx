import React, { useState } from 'react';
import Button from '../Common/Button';
import { toast } from 'react-hot-toast';
import { IoTrashBin } from "react-icons/io5";

const WishlistCard = ({ image, title, price, originalPrice }) => {

    const [selectedSize, setSelectedSize] = useState('');
    const [isRemovedToWishlist, setIsRemovedToWishlist] = useState(false);

    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };

    const handleRemoveWishlist = () => {
        setIsRemovedToWishlist(true);
        toast.success("Item Removed from Wishlist");
    };

    const handleAddToCart = () => {
        // Add to cart logic here
        toast.success("Item added to cart");
    };

    const slicedTitle = title.length > 20 ? title.slice(0, 20) + '...' : title;

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='relative'>
                <img src={image} alt={title} />
                <div className='absolute cursor-pointer right-3 bottom-3 bg-[#FDF0D1] p-2 rounded-lg text-md text-[#85586F] hover:text-[#643843]'
                    onClick={handleRemoveWishlist}>
                    <IoTrashBin />
                </div>
            </div>

            <div className='text-center'>
                <p className="text-[#AC7D88] cursor-pointer" >{slicedTitle}</p>
                <div className="mt-2 flex flex-col items-center justify-center cursor-text">
                    <div className="text-[#643843] font-semibold">
                        ₹{price}
                        <sub className="text-[#AC7D88] line-through ml-1">₹{originalPrice}</sub>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
                        {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map(size => (
                            <div
                                key={size}
                                className={`text-center font-semibold border border-[#643843] rounded-md p-2 cursor-pointer
                                            ${selectedSize === size ? 'bg-[#AC7D88] text-[#FDF0D1]' : 'bg-[#FDF0D1] text-[#AC7D88]'}
                                            hover:bg-[#AC7D88] hover:text-[#FDF0D1] hover:scale-105 transition-all ease-in`}
                                onClick={() => handleSizeSelection(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Button children="Add to Cart" className="w-full" onClick={handleAddToCart} />
        </div>
    );
}

export default WishlistCard;
