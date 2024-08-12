import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegChessQueen } from "react-icons/fa6";
import { FaOpencart, FaRegHeart } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Cart from '../Cart';

function Navbar() {
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [underlineStyle, setUnderlineStyle] = useState({ width: 0, left: 0, top: 0, opacity: 0 });
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

    const handleNavItemHover = (index, event) => {
        const navItemWidth = event.target.offsetWidth;
        const navItemOffsetLeft = event.target.offsetLeft;
        const navItemOffsetTop = event.target.offsetTop;
        setUnderlineStyle({ width: navItemWidth, left: navItemOffsetLeft, top: navItemOffsetTop + event.target.offsetHeight, opacity: 1 });
    };

    const resetUnderline = () => {
        setUnderlineStyle({ ...underlineStyle, opacity: 0 });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldBeSticky = scrollTop > 0;
            setIsSticky(shouldBeSticky);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNewIn = () => {
        navigate('/product')
    }
    const handleHome = () => {
        navigate('/')
    }

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleCollectionsHover = () => {
        setShowDropdown(true);
    }

    const handleCollectionsLeave = () => {
        setShowDropdown(false);
    }

    const openCart = () => {
        setIsCartOpen(true); // Open the cart
    }

    return (
        <>
            {/* <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-[#FDF0D1] text-[#85586F] shadow-md' : 'bg-transparent text-white hover:bg-[#FDF0D1] hover:text-[#85586F]'}`}> */}
            <div className='wll bg-[#FDF0D1] text-[#85586F] shadow-md'>

                <div className='h-24 w-full justify-between items-center flex flex-row'>
                    <Link to='/#'>
                        <img src="https://img.freepik.com/premium-vector/boutique-logo-elegant-style_278222-3157.jpg" alt="" className='h-12 w-12 ml-5 cursor-pointer' onClick={handleScroll} />
                    </Link>
                    <ul className='flex flex-row gap-5 text-md'>
                        <li className='cursor-pointer hover:text-[#643843]' onClick={handleHome} onMouseEnter={(e) => handleNavItemHover(0, e)} onMouseLeave={resetUnderline}>HOME</li>
                        <li className='cursor-pointer hover:text-[#643843]' onClick={handleNewIn} onMouseEnter={(e) => handleNavItemHover(0, e)} onMouseLeave={resetUnderline}>NEW IN</li>
                        <li className='relative' onMouseEnter={handleCollectionsHover} onMouseLeave={handleCollectionsLeave}>
                            <span className='cursor-pointer hover:text-[#643843]' onClick={handleNewIn}>COLLECTIONS</span>
                            <div className={`dropdown-menu absolute p-2 z-10 rounded-b-md whitespace-nowrap bg-[#FDF0D1] ${showDropdown ? 'show' : ''}`}>
                                <ul>
                                    <li className='hover:scale-105'><Link to="/collection1">Bridal</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">Sakhi</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">Print Mania</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">The Hand Crafted</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">Beyound Wardrobe</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">Weeding Collection</Link></li>
                                    <li className='hover:scale-105'><Link to="/collection2">HOD - House Of Drapes</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className='relative' onMouseEnter={() => setShowCategoryDropdown(true)} onMouseLeave={() => setShowCategoryDropdown(false)}>
                            <span className='cursor-pointer hover:text-[#643843]' onClick={handleNewIn}>CATEGORY</span>
                            <div className={`dropdown-menu absolute p-2 z-10 rounded-b-md whitespace-nowrap bg-[#FDF0D1] ${showCategoryDropdown ? 'show' : ''}`}>
                                <ul>
                                    <li className='hover:scale-105'><Link to="/category1">BRIDAL</Link></li>
                                    <li className='hover:scale-105'><Link to="/category2">SUITS</Link></li>
                                    <li className='hover:scale-105'><Link to="/category2">BOTTOM WEAR</Link></li>
                                    <li className='hover:scale-105'><Link to="/category2">WESTERN</Link></li>
                                    <li className='hover:scale-105'><Link to="/category2">ETHNIC</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className='cursor-pointer hover:text-[#643843]' onMouseEnter={(e) => handleNavItemHover(3, e)} onMouseLeave={resetUnderline}>ABOUT US</li>
                    </ul>
                    <div className="underline" style={underlineStyle}></div>
                    <div className='flex flex-row mr-5 gap-5 text-xl'>
                        <Link to="/admin-profile" title='admin' onClick={handleScroll}>
                            <FaRegChessQueen className='hover:text-[#643843] cursor-pointer' />
                        </Link>
                        <Link to="/login" title='user' onClick={handleScroll}>
                            <FaRegChessQueen className='hover:text-[#643843] cursor-pointer' />
                        </Link>
                        <div className='relative'>
                            <Link to="/wishlist" onClick={handleScroll}>
                                <FaRegHeart className='hover:text-[#643843] cursor-pointer' />
                            </Link>
                            {/* Content on top of the wishlist icon */}
                            <div className='absolute -top-3 left-4 text-sm text-[#AC7D88] font-semibold'>10</div>
                        </div>
                        <div className='relative'>
                            <FaOpencart className=' hover:text-[#643843] cursor-pointer' onClick={openCart} />
                            {/* Content on top of the cart icon */}
                            <div className='absolute -top-3 left-4 text-sm text-[#AC7D88] font-semibold'>2</div>
                        </div>
                    </div>
                </div>
                <div className='absolute left-40 top-9'>
                    <input type="text" placeholder="Search..." className="pl-10 rounded-md border border-none focus:border-[#FDF0D1] focus:outline-none" />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CiSearch className="text-[#85586F]" />
                    </div>
                </div>
                <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div >
        </>
    )
}

export default Navbar