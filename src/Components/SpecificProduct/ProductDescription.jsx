import React, { useEffect, useRef, useState } from 'react'
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { AiOutlineShareAlt } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { BiCartDownload } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";
import ExpandableDiv from '../Common/ExpandableDiv';
import Modal from './Modal';
import Button from '../Common/Button';
import { FaFacebook, FaWhatsapp, FaTwitter, FaLink } from "react-icons/fa";

const expandableDivs = [
    {
        heading: "Product Description",
        content: [
            { label: "Details", value: "This is a two piece look.Kindly note, product tones may vary due to lighting." },
            { label: "Color", value: "Brown" },
            { label: "Length", value: "Full" },
            { label: "Material", value: "Valvet" },
            { label: "Internal Material", value: "cane cane" },
            { label: "Sleeve Type", value: "Full" },
            { label: "Occassion", value: "Festive" },
            { label: "Neckline", value: "V-SHAPE" },
            { label: "Fit", value: "Regular" },
            { label: "Pattern", value: "Solid + HandWork" },
            { label: "Apparel Closure Type", value: "Hook and Eye" },
            { label: "Rise", value: "High Waist" },
            { label: "Work", value: "Gota" },
            { label: "Net Qty", value: "1 N" },
            { label: "Reach us", value: "For queries or customisations, please mail us at: orders@vastrarupa.in" },
        ]
    },
    {
        heading: "Care Instructions",
        content: "Dry-Clean Only"
    },
    {
        heading: "Fit",
        content: "Tailored. The model is wearing 'M' size."
    },
    {
        heading: "Vendor Details",
        content: [
            { label: "Name of Commodity", value: "Kurta Sets" },
            { label: "Country of Origin", value: "India" },
            { label: "Manufacturer Name", value: "Vastrarupa Styles. Pvt. Ltd" },
            { label: "Manufacturer Address", value: "Vastrarupa Flagship Bridal Store Showroom no 2/3/4/5 Indore Madhya Pradesh 452009" },
            { label: "Marketer Name", value: "Vastrarupa Styles. Pvt. Ltd" },
            { label: "Markater Address", value: "Vastrarupa Flagship Bridal Store Showroom no 2/3/4/5 Indore Madhya Pradesh 452009" },
            { label: "Package Contents", value: "Kurta Sets" },
            { label: "Customer care", value: "For any feedback, feel free to reach out to us on orders@vastrarupa.in or +91 8602604849 10:00am to 7:00pm IST, operational every day. You can write to us also this at -info@vastrarupa.in" }
        ]
    },
];

const ProductDescription = () => {
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);
    const [sizeChart, setSizeChart] = useState(false);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [showShareOptions, setShowShareOptions] = useState(false);
    const [showReadMoreButton, setShowReadMoreButton] = useState(false);
    const textRef = useRef(null);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleChart = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };


    const handleToggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
        // Show appropriate toast message
        if (!isInWishlist) {
            toast.success("Product added to wishlist");
        } else {
            toast.success("Product removed from wishlist");
        }
    };

    const handleToggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };


    useEffect(() => {
        // Measure the height of the text element
        const lineHeight = parseFloat(window.getComputedStyle(textRef.current).lineHeight);
        const maxHeight = lineHeight * 3; // Height of two lines of text
        const actualHeight = textRef.current.scrollHeight;

        // If the actual height exceeds or is equal to the max height, show the read more button
        setShowReadMoreButton(actualHeight >= maxHeight);
    }, []);

    const toggleShowMore = () => {
        setShowMore(!showMore);
        window.scrollTo(0, 0);
    };


    const handleSizeSelection = (size) => {
        setSelectedSize(size);
    };


    const incrementQuantity = () => {
        if (quantity < 10) {
            setQuantity(prevQuantity => prevQuantity + 1);
        } else {
            toast.error("You have reached the maximun quantity.")
        }
    };

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        // Add to cart logic here
        toast.success("Item added to cart");
    };

    const handleBuyNow = () => {
        // Buy now logic here
        toast.success("Buy now clicked");
        navigate('/checkout')
        window.scrollTo(0, 0);
    };

    return (
        <>
            <div className='p-5'>
                <div className='flex flex-col gap-5 p-5'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col gap-2'>
                            <h1 className='text-[#643843] font-bold'>VASTRARUPA</h1>
                            <p className='text-xl text-[#85586F] font-semibold'>PRODUCT NAME IS A BIT LONG FOR EXAMPLE ISSE JYADA.</p>
                            <p
                                ref={textRef}
                                className={`text-sm text-[#AC7D88] w-[600px] overflow-hidden ${showMore ? '' : 'line-clamp-2'}`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum delectus est consequatur, ad eveniet adipisci minima, nobis cumque obcaecati, molestias ab quia magni amet perferendis! Nesciunt possimus itaque dolores, sed saepe repellat incidunt! Molestiae deleniti esse sequi nihil sed maxime eum, aut voluptatibus dolorem? Incidunt quo sed repudiandae rerum!
                            </p>
                            {showReadMoreButton && (
                                <span>
                                    {showMore ? (
                                        <button className="text-sm text-[#AC7D88] hover:text-[#643843] focus:outline-none" onClick={toggleShowMore}>
                                            Read Less
                                        </button>
                                    ) : (
                                        <button className="text-sm text-[#AC7D88] hover:text-[#643843] focus:outline-none" onClick={toggleShowMore}>
                                            Read More
                                        </button>
                                    )}
                                </span>
                            )}
                        </div>
                        <div className='flex flex-row gap-4 text-xl'>
                            {isInWishlist ? (
                                <FaHeart className='text-[#643843] cursor-pointer' onClick={handleToggleWishlist} />
                            ) : (
                                <FaRegHeart className='text-[#85586F] hover:text-[#643843] cursor-pointer' onClick={handleToggleWishlist} />
                            )}
                            <AiOutlineShareAlt className='relative text-[#85586F] hover:text-[#643843] cursor-pointer' onClick={handleToggleShareOptions} />
                            {showShareOptions && (
                                <div className="absolute top-40 right-10 grid grid-cols-2 gap-4 p-3 rounded-lg bg-[#AC7D88] border border-solid border-[#643843]">
                                    <button><FaFacebook className='text-[#FDF0D1] hover:text-[#643843] text-xl' title='facebook' /></button>
                                    <button><FaTwitter className='text-[#FDF0D1] hover:text-[#643843] text-xl' title='twitter' /></button>
                                    <button><FaWhatsapp className='text-[#FDF0D1] hover:text-[#643843] text-xl' title='whatsapp' /></button>
                                    <button><FaLink className='text-[#FDF0D1] hover:text-[#643843] text-xl' title='copy link' /></button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-[#85586F] font-semibold text-xl">
                        Rs. 85,599
                        <sub className="text-[#AC7D88] line-through ml-2">Rs.99,999</sub>
                        <p className='text-xs mt-2'>Inclusive of all taxes <Link to='/shipping-policy' className='text-[#AC7D88] hover:text-[#643843]'>Shipping calculated</Link> at checkout.</p>
                    </div>
                    <hr className='border w-full text-[#222]' />
                    <div className='flex flex-row justify-between items-center text-[#85586F]'>
                        <p className='text-lg font-semibold '>Size:</p>
                        <p className='text-md hover:text-[#643843] cursor-pointer hover:underline' onClick={handleChart}>Size Chart</p>
                    </div>
                    {showModal && <Modal onClose={handleCloseModal} />}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                    <div className='text-green-500'>
                        Made to order: 6 - 7 Weeks
                        {/* Price On Demand */}
                    </div>
                    <div className='flex flex-row gap-5 justify-start items-center'>
                        <p className='text-lg font-semibold text-[#85586F] mb-2'> Quantity :</p>
                        <div className="flex items-center justify-between w-24 border border-[#643843] rounded-md p-2">
                            <button
                                className="text-lg text-[#AC7D88] focus:outline-none"
                                onClick={decrementQuantity}
                            >
                                -
                            </button>
                            <div className="text-xl font-semibold text-[#85586F]">{quantity}</div>
                            <button
                                className="text-lg text-[#AC7D88] focus:outline-none"
                                onClick={incrementQuantity}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-row w-full mt-5 text-xl gap-5 font-semibold'>
                        <Button className='custom-button w-full' onClick={handleAddToCart}>
                            <span className='original-text'>ADD to Cart</span>
                            <span className='hover-text text-3xl'><BiCartDownload /></span>
                        </Button>
                        <Button className='custom-button w-full' onClick={handleBuyNow}>
                            <span className='original-text'>Buy it now</span>
                            <span className='hover-text text-3xl'><CiCreditCard1 /></span>
                        </Button>
                    </div>
                    <hr className='border w-full text-[#222] mt-5' />
                    <div>
                        <div className='flex flex-col gap-5'>
                            {expandableDivs.map((div, index) => (
                                <div key={index}>
                                    <ExpandableDiv heading={div.heading}>
                                        <div>
                                            {Array.isArray(div.content) ? (
                                                div.content.map((item, i) => (
                                                    <div key={i} className="grid grid-cols-2 gap-5 mb-2">
                                                        <p className="font-semibold">{item.label}</p>
                                                        <p>{item.value}</p>
                                                    </div>
                                                ))
                                            ) : (
                                                <p>{div.content}</p>
                                            )}
                                        </div>
                                    </ExpandableDiv>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default ProductDescription