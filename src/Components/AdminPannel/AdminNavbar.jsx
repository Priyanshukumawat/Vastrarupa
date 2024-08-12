import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaCrown } from "react-icons/fa";

function AdminNavbar() {

    return (
        <div className='w-full bg-[#FDF0D1] h-20 text-[#85586F] shadow-md flex items-center justify-between'>
            <div className='flex justify-center relative left-20'>
                <input type="text" placeholder="Search..." className="pl-10 rounded-md border border-none focus:border-[#FDF0D1] focus:outline-none" />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <CiSearch className="text-[#85586F]" />
                </div>
            </div>
            <div className='flex items-center gap-5 text-xl absolute right-10'>
                <IoMdNotificationsOutline className='hover:text-[#643843] cursor-pointer' />
                <FaCrown className='hover:text-[#643843] cursor-pointer' />
            </div>

        </div>
    )
}

export default AdminNavbar