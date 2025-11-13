require('dotenv').config(); // load .env variables
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
    }
);

(async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ Sequelize MySQL Connected");
    } catch (err) {
        console.error("❌ Unable to connect to DB:", err);
    }
})();

module.exports = sequelize;
