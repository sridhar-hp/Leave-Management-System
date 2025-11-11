import React from "react";
import "./ADash.css";
import { FaHome, FaCalendarAlt, FaUsers, FaListUl, FaChartBar, FaClock, FaCog } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


function ADash() {
  return (


     <>
            <div className="admcontainer">

                <div className="sdmmenu">
                    <img src={null} alt="collage logo" />
                    <NavLink to="Employees">Employees</NavLink>
                    
                </div>

                <div className="admcontant">
                    <Outlet />
                </div>
            </div>
        </>




    // <div className="sidebar">
    //   <div className="sidebar-header">
    //     <span className="app-icon">📅</span>
    //     <h2 className="app-name">LeaveHub</h2>
    //   </div>

    //   <ul className="menu-list">
    //     <li className="menu-item active">
    //       <FaHome className="menu-icon" />
    //       <span>Dashboard</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaCalendarAlt className="menu-icon" />
    //       <span>Calendar</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaUsers className="menu-icon" />
    //       <span>Employees</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaListUl className="menu-icon" />
    //       <span>Leave Requests</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaChartBar className="menu-icon" />
    //       <span>Analytics</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaClock className="menu-icon" />
    //       <span>Leave Balance</span>
    //     </li>

    //     <li className="menu-item">
    //       <FaCog className="menu-icon" />
    //       <span>Settings</span>
    //     </li>
    //   </ul>

    //   <div className="support-box">
    //     <p>Need help?</p>
    //     <button className="support-btn">Contact Support</button>
    //   </div>
    // </div>
  );
}

export default ADash;
