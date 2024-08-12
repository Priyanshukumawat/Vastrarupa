import React, { useState } from 'react'
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';
import WishlistCard from './WishlistCard';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const wishlistItems = [
    {
        id: 1,
        title: 'BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET',
        price: 20,
        originalPrice: 300,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 2,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 3,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 4,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 5,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 6,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 7,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 8,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    {
        id: 9,
        title: 'FLORAL EMBELLISHED SAREE SET',
        price: 30,
        originalPrice: 50,
        image: 'https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp',
    },
    // Add more items as needed
];

const Wishlist = () => {

    const navigate = useNavigate();
    const [displayedItems, setDisplayedItems] = useState(5);
    const [showLoadMore, setShowLoadMore] = useState(true);

    const handleShop = () => {
        navigate('/product');
        window.scrollTo(0, 0);
    };

    const handleLoadMore = () => {
        setDisplayedItems(wishlistItems.length);
        setShowLoadMore(false);
        // Delay scrolling to ensure the new items are rendered
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth"
            });
        }, 100); // Adjust the delay time as needed
    };

    const handleLoadLess = () => {
        setDisplayedItems(5);
        setShowLoadMore(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <div className='p-5'>
                <h1 className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>WISHLIST</h1>
                <div className='flex flex-col gap-5 justify-center items-center h-[500px]'>
                    <p className='text-center mb-1 text-md sm:text-lg md:text-3xl text-[#643843]'>Fill the hanger with your clothing hunger!</p>
                    <p className='text-center text-sm sm:text-sm md:text-sm text-[#AC7D88]'>Build your dream wardrobe with our wishlist picks!</p>
                    <Button children="Fashion Hunt Begins" className="w-fit" onClick={handleShop} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-40">
                    {wishlistItems.slice(0, displayedItems).map((item) => (
                        <WishlistCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            originalPrice={item.originalPrice}
                            image={item.image}
                        />
                    ))}
                </div>
                <div className='w-full flex justify-center items-center'>
                    {showLoadMore && (
                        <div className='w-40'>
                            <Button className='custom-button w-full' onClick={handleLoadMore}>
                                <span className='original-text'>Load More</span>
                                <span className='hover-text text-3xl'><IoIosArrowDown /></span>
                            </Button>
                        </div>
                    )}
                    {!showLoadMore && (
                        <div className='w-40'>
                            <Button className='custom-button w-full' onClick={handleLoadLess}>
                                <span className='original-text'>Load Less</span>
                                <span className='hover-text text-3xl'><IoIosArrowUp /></span>
                            </Button>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}

export default Wishlist