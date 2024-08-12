import React from 'react';

const Button = ({ onClick, children, className, type }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-[#AC7D88] text-[#FDF0D1] px-4 py-2 rounded hover:bg-[#85586F] transition-colors focus:outline-[#85586F] ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
