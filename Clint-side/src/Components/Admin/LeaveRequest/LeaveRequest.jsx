import React, { useEffect, useState } from "react";
import "./LeaveRequest.css";
import axios from "axios";

function LeaveRequest() {
    const [leaveRequest, setLeaveRequest] = useState([]);

    useEffect(() => {

        const LRequest = async () => {
            try {
                const res = await axios.get("http://localhost:8081/leave-requests");
                setLeaveRequest(res.data);
                // console.log(res.data);

            }

            catch (err) {
                console.log(err);
            }
        };
        LRequest();
    }, []);



    return (
        <div className="leave-request-container">
            <div className="header-row">
                <div>
                    <h2>Leave Requests</h2>
                    <p>Manage all employee leave requests</p>
                </div>
                {/* <button className="new-request-btn">+ New Request</button> */}
            </div>

            <table className="leave-table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Staff ID</th>
                        <th>Leave Type</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>Days</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>

                </thead>
                <tbody>
                    {leaveRequest.map((leavelist, index) => (
                        <tr key={index}>
                            <td>{leavelist.name}</td>
                            <td>{leavelist.StaffId}</td>
                            <td>{leavelist.Leavetype}</td>
                            <td>{leavelist.FromDate.split("T")[0]}</td>
                            <td>{leavelist.ToDate.split("T")[0]}</td>
                            <td>{leavelist.Reason}</td>
                            {/* Calculate days between FromDate and ToDate */}
                            <td>
                                {Math.ceil(
                                    (new Date(leavelist.ToDate)- new Date(leavelist.FromDate)) / (1000 * 60 * 60 * 24)
                                )+1}
                            </td>
                            <td>{leavelist.status}</td>
                            <td><button>ACCEPT</button><button>REJECT</button></td>





                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeaveRequest;
