const express = require("express");
const router = express.Router();
const Otp = require("../Models/Otp");
const generateOtp = require("../Utils/GenerateOtp");
const sendEmail = require("../Utils/SendEmail");

// ✅ Step 1: Send OTP
router.post("/send-otp", async (req, res) => {
  const { staff_id, email } = req.body;

  if (!email) return res.status(400).json({ success: false, message: "Email required" });

  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); //// expires in 5 minutes

  try {
    await Otp.create({ staff_id, otp, expires_at: expiresAt });
    //send otp by email
    await sendEmail(email, "Your Leave Application OTP", `Your OTP is ${otp}`);//

    return res.json({ success: true, message: "OTP sent to your email" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ Step 2: Verify OTP
router.post("/verify-otp", async (req, res) => {
  const { staff_id, otp } = req.body;

  try {
    const record = await Otp.findOne({ where: { staff_id, otp } });

    if (!record) return res.status(400).json({ success: false, message: "Invalid OTP" });

    if (new Date() > new Date(record.expires_at)) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    // Delete OTP after use
    await record.destroy();

    return res.json({ success: true, message: "OTP verified successfully ✅" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
