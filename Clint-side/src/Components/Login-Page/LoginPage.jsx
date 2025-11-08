// import React, { useState } from "react";

// const roles = { STAFF: "staff", ADMIN: "admin" };

// export default function LoginPage() {
//   const [role, setRole] = useState(roles.STAFF);

//   const LoginForm = () => (
//     <div className="login-box">
//       <h2>Sign In ADMIN</h2>
//       <div className="social-icons">
//         <button>G+</button>
//         <button>f</button>
//         <button>Git</button>
//         <button>in</button>
//       </div>
//       <p>or use your staffId password</p>

//       <form>
//         <input type="staffId" placeholder="staffId" required />
//         <input type="password" placeholder="Password" required />
//         <a href="#">Forget your password?</a>
//         <button type="submit" className="signin-btn">SIGN IN</button>
//       </form>
//     </div>
//   );

//   const CollegePanel = () => (
//     <div className="welcome-box">
//       <h2>Hello, Friend!</h2>
//       <p>Register with your personal details to use all of site features</p>
//       <button className="signup-btn">SIGN UP</button>
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         * {
//           box-sizing: border-box;
//           font-family: 'Poppins', sans-serif;
//         }

//         body, html, #root {
//           height: 100%;
//           margin: 0;
//           background: #e9e9e9;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .container {
//           width: 900px;
//           height: 500px;
//           background: #fff;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 30px rgba(0,0,0,0.1);
//           display: flex;
//           transition: all 0.8s ease;
//           position: relative;
//         }

//         /* LOGIN PANEL */
//         .login-box {
//           flex: 1;
//           padding: 60px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background: #fff;
//           transition: all 0.8s ease;
//         }

//         .login-box h2 {
//           font-size: 28px;
//           margin-bottom: 20px;
//         }

//         .social-icons {
//           display: flex;
//           gap: 12px;
//           margin-bottom: 15px;
//         }

//         .social-icons button {
//           border: 1px solid #ccc;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           background: none;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .login-box p {
//           color: #666;
//           font-size: 14px;
//           margin-bottom: 18px;
//         }

//         .login-box input {
//           width: 100%;
//           padding: 12px;
//           margin: 8px 0;
//           border-radius: 8px;
//           border: none;
//           background: #eee;
//           font-size: 14px;
//         }

//         .login-box a {
//           align-self: flex-end;
//           font-size: 12px;
//           color: #777;
//           text-decoration: none;
//           margin-bottom: 20px;
//         }

//         .signin-btn {
//           width: 150px;
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: #fff;
//           padding: 12px;
//           border: none;
//           border-radius: 20px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .signin-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(37,117,252,0.3);
//         }

//         /* WELCOME PANEL */
//         .welcome-box {
//           flex: 1;
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding: 60px;
//           transition: all 0.8s ease;
//         }

//         .welcome-box h2 {
//           font-size: 28px;
//           margin-bottom: 10px;
//         }

//         .welcome-box p {
//           font-size: 14px;
//           margin-bottom: 30px;
//           text-align: center;
//           line-height: 1.5;
//         }

//         .signup-btn {
//           background: transparent;
//           border: 2px solid #fff;
//           color: #fff;
//           padding: 10px 30px;
//           border-radius: 20px;
//           cursor: pointer;
//           font-weight: bold;
//           transition: 0.3s;
//         }

//         .signup-btn:hover {
//           background: #fff;
//           color: #2575fc;
//         }

//         /* SWAP ANIMATION */
//         .container.admin {
//           flex-direction: row-reverse;
//         }

//         .role-toggle {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//         }

//         .role-toggle button {
//           border: none;
//           padding: 8px 18px;
//           border-radius: 20px;
//           background: #eee;
//           cursor: pointer;
//           font-weight: 600;
//           transition: all 0.3s ease;
//         }

//         .role-toggle button.active {
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           box-shadow: 0 5px 15px rgba(37,117,252,0.3);
//         }
//       `}</style>

//       <div className={`container ${role === roles.ADMIN ? "admin" : ""}`}>
//         <LoginForm />
//         <CollegePanel />
//         <div className="role-toggle">
//           <button
//             className={role === roles.STAFF ? "active" : ""}
//             onClick={() => setRole(roles.STAFF)}
//           >
//             Staff
//           </button>
//           <button
//             className={role === roles.ADMIN ? "active" : ""}
//             onClick={() => setRole(roles.ADMIN)}
//           >
//             Admin
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

//=========================================================================================================================================================//


// import React, { useState } from "react";

// const roles = { STAFF: "staff", ADMIN: "admin" };

// export default function LoginPage() {
//   const [role, setRole] = useState(roles.STAFF);

//   const StaffLoginForm = () => (
//     <div className="login-box">
//       <h2>Staff Sign In</h2>
//       <div className="social-icons">
//         <button>G+</button>
//         <button>f</button>
//         <button>Git</button>
//         <button>in</button>
//       </div>
//       <p>or use your staffId and password</p>

//       <form>
//         <input type="staffId" placeholder="Staff staffId" required />
//         <input type="password" placeholder="Password" required />
//         <a href="#">Forgot your password?</a>
//         <button type="submit" className="signin-btn">SIGN IN</button>
//       </form>
//     </div>
//   );

//   const AdminLoginForm = () => (
//     <div className="login-box">
//       <h2>Admin Sign In</h2>
//       <div className="social-icons">
//         <button>G+</button>
//         <button>f</button>
//         <button>Git</button>
//         <button>in</button>
//       </div>
//       <p>or use your staffId and password</p>

//       <form>
//         <input type="staffId" placeholder="Admin staffId" required />
//         <input type="password" placeholder="Password" required />
//         <a href="#">Forgot your password?</a>
//         <button type="submit" className="signin-btn">SIGN IN</button>
//       </form>
//     </div>
//   );

//   const InfoPanel = ({ title, message, buttonText, onClick }) => (
//     <div className="welcome-box">
//       <h2>{title}</h2>
//       <p>{message}</p>
//       <button className="signup-btn" onClick={onClick}>{buttonText}</button>
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         * {
//           box-sizing: border-box;
//           font-family: 'Poppins', sans-serif;
//         }

//         body, html, #root {
//           height: 100%;
//           margin: 0;
//           background: #e9e9e9;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .container {
//           width: 900px;
//           height: 500px;
//           background: #fff;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 30px rgba(0,0,0,0.1);
//           display: flex;
//           position: relative;
//           transition: all 0.8s ease;
//         }

//         /* LOGIN PANEL */
//         .login-box {
//           flex: 1;
//           padding: 60px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background: #fff;
//           transition: all 0.8s ease;
//           position: relative;
//           z-index: 2;
//         }

//         .login-box h2 {
//           font-size: 28px;
//           margin-bottom: 20px;
//         }

//         .social-icons {
//           display: flex;
//           gap: 12px;
//           margin-bottom: 15px;
//         }

//         .social-icons button {
//           border: 1px solid #ccc;
//           border-radius: 50%;
//           width: 40px;
//           height: 40px;
//           background: none;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .login-box p {
//           color: #666;
//           font-size: 14px;
//           margin-bottom: 18px;
//         }

//         .login-box input {
//           width: 100%;
//           padding: 12px;
//           margin: 8px 0;
//           border-radius: 8px;
//           border: none;
//           background: #eee;
//           font-size: 14px;
//         }

//         .login-box a {
//           align-self: flex-end;
//           font-size: 12px;
//           color: #777;
//           text-decoration: none;
//           margin-bottom: 20px;
//         }

//         .signin-btn {
//           width: 150px;
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: #fff;
//           padding: 12px;
//           border: none;
//           border-radius: 20px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .signin-btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(37,117,252,0.3);
//         }

//         /* WELCOME PANEL */
//         .welcome-box {
//           flex: 1;
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           padding: 60px;
//           transition: all 0.8s ease;
//         }

//         .welcome-box h2 {
//           font-size: 28px;
//           margin-bottom: 10px;
//         }

//         .welcome-box p {
//           font-size: 14px;
//           margin-bottom: 30px;
//           text-align: center;
//           line-height: 1.5;
//         }

//         .signup-btn {
//           background: transparent;
//           border: 2px solid #fff;
//           color: #fff;
//           padding: 10px 30px;
//           border-radius: 20px;
//           cursor: pointer;
//           font-weight: bold;
//           transition: 0.3s;
//         }

//         .signup-btn:hover {
//           background: #fff;
//           color: #2575fc;
//         }

//         /* SWAP ANIMATION */
//         .container.admin {
//           flex-direction: row-reverse;
//         }

//         .container .login-box,
//         .container .welcome-box {
//           transition: transform 0.8s ease;
//         }

//         .container.staff .login-box {
//           transform: translateX(0);
//         }

//         .container.admin .login-box {
//           transform: translateX(-100%);
//         }

//         .container.staff .welcome-box {
//           transform: translateX(0);
//         }

//         .container.admin .welcome-box {
//           transform: translateX(100%);
//         }

//         .role-toggle {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           z-index: 3;
//         }

//         .role-toggle button {
//           border: none;
//           padding: 8px 18px;
//           border-radius: 20px;
//           background: #eee;
//           cursor: pointer;
//           font-weight: 600;
//           transition: all 0.3s ease;
//         }

//         .role-toggle button.active {
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           box-shadow: 0 5px 15px rgba(37,117,252,0.3);
//         }
//       `}</style>

//       <div className={`container ${role}`}>
//         {role === roles.STAFF ? <StaffLoginForm /> : <AdminLoginForm />}
//         {role === roles.STAFF ? (
//           <InfoPanel
//             title="Admin Portal"
//             message="Switch to admin login to manage staff and students"
//             buttonText="Go to Admin"
//             onClick={() => setRole(roles.ADMIN)}
//           />
//         ) : (
//           <InfoPanel
//             title="Staff Portal"
//             message="Switch to staff login to manage your profile and tasks"
//             buttonText="Go to Staff"
//             onClick={() => setRole(roles.STAFF)}
//           />
//         )}

//         <div className="role-toggle">
//           <button
//             className={role === roles.STAFF ? "active" : ""}
//             onClick={() => setRole(roles.STAFF)}
//           >
//             Staff
//           </button>
//           <button
//             className={role === roles.ADMIN ? "active" : ""}
//             onClick={() => setRole(roles.ADMIN)}
//           >
//             Admin
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

//====================================================================================================================//

// import React, { useState } from "react";
// import axios from "axios";
// import { Navigate, useNavigate } from 'react-router-dom';
// const roles = { STAFF: "staff", ADMIN: "admin" };

// export default function LoginPage() {
//   const [role, setRole] = useState(roles.STAFF);
//   const [staffId, setstaffId] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();


//   const StaffLoginForm = () => (
//     <div className="login-box">
//       <h2>Staff Sign In</h2>
//       <form onSubmit={handlelogin}>
//         <input
//           type="text"
//           placeholder="staffId"

//           value={staffId}
//           onChange={(e) => { setstaffId(e.target.value) }}
//           required />

//         <input
//           type="password"
//           placeholder="Password"

//           value={password}
//           onChange={(e) => { setPassword(e.target.value) }}
//           required
//         />
//         <button type="submit" className="signin-btn">SIGN IN</button>
//       </form>
//     </div>
//   );

//   const AdminLoginForm = () => (
//     <div className="login-box">
//       <h2>Admin Sign In</h2>
//       <form onSubmit={handlelogin}>
//         <input type="text" placeholder="Admin staffId" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit" className="signin-btn">SIGN IN</button>
//       </form>
//     </div>
//   );
//   const handlelogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8081/login", {
//         staffId, password, role
//       });

//       alert(response.data.message);

//       if (response.data.role === "admin") {
//         navigate('/admin-dashboard');
//       }

//       else if (response.data.role === "staff") {
//         navigate('/staff-dashbord');
//       }

//       else {
//         console.log("Invalid role");
//         alert("Invalid role");

//       }
//     }

//     catch (err) {
//       console.log(err);
//       alert("Login failed");
//     }

//   };


  

  

//   const InfoPanel = ({ title, message, buttonText, onClick }) => (
//     <div className="welcome-box">
//       <h2>{title}</h2>
//       <p>{message}</p>
//       <button className="signup-btn" onClick={onClick}>{buttonText}</button>
//     </div>
//   );

//   return (
//     <>
//       <style>{`
//         * {
//           box-sizing: border-box;
//           font-family: 'Poppins', sans-serif;
//         }

//         body, html, #root {
//           height: 100%;
//           margin: 0;
//           background: #e9e9e9;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .container {
//           width: 900px;
//           height: 500px;
//           background: #fff;
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 0 30px rgba(0,0,0,0.1);
//           display: flex;
//           position: relative;
//           transition: transform 1.5s ease-in-out;

//           }

//         .login-box, .welcome-box {
//           width: 50%;
//           height: 100%;
//           opacity: 1;
// // transition: transform 0.8s ease-in-out;

//           position: relative;
//           top: 0;
//         }

//         .login-box {
//           background: #fff;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           left: 0;
//           z-index: 2;
//           position: relative;
          
//         }

//         .welcome-box {
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           right: 0;
//           z-index: 1;
//          position: absolute;
//   transition: transform 1.5s ease-in-out;
//         }

//         /* Animation behavior */
//         .container.staff .login-box {
//           transform: translateX(0%);
//         }

//         .container.admin .login-box {
//           transform: translateX(100%);
//         }

//         .container.staff .welcome-box {
//           transform: translateX(0%);
//         }

//         .container.admin .welcome-box {
//           transform: translateX(-100%);
//         }

//         /* Text & Buttons */
//         h2 {
//           margin-bottom: 20px;
//         }

//         form {
//           display: flex;
//           flex-direction: column;
//           width: 70%;
//         }

//         input {
//           margin: 10px 0;
//           padding: 12px;
//           border-radius: 8px;
//           border: 1px solid #ccc;
//         }

//         .signin-btn {
//           margin-top: 10px;
//           padding: 10px;
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: #fff;
//           border: none;
//           border-radius: 20px;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .signup-btn {
//           background: transparent;
//           border: 2px solid #fff;
//           color: #fff;
//           padding: 10px 30px;
//           border-radius: 20px;
//           cursor: pointer;
//           font-weight: bold;
//           transition: 0.3s;
//         }

//         .signup-btn:hover {
//           background: #fff;
//           color: #2575fc;
//         }

//         .role-toggle {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           display: flex;
//           gap: 10px;
//           z-index: 3;
//         }

//         .role-toggle button {
//           border: none;
//           padding: 8px 18px;
//           border-radius: 20px;
//           background: #eee;
//           cursor: pointer;
//           font-weight: 600;
//           transition: all 0.3s ease;
//         }

//         .role-toggle button.active {
//           background: linear-gradient(to right, #6a11cb, #2575fc);
//           color: white;
//           box-shadow: 0 5px 15px rgba(37,117,252,0.3);
//         }
//           .container.staff .welcome-box,
//           .container.staff .login-box {
//           opacity: 1;
//         }

//         .container.admin .welcome-box,
//         .container.admin .login-box {
//          opacity: 1;
//         }

//       `}</style>

//       <div className={`container ${role}`}>
//         {role === roles.STAFF ? <StaffLoginForm /> : <AdminLoginForm />}
//         {role === roles.STAFF ? (
//           <InfoPanel
//             title="Admin Portal"
//             message="Switch to admin login to manage staff and students"
//             buttonText="Go to Admin"
//             onClick={() => setRole(roles.ADMIN)}
//           />
//         ) : (
//           <InfoPanel
//             title="Staff Portal"
//             message="Switch to staff login to manage your profile and tasks"
//             buttonText="Go to Staff"
//             onClick={() => setRole(roles.STAFF)}
//           />
//         )}

//         <div className="role-toggle">
//           <button
//             className={role === roles.STAFF ? "active" : ""}
//             onClick={() => setRole(roles.STAFF)}
//           >
//             Staff
//           </button>
//           <button
//             className={role === roles.ADMIN ? "active" : ""}
//             onClick={() => setRole(roles.ADMIN)}
//           >
//             Admin
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

//====================================================================================================================//

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.CSS"
const roles = { STAFF: "staff", ADMIN: "admin" };

//
// ✅ STAFF LOGIN FORM (OUTSIDE COMPONENT)
//
function StaffLoginForm({ staffId, setstaffId, password, setPassword, handlelogin }) {
  return (
    <div className="login-box">
      <h2>Staff Sign In</h2>
      <form onSubmit={handlelogin}>
        <input
          type="text"
          placeholder="Staff ID"
          value={staffId}
          onChange={(e) => setstaffId(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signin-btn">SIGN IN</button>
      </form>
    </div>
  );
}

//
// ✅ ADMIN LOGIN FORM (OUTSIDE COMPONENT)
//
function AdminLoginForm({ staffId, setstaffId, password, setPassword, handlelogin }) {
  return (
    <div className="login-box">
      <h2>Admin Sign In</h2>
      <form onSubmit={handlelogin}>
        <input
          type="text"
          placeholder="Admin Staff ID"
          value={staffId}
          onChange={(e) => setstaffId(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signin-btn">SIGN IN</button>
      </form>
    </div>
  );
}

//
// ✅ MAIN LOGINPAGE COMPONENT
//
export default function LoginPage() {
  const [role, setRole] = useState(roles.STAFF);
  const [staffId, setstaffId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  //
  // ✅ LOGIN HANDLER
  //
  const handlelogin = async (e) => {
    e.preventDefault();

    console.log("Login triggered");

    try {
      const response = await axios.post("http://localhost:8081/login", {
        staffId,
        password,
        role,//
      });

      alert(response.data.message);

      if (response.data.role === "admin") {
        navigate("/admin-dashboard");
      } 
      
      else if (response.data.role === "staff") {

        navigate("/staff-dashboard",{
          state:{staffId:response.data.staffId}
        });
 } 
      else {
        alert("Invalid role");
      }

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  //
  // ✅ INFO PANEL
  //
  const InfoPanel = ({ title, message, buttonText, onClick }) => (
    <div className="welcome-box">
      <h2>{title}</h2>
      <p>{message}</p>
      <button className="signup-btn" onClick={onClick}>{buttonText}</button>
    </div>
  );

  return (
    <>

      {/* ✅ FIXED CSS */}
      {/* <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          width: 900px;
          height: 500px;
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 30px rgba(0,0,0,0.1);
          display: flex;
          position: relative;
          transition: transform 1.5s ease-in-out;
        }

        .login-box, .welcome-box {
          width: 50%;
          height: 100%;
          position: relative;
        }

        .login-box {
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .welcome-box {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 0;
          transition: transform 1.5s ease-in-out;
        }

        .container.staff .welcome-box {
          transform: translateX(0%);
        }

        .container.admin .welcome-box {
          transform: translateX(-100%);
        }

        .container.staff .login-box {
          transform: translateX(0%);
        }

        .container.admin .login-box {
          transform: translateX(100%);
        }

        form {
          display: flex;
          flex-direction: column;
          width: 70%;
        }

        input {
          margin: 10px 0;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ccc;
        }

        .signin-btn {
          padding: 10px;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: #fff;
          border: none;
          border-radius: 20px;
          font-weight: bold;
          cursor: pointer;
        }

        .signup-btn {
          background: transparent;
          border: 2px solid #fff;
          color: #fff;
          padding: 10px 30px;
          border-radius: 20px;
          cursor: pointer;
        }

        .role-toggle {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
        }

        .role-toggle button.active {
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: white;
        }
      `}</style> */}
      

      <div className={`container ${role}`}>
        
        {/* ✅ Properly passing props */}
        {role === roles.STAFF ? (
          <StaffLoginForm
            staffId={staffId}
            setstaffId={setstaffId}
            password={password}
            setPassword={setPassword}
            handlelogin={handlelogin}
          />
        ) : (
          <AdminLoginForm
            staffId={staffId}
            setstaffId={setstaffId}
            password={password}
            setPassword={setPassword}
            handlelogin={handlelogin}
          />
        )}

        {/* ✅ Info panel */}
        {role === roles.STAFF ? (
          <InfoPanel
            title="Admin Portal"
            message="Switch to admin login to manage staff & students"
            buttonText="Go to Admin"
            onClick={() => setRole(roles.ADMIN)}
          />
        ) : (
          <InfoPanel
            title="Staff Portal"
            message="Switch to staff login"
            buttonText="Go to Staff"
            onClick={() => setRole(roles.STAFF)}
          />
        )}

        {/* ✅ Role buttons */}
        <div className="role-toggle">
          <button
            className={role === roles.STAFF ? "active" : ""}
            onClick={() => setRole(roles.STAFF)}
          >
            Staff
          </button>

          <button
            className={role === roles.ADMIN ? "active" : ""}
            onClick={() => setRole(roles.ADMIN)}
          >
            Admin
          </button>
        </div>
      </div>
    </>
  );
}
