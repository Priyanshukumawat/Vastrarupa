import React, { useEffect, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Button from './Common/Button';
import { useNavigate } from 'react-router-dom';

function Cart({ isOpen, onClose }) {
    const cartRef = useRef(null);
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            // Add a class to trigger smooth transition when opening
            cartRef.current.classList.add('cart-enter');
        } else {
            // Remove the class to trigger smooth transition when closing
            cartRef.current.classList.remove('cart-enter');
            // Call onClose after transition ends
            setTimeout(onClose, 300); // Adjust timing according to your transition duration
        }
    }, [isOpen, onClose]);

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

    // Static data for cart items
    const cartItems = [
        {
            id: 1,
            name: "BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET",
            size: "M",
            price: 850,
            originalPrice: 5550,
            imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
        },
        {
            id: 2,
            name: "D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET",
            size: "M",
            price: 8522,
            originalPrice: 5550,
            imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
        },
        {
            id: 3,
            name: "D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET",
            size: "M",
            price: 8522,
            originalPrice: 5550,
            imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
        },
        {
            id: 4,
            name: "D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET",
            size: "M",
            price: 8522,
            originalPrice: 5550,
            imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
        },
        {
            id: 5,
            name: "D FLORAL EMBELLISHED SAREE SET BEIGE 3D FLORAL EMBELLISHED SAREE SET",
            size: "M",
            price: 8522,
            originalPrice: 5550,
            imageUrl: "https://cdn.pixelspray.io/v2/black-bread-289bfa/81ub5U/t.resize(w:1000)/manish-product/MM-PR-TOP-20175-XS/300/MM-PR-TOP-20175-XS_1_4215.webp"
        },
        // Add more items as needed
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toLocaleString();

    const truncateName = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };

    const handleNavigateToProducts = () => {
        navigate('/product');
        onClose();
        window.scrollTo(0, 0);
    };

    const handleCheckout = () => {
        navigate('/checkout');
        onClose();
        window.scrollTo(0, 0);
    };



    return (
        (
            <div ref={cartRef} className={`fixed top-0 right-0 h-full w-[450px] bg-[#F0F0F0] z-50 cart shadow-md ${isOpen ? 'cart-open' : ''}`}>
                <div className="flex justify-between items-center text-lg p-4">
                    <p>{cartItems.length} ITEMS</p>
                    <button type='button' onClick={onClose} className='hover:text-[#643843]'><RxCross2 /></button>
                </div>
                <hr className='border border-b border-gray-200 shadow-sm' />
                {cartItems.length === 0 ? ( // Check if cart is empty
                    <div className="flex flex-col justify-center items-center p-4 h-screen">
                        <p className='text-lg text-[#85586F]'>Dress like you're already famous.</p>
                        <p className='text-sm text-[#AC7D88]'>Unveil the Essence of Elegance!</p>
                        <Button type='button' children="Acquire Yours" className='w-fit mt-5' onClick={handleNavigateToProducts} />
                    </div>
                ) : (
                    <div>
                        <div className="overflow-y-auto h-[500px] flex flex-col gap-10 " style={{ scrollbarWidth: "none" }}>
                            {cartItems.map(item => (
                                <div key={item.id}>
                                    <div className='flex flex-row gap-5 p-1'>
                                        <img src={item.imageUrl} alt={item.name} className='h-24 w-24 object-center object-contain ' />
                                        <div className='flex flex-col gap-2'>
                                            <p className="font-semibold text-[#85586F] cursor-pointer">{truncateName(item.name, 25)}</p>
                                            <div className='flex gap-2'>
                                                <p className='font-semibold'>SIZE:</p> <p>{item.size}</p> </div>
                                            <div className='flex flex-row gap-5 justify-start items-center'>
                                                <p className='font-semibold text-[#85586F] mb-2'> Quantity :</p>
                                                <div className="flex items-center justify-between w-14 border border-[#643843] rounded-md p-1">
                                                    <button
                                                        className="text-[#AC7D88] focus:outline-none"
                                                        onClick={decrementQuantity}
                                                    >
                                                        -
                                                    </button>
                                                    <div className="font-semibold text-[#85586F]">{quantity}</div>
                                                    <button
                                                        className="text-[#AC7D88] focus:outline-none"
                                                        onClick={incrementQuantity}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-5 justify-between'>
                                            <div className="text-[#643843] font-semibold items-center flex flex-col ">
                                                ₹{item.price}
                                                <p className="text-[#AC7D88] line-through ml-1">₹{item.originalPrice}</p>
                                            </div>
                                            <button className='text-[#85586F] hover:text-[#643843]'>REMOVE</button>
                                        </div>

                                    </div>
                                    <hr className='border border-b border-gray-200 mt-4' />

                                </div>

                            ))}

                        </div>
                        <hr className='border border-b border-gray-200' />
                        <hr className='border border-b border-gray-200 shadow-sm relative ' style={{ filter: 'blur(2px)', marginTop: '-5px' }} />


                        <div className='p-2 flex flex-col justify-center gap-5'>
                            <div className='flex justify-between items-center font-semibold p-2'>
                                <p>SUBTOTAL</p>
                                <p>{totalPrice}</p>
                            </div>
                            <div className='text-sm p-2 text-[#]'>
                                Shipping and taxes calculated at checkout.
                            </div>
                            <Button type="button" children="Checkout" onClick={handleCheckout} />
                        </div>
                    </div>
                )}
            </div>
        ))
};

export default Cart;