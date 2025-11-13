import React from "react";
import "./LeaveRequest.css";

function LeaveRequest() {

    
  const leaves = [
    { id: 1, name: "", type: "Annual Leave", start: "Nov 15, 2025", end: "Nov 22, 2025", days: 7, status: "Pending" },
    { id: 2, name: "", type: "Sick Leave", start: "Nov 12, 2025", end: "Nov 14, 2025", days: 2, status: "Approved" },
    { id: 3, name: "", type: "Annual Leave", start: "Dec 20, 2025", end: "Jan 3, 2026", days: 10, status: "Pending" },
    { id: 4, name: "", type: "Personal Leave", start: "Nov 18, 2025", end: "Nov 19, 2025", days: 2, status: "Approved" },
    { id: 5, name: "", type: "Annual Leave", start: "Nov 10, 2025", end: "Nov 11, 2025", days: 2, status: "Rejected" },
    { id: 6, name: "", type: "Sick Leave", start: "Nov 13, 2025", end: "Nov 13, 2025", days: 1, status: "Approved" },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending": return "status pending";
      case "Approved": return "status approved";
      case "Rejected": return "status rejected";
      default: return "status";
    }
  };

  return (
    <div className="leave-request-container">
      <div className="header-row">
        <div>
          <h2>Leave Requests</h2>
          <p>Manage all employee leave requests</p>
        </div>
        <button className="new-request-btn">+ New Request</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">All Requests</button>
        <button>Pending</button>
        <button>Approved</button>
        <button>Rejected</button>
      </div>

      {/* Table */}
      <table className="leave-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Days</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>
                <div className="employee-info">
                  <div className="avatar">{leave.name.split(" ").map(n => n[0]).join("")}</div>
                  {leave.name}
                </div>
              </td>
              <td>{leave.type}</td>
              <td>{leave.start}</td>
              <td>{leave.end}</td>
              <td>{leave.days} days</td>
              <td><span className={getStatusClass(leave.status)}>{leave.status}</span></td>
              <td>
                <div className="actions">
                  <span className="approve">✔</span>
                  <span className="reject">✖</span>
                  <span className="more">⋯</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveRequest;
