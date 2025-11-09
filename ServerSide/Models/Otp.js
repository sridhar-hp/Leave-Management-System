const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Otp = sequelize.define("Otp", {
  id: { 
    type: DataTypes.INTEGER, 
    autoIncrement: true, 
    primaryKey: true 
  },
  staff_id: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  otp: { 
    type: DataTypes.STRING(6), 
    allowNull: false 
  },
  expires_at: { 
    type: DataTypes.DATE, 
    allowNull: false 
  },
}, {
  tableName: "otps",
  timestamps: false
});

module.exports = Otp;
