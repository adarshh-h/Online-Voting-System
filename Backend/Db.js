require("dotenv").config();
const mongoose = require("mongoose");
const dbServerUrl = `mongodb+srv://${process.env.DB_EMAIL}:${process.env.DB_PASSWORD}@voting-database.hpwadsm.mongodb.net/`;

const db = mongoose.connection;

mongoose.connect(dbServerUrl);

db.on("connected", () => {
  console.log("connected to database");
});

db.on("disconnected", () => {
  console.log("disconnected with database");
});

db.on("error", () => {
  console.log("error with database");
});

module.exports = db;
