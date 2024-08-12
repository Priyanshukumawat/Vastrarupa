import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEmojiDizzy, BsEmojiSunglasses } from "react-icons/bs";
import InputField from '../Components/Common/InputField';
import Button from '../Components/Common/Button';

function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[-+_!@#$%^&*.,?]/.test(password);
    const hasMinimumLength = password.length >= 8;
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (
        <div className="flex flex-col items-center justify-center p-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/14583331/pexels-photo-14583331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="bg-transparent border w-[500px] p-8 rounded-xl shadow-lg backdrop-blur-[2px]">
                <h2 className="text-2xl mb-4 font-bold text-center text-[#643843]">RESET PASSWORD</h2>
                <form className="space-y-4">
                    <div className='relative'>

                        <InputField
                            type={showPassword ? "text" : "password"}
                            id="password"
                            label="New Password *"
                            name="password"
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border px-4 py-2 pr-10 rounded focus:outline-none bg-[#F0F0F0] focus:border-[#FDF0D1]"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute text-[#85586F] hover:text-[#643843] inset-y-0 right-0 top-7 flex items-center px-3 focus:outline-none"
                        >
                            {showPassword ? <BsEmojiSunglasses /> : <BsEmojiDizzy />}
                        </button>
                    </div>
                    {password && (
                        <div className="mt-1">
                            <div className="text-gray-500">
                                <span className={`mr-2 ${hasMinimumLength ? 'text-green-500' : 'text-red-500'}`}>{hasMinimumLength ? '✓' : '✗'}</span> 8-16 characters
                            </div>
                            <div className="text-gray-500">
                                <span className={`mr-2 ${hasLowerCase ? 'text-green-500' : 'text-red-500'}`}>{hasLowerCase ? '✓' : '✗'}</span> At least 1 lowercase letter
                            </div>
                            <div className="text-gray-500">
                                <span className={`mr-2 ${hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>{hasUpperCase ? '✓' : '✗'}</span> At least 1 uppercase letter
                            </div>
                            <div className="text-gray-500">
                                <span className={`mr-2 ${hasDigits ? 'text-green-500' : 'text-red-500'}`}>{hasDigits ? '✓' : '✗'}</span> At least 1 digit
                            </div>
                            <div className="text-gray-500">
                                <span className={`mr-2 ${hasSymbols ? 'text-green-500' : 'text-red-500'}`}>{hasSymbols ? '✓' : '✗'}</span> Contains special symbol -+_!@#$%^&*.,?
                            </div>
                        </div>
                    )}
                    <InputField
                        type="password"
                        id="confirmPassword"
                        label="Confirm New Password *"
                        name="confirmPassword"
                        placeholder="Confirm New Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border px-4 py-2 rounded focus:outline-none bg-[#F0F0F0] focus:border-[#FDF0D1]"
                    />
                    {confirmPassword && password !== confirmPassword && (
                        <label className="block text-sm text-red-500">
                            Passwords do not match.
                        </label>
                    )}
                    {confirmPassword && password === confirmPassword && (
                        <label className="block text-sm text-green-500">
                            Passwords matched.
                        </label>
                    )}
                    <Button
                        className='w-full'
                        children="Reset Password"
                    />
                </form>
                <div className='mt-4 text-center text-[#AC7D88]'>
                    Remember your password? <Link to='/login' onClick={handleScroll}><span className='text-[#85586F] hover:text-[#643843]'>Log in</span></Link>
                </div>
            </div>
        </div>
    );
}

export default ResetPasswordPage;
