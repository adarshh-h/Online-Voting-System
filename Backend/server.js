require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./Db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// import the routes
const userRoutes = require("./Routes/userRoutes");
const candidateRoutes = require("./Routes/cadidateRoutes");
const ContactRoutes = require("./Routes/ContactRoutes");

// use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);
app.use("/contact", ContactRoutes);

app.listen(port, () => {
  console.log(`listening on port number : ${port}`);
});
