import React, { useState } from 'react';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import { RxCross2 } from "react-icons/rx";

const Modal = ({ onClose }) => {
    const [unit, setUnit] = useState('inches');

    const toggleUnit = () => {
        setUnit(unit === 'inches' ? 'cm' : 'inches');
    };

    const getImageSource = () => {
        return unit === 'inches' ? s1 : s2;
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-[#F0F0F0] p-8 rounded-lg relative w-[800px]">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-2 text-xl text-[#AC7D88] hover:text-[#643843] focus:outline-none"
                >
                    <RxCross2 />
                </button>

                <h1 className='text-center text-[#643843] font-semibold text-xl mb-2'>Women Size Chart In {unit === 'inches' ? '(Inches)' : '(Centimeters)'}</h1>
                {/* Toggle button */}
                <div className="flex justify-center mb-2">
                    <button
                        onClick={() => setUnit('inches')}
                        className={`bg-[#643843] text-[#FDF0D1] px-4 py-2 focus:outline-none ${unit === 'inches' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    >
                        Inches
                    </button>
                    <button
                        onClick={() => setUnit('cm')}
                        className={`bg-[#643843] text-[#FDF0D1] px-4 py-2 focus:outline-none ${unit === 'cm' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                    >
                        Centimeters
                    </button>
                </div>

                {/* Image */}
                <img src={getImageSource()} alt="Size Chart" />
            </div>
        </div>
    );
};

export default Modal;
