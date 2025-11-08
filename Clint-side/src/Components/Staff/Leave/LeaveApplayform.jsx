import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./LeaveApplayform.css";

function LeaveApplayform() {
    const [leaveApplayForm, setLeaveApplayForm] = useState({});
    const location = useLocation();
    const staffId = location.state?.staffId;

    const handleLeaveApplay = async (e) => {
        e.preventDefault();
        // window.location.reload();


        try {
            const res = await axios.post("http://localhost:8081/Leaveapply", leaveApplayForm);

            if (res.data.success) {
                alert("Leave applied successfully but the status is pendign.If your leave apprved we will notify you via email and message.");
            }
        }
        catch (err) {
            console.log(err);
        }

    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setLeaveApplayForm((prev) => ({ ...prev, [name]: value }));

    };

    return (
        <>
            <div className="leave-form-page">
                <h1 >LEAVE APPLY FORM</h1>
                <form onSubmit={handleLeaveApplay}>


                    <div className="lafn">
                        <label htmlFor=""> 1.Enter your name:</label>
                        <input className="la" type="text" name="name" id="" placeholder="" onChange={handleInput} required />
                    </div>

                    {/* <div className="lafi">
                        <label htmlFor=""> 2.Enter your ID:</label>
                        <input className="la" type="text" name="StaffId" id="" placeholder="" onChange={handleInput} required/>
                    </div> */}

                    <div className="lafi">
                        <label htmlFor=""> 3.Enter your Phone NO:</label>
                        <input className="la" type="text" name="PhoneNo" id="" placeholder="" onChange={handleInput} required />
                    </div>

                    <div className="lafd">
                        <label htmlFor="">4.Enter your Department:</label>
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
                        <label htmlFor=""> 5.Email ID:</label>
                        <input className="la" type="email" name="EmailId" id="" placeholder="" required onChange={handleInput} />
                    </div>

                    <div className="laft">
                        <label htmlFor="">6.leave type:</label>
                        <select name="Leavetype" onChange={handleInput} required>
                            <option value="">-- Select Leave Type --</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Emergency Leave">Emergency Leave</option>
                            <option value="On Duty">On Duty</option>
                        </select>
                    </div>

                    {/* <div className="lafad">
                        <label htmlFor=""> 7.Applay Date:</label>
                        <input className="la" type="date" name="created_at" required id="" placeholder="" onChange={handleInput}/>
                    </div> */}

                    <div className="laffd">
                        <label htmlFor="">7.From date:</label>
                        <input className="la" type="date" name="FromDate" id="" required placeholder="From date:" onChange={handleInput} />
                    </div>

                    <div className="laftd">
                        <label htmlFor="">8.To date:</label>
                        <input className="la" type="date" name="ToDate" id="" required placeholder="To date:" onChange={handleInput} />
                    </div>

                    <div className="lafr">
                        <label htmlFor="">9.Reason:</label>
                        <textarea type="text" name="Reason" id="" placeholder="" required onChange={handleInput} />
                    </div>

                    <button className="lafs">applay leave</button>
                </form>
            </div>
        </>
    );
}
export default LeaveApplayform;