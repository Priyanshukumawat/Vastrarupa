import React from 'react';

function PannelCard({ title, color, icon, children }) {
    return (
        <div className={`h-[150px] w-full bg-${color} cursor-pointer hover:scale-105 transition-all ease-in rounded-md shadow-md flex flex-col justify-center items-center text-center`}>
            <div className="text-2xl font-bold text-[#FDF0D1] mb-2">
                {title}
            </div>
            <div className="flex flex-row gap-2 items-center text-2xl text-[#FDF0D1]">
                {icon}
                {children}
            </div>
        </div>
    );
}

export default PannelCard;
