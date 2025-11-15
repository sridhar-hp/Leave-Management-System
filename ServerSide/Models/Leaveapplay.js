const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const LeaveApplay = sequelize.define('leaveapplaylist', {
    sno: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StaffId: {
        type: DataTypes.STRING,
        allowNull: false,
        // unique: false
    },
    PhoneNo: {
        type: DataTypes.STRING
    },
    Department: {
        type: DataTypes.STRING
    },
    EmailId: {
        type: DataTypes.STRING
    },
    Leavetype: {
        type: DataTypes.STRING
    },
    created_at: {// this is optional
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    FromDate: {
        type: DataTypes.DATE
    },
    ToDate: {
        type: DataTypes.DATE
    },
    Reason: {
        type: DataTypes.STRING(1000)
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Pending'
    }
}, {
    freezeTableName: true,
    timestamps: false
});
module.exports = LeaveApplay;