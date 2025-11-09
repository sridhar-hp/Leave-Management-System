import React from "react";
import axios from "axios";
import "./OtpPopup.css";
import { useState } from "react";

function OtpPopup({ staffId, email, onVerify, onClose }) {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");


    const handleVerify = async (e)=>{
        e.preventDefault();
        try {
      const res = await axios.post("http://localhost:8081/api/verify-otp", {
        staff_id: staffId,
        otp,
      });

      if (res.data.success) {
        setMessage("✅ OTP Verified Successfully!");
        onVerify(); // call parent function to continue applying leave
      } else {
        setMessage("❌ Invalid OTP, try again");
      }
    } catch (err) {
      console.error(err);
      setMessage("Server error while verifying OTP");
    }
  };

  return (
    <div className="otp-popup">
      <div className="otp-box">
        <h2>Email Verification</h2>
        <p>We sent an OTP to {email}</p>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button onClick={handleVerify}>Verify</button>
        <button onClick={onClose}>Cancel</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default OtpPopup;