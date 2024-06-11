require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./Db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

const allowedOrigins = ["https://electrify-voting-app-z06u.onrender.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

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
