const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const User = require("./Models/User");
require('dotenv').config();

sequelize.sync().then(() => {
  console.log("✅ All models synced.");
});

const app = express();
app.use(cors());
app.use(express.json());

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

app.listen(8081, () => {
  console.log("Server running on port 8081");
});
