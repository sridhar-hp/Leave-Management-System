import React, { useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import "./LeaveApplayform.css";
import OtpPopup from "../../Otp/OtpPopup";

function LeaveApplayform() {
    const [leaveApplayForm, setLeaveApplayForm] = useState({
        name: "",
        PhoneNo: "",
        Department: "",
        EmailId: "",
        Leavetype: "",
        FromDate: "",
        ToDate: "",
        Reason: "",
    });
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [staffIdState, setStaffIdState] = useState("");
    const { staffId: paramStaffId } = useParams();
    const location = useLocation();
    const staffId = location.state?.staffId || paramStaffId;

    console.log("Staff ID:", staffId);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setLeaveApplayForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();

        // ✅ Phone number check
        if (!leaveApplayForm.PhoneNo || leaveApplayForm.PhoneNo.length !== 10) {
            alert("Phone number must be exactly 10 digits");
            return;
        }

        // ✅ Optional: Only digits allowed
        if (!/^[0-9]+$/.test(leaveApplayForm.PhoneNo)) {
            alert("Phone number must contain only digits");
            return;
        }

        if (!leaveApplayForm.EmailId) {
            alert("Please enter your Email ID");
            return;
        }

        setEmail(leaveApplayForm.EmailId);

        try {
            const res = await axios.post("http://localhost:8081/api/send-otp", {
                staff_id: staffId,
                email: leaveApplayForm.EmailId,
            });

            if (res.data.success) {
                alert("OTP sent to your email. Please verify to continue.✅");
                setShowOtpPopup(true);
            } else {
                alert("Failed to send OTP. Try again. ❌");
            }
        } catch (err) {
            console.error(err);
            alert("Server error while sending OTP.❌");
        }
    };

    const handleOtpVerified = async () => {
        try {
            const res = await axios.post("http://localhost:8081/Leaveapply", {
                ...leaveApplayForm,
                StaffId: staffId,
            });

            if (res.data.success) {
                alert(
                    "Leave applied successfully! ✅ Status is pending. You’ll be notified by your mobile number you give in the form✅."
                );
                setShowOtpPopup(false);

                setLeaveApplayForm({
                name: "",
                PhoneNo: "",
                Department: "",
                EmailId: "",
                Leavetype: "",
                FromDate: "",
                ToDate: "",
                Reason: ""
            });
            }
        } catch (err) {
            console.error(err);
            alert("Server error while applying leave.❌");
        }
    };

    const handleClosePopup = () => setShowOtpPopup(false);

    return (
        <>
            <div className="leave-form-page">
                <h1>LEAVE APPLY FORM</h1>
                <form onSubmit={handleSendOtp}>

                    <div className="lafn">
                        <label htmlFor=""> 1.Enter your name:</label>
                        <input type="text" name="name" placeholder="" onChange={handleInput} required />
                    </div>

                    <div className="lafi">
                        <label htmlFor=""> 2.Enter your Mobile.no:</label>
                        <input type="text" name="PhoneNo" placeholder="" onChange={handleInput} required />
                    </div>
                    <div className="lafd">
                        <label htmlFor=""> 3.select your Department:</label>
                        <select name="Department" onChange={handleInput} required>
                            <option value="">-- Select Department --</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div>

                    <div className="lafei">
                        <label htmlFor=""> 4.Enter your Email Id:</label>
                        <input type="email" name="EmailId" placeholder="" onChange={handleInput} required />
                    </div>

                    <div className="laft">
                        <label htmlFor=""> 5.select leave type:</label>
                        <select name="Leavetype" onChange={handleInput} required>
                            <option value="">-- Select Leave Type --</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Emergency Leave">Emergency Leave</option>
                            <option value="On Duty">On Duty</option>
                        </select>
                    </div>

                    <div className="laffd">
                        <label htmlFor=""> 6.From Date:</label>
                        <input type="date" name="FromDate" onChange={handleInput} required />
                    </div>

                    <div className="laftd">
                        <label htmlFor=""> 7.To Date:</label>
                        <input type="date" name="ToDate" onChange={handleInput} required />
                    </div>

                    <div className="lafr">
                        <label htmlFor=""> 8.Reason:</label>
                        <textarea name="Reason" onChange={handleInput} required />
                    </div>

                    <button className="lafs" type="submit">Apply Leave</button>

                </form>
            </div>

            {showOtpPopup && (
                <OtpPopup
                    staffId={staffId}
                    email={email}
                    onVerify={handleOtpVerified}
                    onClose={handleClosePopup}
                />
            )}
        </>
    );
}

export default LeaveApplayform;
