import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import InputField from '../Components/Common/InputField';
import { toast } from 'react-hot-toast';
import Button from '../Components/Common/Button';

function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpValid, setOtpValid] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[-+_!@#$%^&*.,?]/.test(password);
    const hasMinimumLength = password.length >= 8;

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSignup = () => {
        if (firstName.trim() === '' || lastName.trim() === '' || phoneNumber.trim() === '' || otp.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            toast.error('Please fill in all fields.');
        } else if (!isValidPhoneNumber(phoneNumber)) {
            toast.error('Please enter a valid phone number.');
        } else if (!isValidOtp(otp)) {
            toast.error('Please enter a valid OTP.');
        } else if (!isValidPassword(password)) {
            toast.error('Please enter a valid password. It should be at least 8 characters long with 1 special character, 1 capital letter, and 1 digit.');
        } else if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
        } else if (!agreeTerms) {
            toast.error('Please agree to the terms and privacy policy.');
        } else {
            // Proceed with signup logic here
            // For now, just logging the form data
            console.log('First Name:', firstName);

        }
    };

    const isValidPhoneNumber = (phoneNumber) => {
        // Add your phone number validation logic here
        // For demonstration purposes, let's assume a valid phone number is 10 digits long
        return phoneNumber.length === 10 && /^\d+$/.test(phoneNumber);
    };

    const handleOtpChange = (e) => {
        const { value } = e.target;
        setOtp(value);

        // Validate OTP immediately
        setOtpValid(value.length === 6 && /^\d+$/.test(value));
    };

    const handleSendOtp = () => {
        // Here you can implement the logic to send OTP to the provided phone number
        // For demo purposes, let's just set a flag to indicate that OTP has been sent
        setOtpSent(true);
        toast.success('OTP has been sent to your phone number.');
    };

    const isValidOtp = (otp) => {
        // Add your OTP validation logic here
        // For demonstration purposes, let's assume a valid OTP is 6 digits long
        return otp.length === 6 && /^\d+$/.test(otp);
    };

    const isValidPassword = (password) => {
        // Add your password validation logic here
        // For demonstration purposes, let's assume a valid password has at least 8 characters with 1 special character, 1 capital letter, and 1 digit
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className="flex flex-col items-center justify-center p-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/14583331/pexels-photo-14583331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="bg-transparent border w-[500px] p-8 rounded-xl shadow-lg backdrop-blur-[2px]">
                <h2 className="text-2xl mb-4 font-bold text-center text-[#643843]">SIGN UP</h2>
                <form className="space-y-4">
                    <InputField
                        id="firstName"
                        label="First Name *"
                        type="text"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <InputField
                        id="lastName"
                        label="Last Name *"
                        type="text"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="relative">
                        <InputField
                            id="phoneNumber"
                            label="Phone Number *"
                            type="text"
                            maxLength={10}
                            placeholder="Enter Phone Number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        {!otpSent && phoneNumber && (
                            <div className="text-green-500 absolute right-0 top-5 mt-2 mr-2">
                                <MdVerified />
                            </div>
                        )}
                        {!otpSent && (
                            <Button
                                children="Send OTP"
                                type="button"
                                className="absolute w-fit right-0 top-5 mt-2"
                                onClick={handleSendOtp}
                            />
                        )}
                    </div>
                    {otpSent && (
                        <InputField
                            id="otp"
                            label="OTP *"
                            type="text"
                            maxLength={6}
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={handleOtpChange}
                            className={!otpValid ? 'border-red-500' : ''}
                        />
                    )}
                    <div className="flex flex-col">

                        <InputField
                            id="password"
                            label="New Password *"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter New Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {password && !isValidPassword(password) && (
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
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirmPassword" className="mb-1 text-[#85586F]">Confirm Password *</label>
                        <InputField
                            type={showPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="border px-4 py-2 rounded focus:outline-none bg-[#F0F0F0] focus:border-[#FDF0D1]"
                        />
                        {confirmPassword && password !== confirmPassword && (
                            <label className="block text-sm text-red-500 mt-1">
                                Passwords do not match.
                            </label>
                        )}
                        {confirmPassword && password === confirmPassword && (
                            <label className="block text-sm text-green-500 mt-1">
                                Passwords matched.
                            </label>
                        )}
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="showPassword"
                            name="showPassword"
                            checked={showPassword}
                            onChange={togglePasswordVisibility}
                            className="mr-2"
                        />
                        <label htmlFor="showPassword" className="text-[#85586F]">Show Password</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="agreeTerms"
                            checked={agreeTerms}
                            onChange={(e) => setAgreeTerms(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="agreeTerms" className="text-[#AC7D88]">I agree to the <span className='text-[#85586F] hover:text-[#643843]'><Link to='/terms-and-condition' onClick={handleScroll}>Terms & Conditions</Link></span> and <span className='text-[#85586F] hover:text-[#643843]'><Link to='/privacy-policy' onClick={handleScroll}>privacy policy</Link></span></label>
                    </div>
                    <Button onClick={handleSignup} children="Sign Up" type="Submit" className='w-full' />
                </form>
                <div className='mt-4 text-center text-[#AC7D88]'>
                    Already have an account? <Link to='/login' onClick={handleScroll}><span className='text-[#85586F] hover:text-[#643843]'>Log in</span></Link>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
