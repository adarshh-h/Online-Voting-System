// require("dotenv").config();
// const mongoose = require("mongoose");
// const db = mongoose.connection;
// mongoose.connect(dbServerUrl);

// db.on("connected", () => {
//   console.log("connected to database");
// });


// db.on("disconnected", () => {
//   console.log("disconnected with database");
// });

// db.on("error", () => {
//   console.log("error with database");
// });

// module.exports = db;

require("dotenv").config();
const mongoose = require("mongoose");

const dbServerUrl = process.env.MONGO_URI; // Fetching from .env
const db = mongoose.connection;

mongoose.connect(dbServerUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

db.on("connected", () => {
  console.log("Connected to database");
});

db.on("disconnected", () => {
  console.log("Disconnected from database");
});

db.on("error", (err) => {
  console.error("Error connecting to database:", err);
});

module.exports = db;
