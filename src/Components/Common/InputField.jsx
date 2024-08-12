import React from 'react';

const InputField = (props) => {
    const { id, label, type, placeholder, value, onChange, autoComplete, maxLength, className } = props;
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="mb-1 text-[#85586F]">{label}</label>
            <input
                {...props}
                id={id}
                name={id}
                className={`border px-4 py-2 rounded text-[#643843] focus:outline-none bg-[#F0F0F0] focus:border-[#AC7D88] ${className}`}
            />
        </div>
    );
};

export default InputField;
