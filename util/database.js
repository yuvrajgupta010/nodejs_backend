const Sequalize = require("sequelize");

const sequelize = new Sequalize("node-complete", "root", "Equalhash@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
