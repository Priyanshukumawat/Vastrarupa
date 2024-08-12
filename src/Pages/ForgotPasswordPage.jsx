import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import InputField from '../Components/Common/InputField';
import Button from '../Components/Common/Button';

function ForgotPasswordPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);

  const handleSendOtp = () => {
    if (mobileNumber.trim() === '') {
      toast.error('Please enter your mobile number.');
    } else {
      // Assuming sending OTP logic here
      setShowOtpField(true);
    }
  };

  const handleContinue = () => {
    if (otp.trim() === '') {
      toast.error('Please enter the OTP.');
    } else {
      // Assuming OTP verification logic here
      console.log('OTP:', otp);
    }
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
        <h2 className="text-2xl mb-4 font-bold text-center text-[#643843]">FORGOT PASSWORD</h2>
        <form className="space-y-4">
          <InputField
            type="text"
            id="mobileNumber"
            label="Mobile Number *"
            name="mobileNumber"
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />

          {showOtpField && (
            <InputField
              type="text"
              id="otp"
              label="OTP *"
              name="otp"
              maxLength={6}
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}
          {!showOtpField ? (
            <Button
              className='w-full'
              children="Send OTP"
              onClick={handleSendOtp}
            />
          ) : (
            <Button
              className='w-full'
              children="Continue"
              onClick={handleContinue}
            />
          )}
        </form>
        <div className='mt-4 text-center text-[#AC7D88]'>
          Remember your password? <Link to='/login' onClick={handleScroll}><span className='text-[#85586F] hover:text-[#643843]'>Log in</span></Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
