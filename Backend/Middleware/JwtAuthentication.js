require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret_key = process.env.SECRET_KEY;

const jwtMiddleware = async (req, res, next) => {
  const authorization = req.headers.authorization;

  // first check if headers has authorization or not
  if (!authorization) {
    res.status(500).json("Token not found");
  }

  // extract the jwt token from the request headers
  const token = req.headers?.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    // verify the token
    const data = jwt.verify(token, secret_key);
    req.user = data;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Invalid token" });
  }
};

const generateToken = async (userData) => {
  return jwt.sign(userData, secret_key);
};

module.exports = { generateToken, jwtMiddleware };
