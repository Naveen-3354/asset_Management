const { DataTypes } = require('sequelize');
const sequelize = require("../config/db.js")

const AssetCategory = sequelize.define('AssetCategory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('Active', 'Inactive'),
        defaultValue: 'Active',
    },
}, {
    tableName: "assetCategorys"
});


sequelize.sync({alter: true })
    .then(() => {
        console.log("Asset Category table created successfully!");
    })
    .catch((err) => {
        console.error("Error creating table: ", err);
    });
module.exports = AssetCategory;