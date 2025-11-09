import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./StaffDashbord.css";
function StaffDashbord() {
  return (
    // <h1>Staff Dashboard welcome you</h1>
    <>
    <div className="sdcontainer">
      
      <div className="sdmenu">
        <img src={null} alt="collage logo" />
        <h4>Staff dashboard</h4>

        <NavLink to="Home"> HOME </NavLink>
        
        <NavLink to="LeaveApplayForm" > Applay Leave </NavLink>
        
        <NavLink to="/" > Logout </NavLink>
      </div>

      <div className="sdcontant">
      <Outlet/>
      </div>
    </div>
    </>
  );
}
export default StaffDashbord;