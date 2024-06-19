"use strict"; // For use with ES6
import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_PORT } =
  process.env;

// Initialize the database connection
const gglDB = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: "mysql",
  logging: false,
});

export { gglDB };
