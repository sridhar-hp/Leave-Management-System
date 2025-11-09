// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";
// import "./LeaveApplayform.css";
// import OtpPopup from "../../Otp/OtpPopup";
// import { useParams } from "react-router-dom";

// // const { staffId } = useParams();


// function LeaveApplayform() {
//     const [leaveApplayForm, setLeaveApplayForm] = useState({});
//     const [showOtpPopup, setShowOtpPopup] = useState(false);
//     const [email, setEmail] = useState("");
//     const [staffId, setStaffId] = useState("");
//      const { staffId: paramStaffId } = useParams();
//     const location = useLocation();
    
//     const staff_Id = Number(location.state?.staffId || staffId);
//      const StaffId = location.state?.staffId || paramStaffId;
//        console.log("Staff ID:", staffId); 

//     // const handleLeaveApplay = async (e) => {
//     //     e.preventDefault();
//     //     // window.location.reload();


//     //     try {
//     //         const res = await axios.post("http://localhost:8081/Leaveapply", leaveApplayForm);

//     //         if (res.data.success) {
//     //             alert("Leave applied successfully but the status is pendign.If your leave apprved we will notify you via email and message.");
//     //         }
//     //     }
//     //     catch (err) {
//     //         console.log(err);
//     //     }

//     // }

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setLeaveApplayForm((prev) => ({ ...prev, [name]: value }));

//     };

//     // 🧩 STEP 1: when user clicks Apply Leave, first send OTP
//     const handleSendOtp = async (e) => {
//         e.preventDefault();

//         try {
//             // 1️⃣ Save email and staffId from form
//             setEmail(leaveApplayForm.EmailId);
//             setStaffId();


//             // 2️⃣ Tell backend to send OTP
//             // setStaffId(staff_Id);
//             const res = await axios.post("http://localhost:8081/api/send-otp", {
//     staff_id: staffId,
//     email: leaveApplayForm.EmailId,
//             });


//             if (res.data.success) {
//                 alert("OTP sent to your email. Please verify to continue.");
//                 setShowOtpPopup(true); // 👈 open popup
//             } else {
//                 alert("Failed to send OTP. Try again.");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Server error while sending OTP.");
//         }
//     };

//     // 🧩 STEP 2: if OTP verified, actually apply the leave
//     const handleOtpVerified = async () => {
//         try {
//             const res = await axios.post("http://localhost:8081/Leaveapply", {
//     ...leaveApplayForm,
//     StaffId: staffId,
// });


//             if (res.data.success) {
//                 alert(
//                     "Leave applied successfully! Status is pending. You’ll be notified by email."
//                 );
//                 setShowOtpPopup(false); // close popup
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Server error while applying leave.");
//         }
//     };

//     const handleClosePopup = () => setShowOtpPopup(false);

//     return (
//         <>
//             <div className="leave-form-page">
//                 <h1 >LEAVE APPLY FORM</h1>
//                 <form onSubmit={handleSendOtp}>


//                     <div className="lafn">
//                         <label htmlFor=""> 1.Enter your name:</label>
//                         <input className="la" type="text" name="name" id="" placeholder="" onChange={handleInput} required />
//                     </div>

//                     {/* <div className="lafi">
//                         <label htmlFor=""> 2.Enter your ID:</label>
//                         <input className="la" type="text" name="StaffId" id="" placeholder="" onChange={handleInput} required/>
//                     </div> */}

//                     <div className="lafi">
//                         <label htmlFor=""> 3.Enter your Phone NO:</label>
//                         <input className="la" type="text" name="PhoneNo" id="" placeholder="" onChange={handleInput} required />
//                     </div>

//                     <div className="lafd">
//                         <label htmlFor="">4.Enter your Department:</label>
//                         <select name="Department" onChange={handleInput} required>
//                             <option value="">-- Select Department --</option>
//                             <option value="CSE">CSE</option>
//                             <option value="IT">IT</option>
//                             <option value="ECE">ECE</option>
//                             <option value="EEE">EEE</option>
//                             <option value="MECH">MECH</option>
//                             <option value="CIVIL">CIVIL</option>
//                         </select>
//                     </div>


//                     <div className="lafei">
//                         <label htmlFor=""> 5.Email ID:</label>
//                         <input className="la" type="email" name="EmailId" id="" placeholder="" required onChange={handleInput} />
//                     </div>

//                     <div className="laft">
//                         <label htmlFor="">6.leave type:</label>
//                         <select name="Leavetype" onChange={handleInput} required>
//                             <option value="">-- Select Leave Type --</option>
//                             <option value="Sick Leave">Sick Leave</option>
//                             <option value="Casual Leave">Casual Leave</option>
//                             <option value="Annual Leave">Annual Leave</option>
//                             <option value="Emergency Leave">Emergency Leave</option>
//                             <option value="On Duty">On Duty</option>
//                         </select>
//                     </div>

//                     {/* <div className="lafad">
//                         <label htmlFor=""> 7.Applay Date:</label>
//                         <input className="la" type="date" name="created_at" required id="" placeholder="" onChange={handleInput}/>
//                     </div> */}

//                     <div className="laffd">
//                         <label htmlFor="">7.From date:</label>
//                         <input className="la" type="date" name="FromDate" id="" required placeholder="From date:" onChange={handleInput} />
//                     </div>

//                     <div className="laftd">
//                         <label htmlFor="">8.To date:</label>
//                         <input className="la" type="date" name="ToDate" id="" required placeholder="To date:" onChange={handleInput} />
//                     </div>

//                     <div className="lafr">
//                         <label htmlFor="">9.Reason:</label>
//                         <textarea type="text" name="Reason" id="" placeholder="" required onChange={handleInput} />
//                     </div>

//                     <button className="lafs" type="submit">Apply Leave</button>
//                 </form>
//             </div>


//             {/* ✅ OTP Popup */}
//             {showOtpPopup && (
//                 <OtpPopup
//                     staffId={staffId}
//                     email={email}
//                     onVerify={handleOtpVerified}
//                     onClose={handleClosePopup}
//                 />

//             )}

//         </>
//     );
// }
// export default LeaveApplayform;

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
                alert("OTP sent to your email. Please verify to continue.");
                setShowOtpPopup(true);
            } else {
                alert("Failed to send OTP. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Server error while sending OTP.");
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
                    "Leave applied successfully! Status is pending. You’ll be notified by email."
                );
                setShowOtpPopup(false);
            }
        } catch (err) {
            console.error(err);
            alert("Server error while applying leave.");
        }
    };

    const handleClosePopup = () => setShowOtpPopup(false);

    return (
        <>
            <div className="leave-form-page">
                <h1>LEAVE APPLY FORM</h1>
                <form onSubmit={handleSendOtp}>
                    <input type="text" name="name" placeholder="Enter your name" onChange={handleInput} required />
                    <input type="text" name="PhoneNo" placeholder="Phone No" onChange={handleInput} required />
                    <select name="Department" onChange={handleInput} required>
                        <option value="">-- Select Department --</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="EEE">EEE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                    </select>
                    <input type="email" name="EmailId" placeholder="Email ID" onChange={handleInput} required />
                    <select name="Leavetype" onChange={handleInput} required>
                        <option value="">-- Select Leave Type --</option>
                        <option value="Sick Leave">Sick Leave</option>
                        <option value="Casual Leave">Casual Leave</option>
                        <option value="Annual Leave">Annual Leave</option>
                        <option value="Emergency Leave">Emergency Leave</option>
                        <option value="On Duty">On Duty</option>
                    </select>
                    <input type="date" name="FromDate" onChange={handleInput} required />
                    <input type="date" name="ToDate" onChange={handleInput} required />
                    <textarea name="Reason" placeholder="Reason" onChange={handleInput} required />
                    <button type="submit">Apply Leave</button>
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
