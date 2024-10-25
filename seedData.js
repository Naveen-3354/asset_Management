const sequelize = require("./config/db.js")

const AssetCategory = require("./models/AssetCategory.js")
const Assets = require("./models/assets.js")
const Employee = require("./models/employee.js")
const AssetIssue = require("./models/issueAsset.js")

const { assetCategorys, assetIssues, assets, employees } = require("./sampleData/data.js")

const seedDatabase = async () => {
    try {
        const transaction = await sequelize.transaction();

        await AssetIssue.destroy({ where: {}, truncate: true, cascade: true }, { transaction });
        await Assets.destroy({ where: {}, truncate: true, cascade: true }, { transaction });
        await AssetCategory.destroy({ where: {}, truncate: true, cascade: true }, { transaction });
        await Employee.destroy({ where: {}, truncate: true, cascade: true }, { transaction });

        await Employee.bulkCreate(employees);
        await AssetCategory.bulkCreate(assetCategorys);
        await Assets.bulkCreate(assets);
        await AssetIssue.bulkCreate(assetIssues);

        await transaction.commit();
        console.log('Sample data inserted successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await sequelize.close();
    }
};


seedDatabase();