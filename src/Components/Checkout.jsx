import React, { useState } from 'react'
import Button from './Common/Button';
import InputField from './Common/InputField';


const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);
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


    const gstRate = 0.18;
    const shippingCost = 0;

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
    };

    // const totalPrice = cartItems.reduce((total, item) => total + item.price, 0).toLocaleString();

    const truncateName = (str, maxLength) => {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    };
    const totalPriceWithoutGST = cartItems.reduce((total, item) => total + item.price, 0).toLocaleString();
    const gstAmount = totalPriceWithoutGST * gstRate;
    const totalPrice = totalPriceWithoutGST + gstAmount + shippingCost;


    return (
        <div className="flex flex-col items-center justify-center bg-[#F0F0F0] p-5">
            <div className='text-center text-2xl font-semibold mt-5 text-[#85586F] mb-5'>CHECKOUT</div>
            <div className='flex flex-row gap-5 w-full p-5'>
                {/* Left Div */}
                <div className='bg-gray-100 border w-full h-full p-5 rounded-xl shadow-lg backdrop-blur-[2px]'>
                    <h1 className='text-md sm:text-lg md:text-3xl text-[#643843] mb-2'>Address</h1>
                    <div className='grid gap-2'>
                        <InputField type="text" placeholder="Country/Region" label="Country/Region" />
                        <div className='grid grid-cols-2 gap-2'>
                            <InputField type="text" placeholder="First Name" label='First Name' />
                            <InputField type="text" placeholder="Last Name" label='Last Name' />
                            <InputField type="email" id="email" placeholder="Email" label="Email" />
                            <InputField type="number" placeholder="Phone Number" label="Phone Number" />
                        </div>
                        <InputField type="text" placeholder="Address 1" label="Address 1" />
                        <InputField type="text" placeholder="Apartment, suite, etc." label="Apartment, suite, etc." />
                        <InputField type="text" placeholder="Landmark" label="Landmark" />
                        <div className='grid grid-cols-3 gap-2'>
                            <InputField type="text" placeholder="City" label="City" />
                            <InputField type="text" placeholder="State" label="State" />
                            <InputField type="number" placeholder="Pin" label="Pin" />
                        </div>
                    </div>

                    <div>
                        <h1 className='mb-1 text-md sm:text-lg md:text-3xl text-[#643843] mt-4'>Payment</h1>
                        <p className='text-sm sm:text-sm md:text-sm text-[#AC7D88]'>All transactions are secure and encrypted.</p>
                        <div className='border border-[#AC7D88] rounded-lg p-2 mt-2'>
                            <label
                                className='text-[#643843] text-lg'>
                                <input
                                    type="radio"
                                    value="credit-card"
                                    checked={paymentMethod === "credit-card"}
                                    onChange={() => handlePaymentMethodChange("credit-card")}
                                    style={{ marginRight: '5px', verticalAlign: 'middle', color: '#643843' }}
                                />
                                Credit Card
                            </label>
                            {paymentMethod === "credit-card" && (
                                <div className='p-4 border border-[#AC7D88] rounded-lg m-4'>
                                    <InputField type="text" placeholder="Card Number" label="Card Number" />
                                    <div className='grid grid-cols-2 gap-2'>
                                        <InputField type="text" placeholder="Expiration Date (MM/YY)" label="Expiration Date" />
                                        <InputField type="text" placeholder="CVV" label="CVV" />
                                    </div>
                                    <InputField type="text" placeholder="Card Holder Name" label="Card Holder Name" />
                                </div>
                            )}
                            <br />
                            <div className='flex justify-between items-center'>
                                <label className='text-[#643843] text-lg '>
                                    <input
                                        type="radio"
                                        value="upi"
                                        checked={paymentMethod === "upi"}
                                        onChange={() => handlePaymentMethodChange("upi")}
                                        style={{ marginRight: '5px', verticalAlign: 'middle', color: '#643843' }}
                                    />
                                    UPI
                                </label>
                                <div className='flex flex-row gap-2 mr-2'>
                                    <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/436/Google_Pay_GPay_Logo-512.png" alt="" className='w-5 h-5' />
                                    <img src="https://telugu.economictimes.com/thumb/msid-94681942,width-540,height-405,resizemode-75/paytm-logo-94681942.jpg" alt="" className='w-5 h-5' />
                                    <img src="https://play-lh.googleusercontent.com/6iyA2zVz5PyyMjK5SIxdUhrb7oh9cYVXJ93q6DZkmx07Er1o90PXYeo6mzL4VC2Gj9s" alt="" className='w-5 h-5' />
                                </div>
                            </div>

                            {paymentMethod === "upi" && (
                                <div className='p-4 border border-[#AC7D88] rounded-lg text-[#AC7D88]'>
                                    <p>
                                        After clicking “Procced to Payment”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.
                                    </p>
                                </div>
                            )}
                        </div>


                    </div>

                    <div className='w-full mt-5'>
                        <Button children="Procced to Payment" type='Submit' className='w-full' />
                    </div>

                </div>

                {/* Right Div */}
                <div className='w-full bg-transparent p-2 rounded-lg flex flex-col items-center'>
                    <div className=' sticky top-5'>

                        <div className="overflow-y-auto rounded-lg p-2" style={{ maxHeight: "300px", overflowX: "hidden", boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.2)", scrollbarWidth: "none", msOverflowStyle: "none" }}>
                            {cartItems.map(item => (
                                <div key={item.id}>
                                    <div className='flex flex-row gap-5 p-1'>
                                        <img src={item.imageUrl} alt={item.name} className='h-24 w-24 object-center object-contain ' />
                                        <div className='flex flex-col gap-2'>
                                            <p className="font-semibold text-[#85586F] cursor-pointer">{truncateName(item.name, 25)}</p>
                                            <div className='flex gap-2'>
                                                <p className='font-semibold text-[#85586F]'>SIZE:</p> <p className='text-[#AC7D88]'>{item.size}</p>
                                            </div>
                                        </div>
                                        <div className="text-[#643843] font-semibold">
                                            ₹{item.price}
                                        </div>
                                    </div>
                                    <hr className='border border-b border-[#AC7D88] mt-2 mb-2' />
                                </div>
                            ))}
                        </div>
                        <hr className='border border-b border-[#85586F] w-full mt-2 mb-2' />

                        <div className='flex flex-row justify-between items-center w-full text-[#AC7D88]'>
                            <div className='flex flex-col text-start w-full'>
                                <p className='text-xl font-semibold'>Subtotal</p>
                                <p>GST ({`${(gstRate * 100).toFixed(2)}%`})</p>
                                <p>Shipping</p>
                                <p className='text-xl font-bold'>Total</p>
                            </div>
                            <div className='flex flex-col text-end w-3/5'>
                                <p className='font-semibold text-xl'>{totalPriceWithoutGST}</p>
                                <p>{gstAmount}</p>
                                <p className='text-green-500'>{shippingCost === 0 ? "FREE" : shippingCost}</p>
                                <p className='text-xl font-bold'>{totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Checkout