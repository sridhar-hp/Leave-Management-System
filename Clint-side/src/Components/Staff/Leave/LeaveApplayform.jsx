import React from "react";
import "./LeaveApplayform.css";
function LeaveApplayform() {
    return (
        <>
            <div className="leave-form-page">
                <h1 >LEAVE APPLY FORM</h1>
                <form action="">
                

                    <div className="lafn">
                        <label htmlFor=""> 1.Enter your name:</label>
                        <input className="la" type="text" name="" id="" placeholder="" />
                    </div>

                    <div className="lafi">
                        <label htmlFor=""> 2.Enter your ID:</label>
                        <input className="la" type="text" name="" id="" placeholder="" />
                    </div>

                    <div className="lafi">
                        <label htmlFor=""> 3.Enter your Phone NO:</label>
                        <input className="la" type="text" name="" id="" placeholder="" />
                    </div>
                    
                    <div className="lafd">
                        <label htmlFor="">4.Enter your Department:</label>
                        <select>
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
                        <input className="la" type="email" name="" id="" placeholder="" />
                    </div>

                    

                    

                   
                    <div className="laft">
                        <label htmlFor="">6.leave type:</label>
                        <select>
                            <option value="">-- Select Leave Type --</option>
                            <option value="Sick Leave">Sick Leave</option>
                            <option value="Casual Leave">Casual Leave</option>
                            <option value="Annual Leave">Annual Leave</option>
                            <option value="Emergency Leave">Emergency Leave</option>
                            <option value="On Duty">On Duty</option>
                        </select>
                    </div>

                    <div className="lafad">
                        <label htmlFor=""> 7.Applay Date:</label>
                        <input className="la" type="date" name="" id="" placeholder="" />
                    </div>
                
                    <div className="laffd">
                        <label  htmlFor="">8.From date:</label>
                        <input className="la" type="date" name="" id="" placeholder="From date:" />
                    </div>
              
                    <div className="laftd">
                        <label htmlFor="">9.To date:</label>
                        <input className="la" type="date" name="" id="" placeholder="To date:" />
                    </div>
               
                    <div className="lafr">
                        <label htmlFor="">10.Reason:</label>
                        <textarea type="text" name="" id="" placeholder="" />
                    </div>
            
                    <button className="lafs">Submit</button>
                </form>
            </div>
        </>
    );
}
export default LeaveApplayform;