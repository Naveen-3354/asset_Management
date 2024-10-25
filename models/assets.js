const sequelize = require("../config/db.js")
const { DataTypes } = require('sequelize');
const AssetCategory = require("./AssetCategory.js")

const Assets = sequelize.define("Assets", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    serialNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    make: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: AssetCategory,
            key: 'id',
        },
        allowNull: false,
    },
    totalStock:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    availableStock:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    scrapStock:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
    purchaseDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    warrantyExpiryDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Active', 'Inactive'),
        defaultValue: 'Active',
    },
}, {
    tableName: "assets"
});

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Asset table created successfully!");
    })
    .catch((err) => {
        console.error("Error creating table: ", err);
    });

module.exports = Assets;