const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dao", "christian", "123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
