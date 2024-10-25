const { DataTypes } = require('sequelize');
const sequelize = require("../config/db.js")
const Assets = require("./assets.js")
const Employee = require("./employee.js")

const AssetIssue = sequelize.define("AssetIssue",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    issueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    returnDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    assetId: {
        type: DataTypes.INTEGER,
        references: {
            model: Assets , 
            key: 'id',
        },
        allowNull: false,
    },
    employeeId: {
        type: DataTypes.INTEGER,
        references: {
            model: Employee,
            key: 'id',
        },
        allowNull: false,
    },
    status:{
       type: DataTypes.ENUM('ISSUED', 'RETURNED','SCRAP',"AVAILABLE"),
        defaultValue: 'AVAILABLE',
    }
}, {
    tableName: "assetIssue"
});


sequelize.sync({ alter: true })
    .then(() => {
        console.log("Asset Issue table created successfully!");
    })
    .catch((err) => {
        console.error("Error creating table: ", err);
    });

module.exports = AssetIssue;
