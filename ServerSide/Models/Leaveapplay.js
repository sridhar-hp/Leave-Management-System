const{Sequelize,DataTypes}=require('sequelize');
const sequelize=require('../db');

const LeaveApplay=sequelize.define('leaveapplaylist',{
    sno:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StaffId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
    created_at: {
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
    }
},{ 
    freezeTableName: true,
    timestamps: false
});
module.exports=LeaveApplay;