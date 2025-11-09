const express = require("express");
const otpRoutes = require("./Routes/OtpRoutes");
const cors = require("cors");
const sequelize = require("./db");
const User = require("./Models/User");
const LeaveApplay = require("./Models/Leaveapplay");
require('dotenv').config();



sequelize.sync().then(() => {
  console.log("✅ All models synced.");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", otpRoutes);

//============== LOGIN VREFICATION =====================================================//
app.post("/login", async (req, res) => {
  const { staffId, password, role } = req.body;

  try {
    const user = await User.findOne({
      where: { staff_id: staffId, password, role }
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid staff ID or password" });
    }

    return res.json({
      message: "Login successful",
      role: user.role,
      name: user.name,
      staffId: user.staff_id
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
});
//=============================LEAVE APPLAY ========================================================//
app.post("/Leaveapply", async(req,res)=>{
  const {name,PhoneNo,Department,EmailId,Leavetype,FromDate,ToDate,Reason,StaffId}=req.body;

  try{
    if(!name || !PhoneNo || !Department || !EmailId || !Leavetype || !FromDate || !ToDate || !Reason){
      return  res.status(400).json({success:false,message:"All fields are required"});
    }

    const LeaveForm = await LeaveApplay.create({
      name,
      PhoneNo,
      Department,
      EmailId,
      Leavetype,
      FromDate,
      ToDate,
      Reason,
      StaffId      
    });

    return res.status(201).json({success:true, message:"Leave applied successfully. Status is pending. If your leave is approved, we will notify you via email."});


  }

  catch(err){
    console.log(err);
    return res.status(500).json({ success:false, message:"Server error" });
  }
});

app.listen(8081, () => {
  console.log("Server running on port 8081");
});
