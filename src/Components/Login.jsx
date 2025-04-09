import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+91'); // Default country code

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleContinue = () => {
    // Implement your login/signup logic here
    console.log('Continue with:', countryCode + mobileNumber);
  };

  return (
    <div className="login-page-container ">
      <div className="top-banner">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/10/29/9610da61-a1a4-4215-b1fa-f612242d10e61698602536819-Flat_200--1-.jpg" // Replace with your actual image URL
          alt="Flat ₹200 Off"
        />
      </div>
      <h2 className="login-signup-heading">Login or Signup</h2>
      <div className="mobile-input-group">
        <select
          className="country-code-dropdown"
          value={countryCode}
          onChange={handleCountryCodeChange}
        >
          <option value="+91">+91</option>
          {/* You can add more country codes if needed */}
        </select>
        <input
          type="tel"
          className="mobile-number-input"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
        />
      </div>
      <button className="continue-button" onClick={handleContinue}>
        CONTINUE
      </button>
      <p className="agreement-text">
        By continuing, you agree to the <a href="/terms">Terms of Use</a> &{' '}
        <a href="/privacy">Privacy Policy</a>
      </p>
      <p className="help-link">Having trouble logging in? <a href="/help">Get help</a></p>
    </div>
  );
}

export default Login;