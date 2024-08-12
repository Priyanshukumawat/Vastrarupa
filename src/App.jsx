import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Layout from './Pages/Layout';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ResetPasswordPage from './Pages/ResetPasswordPage';
import TermsAndConditionPage from './Pages/TermsAndConditionPage';
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage';
import ProductPage from './Pages/ProductPage';
import SpecificProductPage from './Pages/SpecificProductPage';
import ShippingPolicy from './Components/AllPolicies/ShippingPolicy';
import Wishlist from './Components/Wishlist/Wishlist';
import Checkout from './Components/Checkout';
import Admin from './Pages/Admin';


function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/forgot-password' element={<ForgotPasswordPage />} />
            <Route path='/reset-password' element={<ResetPasswordPage />} />
            <Route path='/terms-and-condition' element={<TermsAndConditionPage />} />
            <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/specific-product' element={<SpecificProductPage />} />
            <Route path='/shipping-policy' element={<ShippingPolicy />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/checkout' element={<Checkout />} />

          </Route>
          <Route path='/admin-profile' element={<Admin />} />

        </Routes>
        <Toaster position='top-center' />
      </>
    </Router>
  );
}

export default App;
