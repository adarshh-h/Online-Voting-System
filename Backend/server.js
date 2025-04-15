// require("dotenv").config();
// const express = require("express");
// const app = express();
// const db = require("./Db");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const port = process.env.PORT;

// app.use(bodyParser.json());


// // Middleware to set CORS headers for every response
// app.use((req, res, next) => {
//   const origin = req.headers.origin;
//   if (allowedOrigins.includes(origin)) {
//     res.header("Access-Control-Allow-Origin", origin);
//   }
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

// const allowedOrigins = [
//  'http://localhost:3000'
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true, // Allow cookies
//   })
// );

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// // import the routes
// const userRoutes = require("./Routes/userRoutes");
// const candidateRoutes = require("./Routes/cadidateRoutes");
// const ContactRoutes = require("./Routes/ContactRoutes");

// // use the routers
// app.use("/user", userRoutes);
// app.use("/candidate", candidateRoutes);
// app.use("/contact", ContactRoutes);
// app.use("/uploads", express.static("uploads"));


// app.listen(port, () => {
//   console.log(`listening on port number : ${port}`);
// });


require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./Db");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;

app.use(bodyParser.json());

// ✅ Define allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'https://online-voting-system-sepia.vercel.app'
];

// ✅ Proper CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

// ❌ Remove this manual middleware — not needed:
// app.use((req, res, next) => { ... });


// Routes
const userRoutes = require("./Routes/userRoutes");
const candidateRoutes = require("./Routes/cadidateRoutes");
const ContactRoutes = require("./Routes/ContactRoutes");

app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);
app.use("/contact", ContactRoutes);
app.use("/uploads", express.static("uploads"));

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(port, () => {
  console.log(`listening on port number : ${port}`);
});

