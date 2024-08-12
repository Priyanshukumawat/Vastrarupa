import React, { useState, useEffect, useRef } from 'react';
import { IoMdAdd, IoIosRemove } from "react-icons/io";

const ExpandableDiv = ({ heading, children }) => {
    const [expanded, setExpanded] = useState(false);
    const [showExpandButton, setShowExpandButton] = useState(true);
    const divRef = useRef(null);

    useEffect(() => {
        const handleContentOverflow = () => {
            setShowExpandButton(divRef.current.scrollHeight > divRef.current.clientHeight);
        };

        handleContentOverflow();

        window.addEventListener('resize', handleContentOverflow);

        return () => {
            window.removeEventListener('resize', handleContentOverflow);
        };
    }, []);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const handleHeadingClick = () => {
        toggleExpanded();
        rotateIcon();
    };

    const handleIconClick = (e) => {
        e.stopPropagation(); // Prevent the click event from bubbling up to the parent div
        toggleExpanded();
        rotateIcon();
    };

    const rotateIcon = () => {
        const icon = divRef.current.querySelector('.rotate-icon');
        icon.classList.toggle('clicked');
    };

    return (
        <div className="bg-[#FDF0D1] text-[#85586F] border border-[#643843] rounded-sm overflow-hidden w-[650px]" ref={divRef}>
            <div className="flex justify-between items-center px-4 py-3" onClick={handleHeadingClick}>
                <div className='font-semibold'>{heading}</div>
                <button className="text-[#85586F] py-1" onClick={handleIconClick}>
                    {expanded ? (
                        <IoIosRemove className="rotate-icon clicked" />
                    ) : (
                        <IoMdAdd className="rotate-icon clicked expanded" />
                    )}
                </button>
            </div>
            {expanded && (
                <div className="p-4" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default ExpandableDiv;
