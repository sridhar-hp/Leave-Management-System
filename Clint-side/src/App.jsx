import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Login-Page/LoginPage.jsx";
import StaffDashbord from "./Components/Staff/Dashbord/StaffDashbord.jsx";
import LeaveApplayform from "./Components/Staff/Leave/LeaveApplayform.jsx";
import Home from "./Components/Staff/Home/Home.jsx";
import ADash from "./Components/Admin/AdminDashbord/ADash.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/staff-dashboard/:staffId" element={<StaffDashbord />}>

        <Route path="Home" element={<Home />} />
        <Route path="LeaveApplayform" element={<LeaveApplayform />}/>

        </Route>
        <Route path="/admin-dashboard" element={<ADash />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
