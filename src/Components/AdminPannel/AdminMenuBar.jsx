import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Dashboard from './Dashboard';
import ManageProduct from './ManageProduct';
import ManageOrder from './ManageOrder';
import Settings from './Settings';
import Profile from './Profile';

function AdminMenuBar() {
    const [activeTab, setActiveTab] = useState('dashboard');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className='flex'>
            <div className='bg-[#FDF0D1] text-[#85586F] w-52 h-screen'>

                <Link to='/#'>
                    <img src="https://img.freepik.com/premium-vector/boutique-logo-elegant-style_278222-3157.jpg" alt="" className=' w-full h-20 object-cover object-center cursor-pointer' onClick={handleScroll} />
                </Link>
                <ul className='pr-2'>
                    <li className={`cursor-pointer h-12 mt-2 flex justify-center items-center ${activeTab === 'dashboard' ? 'bg-[#AC7D88] text-[#FDF0D1] rounded-r-2xl active' : ' rounded-r-2xl hover:bg-[#AC7D88] hover:text-[#FDF0D1]'}`} onClick={() => handleTabClick('dashboard')}>
                        Dashboard
                    </li>
                    <li className={`cursor-pointer h-12 mt-2 flex justify-center items-center ${activeTab === 'manageProduct' ? 'bg-[#AC7D88] text-[#FDF0D1] rounded-r-2xl active' : ' rounded-r-2xl hover:bg-[#AC7D88] hover:text-[#FDF0D1]'}`} onClick={() => handleTabClick('manageProduct')}>Manage Product</li>
                    <li className={`cursor-pointer h-12 mt-2 flex justify-center items-center ${activeTab === 'manageOrders' ? 'bg-[#AC7D88] text-[#FDF0D1] rounded-r-2xl active' : ' rounded-r-2xl hover:bg-[#AC7D88] hover:text-[#FDF0D1]'}`} onClick={() => handleTabClick('manageOrders')}>Manage Orders</li>
                    <li className={`cursor-pointer h-12 mt-2 flex justify-center items-center ${activeTab === 'settings' ? 'bg-[#AC7D88] text-[#FDF0D1] rounded-r-2xl active' : ' rounded-r-2xl hover:bg-[#AC7D88] hover:text-[#FDF0D1]'}`} onClick={() => handleTabClick('settings')}>Settings</li>
                    <li className={`cursor-pointer h-12 mt-2 flex justify-center items-center ${activeTab === 'profile' ? 'bg-[#AC7D88] text-[#FDF0D1] rounded-r-2xl active' : ' rounded-r-2xl hover:bg-[#AC7D88] hover:text-[#FDF0D1]'}`} onClick={() => handleTabClick('profile')}>Profile</li>
                </ul>
            </div>
            <div className='flex-1'>
                {/* Content for each tab */}
                <AdminNavbar />
                {activeTab === 'dashboard' && <Dashboard />}
                {activeTab === 'manageProduct' && <ManageProduct />}
                {activeTab === 'manageOrders' && <ManageOrder />}
                {activeTab === 'settings' && <Settings />}
                {activeTab === 'profile' && <Profile />}
            </div>
        </div>
    );
}

export default AdminMenuBar;



