// LoginPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEmojiDizzy, BsEmojiSunglasses } from "react-icons/bs";
import { toast } from 'react-hot-toast';
import InputField from '../Components/Common/InputField';
import Button from '../Components/Common/Button';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleLogin = () => {
        if (email.trim() === '') {
            toast.error('Please enter a valid email.');
        } else if (!isValidPassword(password)) {
            toast.error('Please enter a valid password.');
        } else {
            // Proceed with login logic here
            // For now, just logging the email and password
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    const isValidPassword = (password) => {
        // Add your password validation logic here
        // For demonstration purposes, let's assume a valid password is at least 6 characters long
        return password.length >= 6;
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center " style={{ backgroundImage: 'url(https://images.pexels.com/photos/14583331/pexels-photo-14583331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="bg-transparent border w-[450px] p-8 rounded-xl shadow-lg backdrop-blur-[2px]">
                <h2 className="text-2xl mb-4 font-bold text-center text-[#643843]">LOGIN</h2>
                <form className="space-y-4">
                    <InputField
                        type="text"
                        label='Email/Phone/Username *'
                        id="email"
                        name="email"
                        placeholder="Enter Email/Phone/Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="relative">

                        <InputField
                            type={showPassword ? "text" : "password"}
                            id="password"
                            label='Password *'
                            name="password"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            className="absolute text-[#85586F] hover:text-[#643843] inset-y-0 right-0 top-7 flex items-center px-3 focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <BsEmojiSunglasses /> : <BsEmojiDizzy />}
                        </button>
                    </div>
                    <Link to='/forgot-password' onClick={handleScroll} ><span className='text-[#85586F] hover:text-[#643843] text-sm'>Forgot Password?</span></Link>
                    <Button onClick={handleLogin} className='w-full' type="Submit">Login</Button>
                </form>
                <div className='mt-4 text-center text-[#AC7D88]'>
                    New to Vastram? <Link to='/signup' onClick={handleScroll}><span className='text-[#85586F] hover:text-[#643843]'>Create an account</span></Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
