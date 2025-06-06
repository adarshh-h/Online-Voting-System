const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const {
  jwtMiddleware,
  generateToken,
} = require("../Middleware/JwtAuthentication");

// route for add a user
// router.post("/signup", async (req, res) => {
//   try {
//     let success = false;
//     let userData = new User(req.body); // here req.body contains data which we enter
//     let response = await userData.save();

//     // this payload responsible for generating token corresponding to user's id and user's username
//     const payload = {
//       id: response.id,
//     };

//     const token = await generateToken(payload);
//     success = true;
//     res.json({ success: success, token: token });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });
// router.post("/signup", async (req, res) => {
//   try {
//     let success = false;
//     const { age } = req.body;

//     if (!age || age < 16) {
//       return res.status(400).json({ success, error: "You must be at least 16 years old to sign up." });
//     }

//     let userData = new User(req.body);
//     let response = await userData.save();

//     const payload = { id: response.id };
//     const token = await generateToken(payload);
    
//     success = true;
//     res.json({ success, token });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// router.post("/signup", async (req, res) => {
//   try {
//     let success = false;
//     const { age, aadharnumber, phone } = req.body;

//     // Age validation
//     if (!age || age < 16) {
//       return res.status(400).json({ success, error: "You must be at least 16 years old to sign up." });
//     }

//     // Aadhar number validation (must be exactly 12 digits)
//     if (!/^\d{12}$/.test(aadharnumber)) {
//       return res.status(400).json({ success, error: "Aadhar number must be exactly 12 digits." });
//     }

//     // Phone number validation (must be exactly 10 digits)
//     if (!/^\d{10}$/.test(phone)) {
//       return res.status(400).json({ success, error: "Phone number must be exactly 10 digits." });
//     }

//     let userData = new User(req.body);
//     let response = await userData.save();

//     const payload = { id: response.id };
//     const token = await generateToken(payload);
    
//     success = true;
//     res.json({ success, token });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

router.post("/signup", async (req, res) => {
  try {
    let success = false;
    const { age, aadharnumber, phone, email } = req.body;

    // Age validation
    if (!age || age < 16) {
      return res.status(400).json({ success, error: "You must be at least 16 years old to sign up." });
    }

    // Aadhar number validation (must be exactly 12 digits)
    if (!/^\d{12}$/.test(aadharnumber)) {
      return res.status(400).json({ success, error: "Aadhar number must be exactly 12 digits." });
    }

    // Phone number validation (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ success, error: "Phone number must be exactly 10 digits." });
    }

    // Email validation (must be in correct format)
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return res.status(400).json({ success, error: "Invalid email format." });
    }

    let userData = new User(req.body);
    let response = await userData.save();

    const payload = { id: response.id };
    const token = await generateToken(payload);
    
    success = true;
    res.json({ success, token });
  } catch (error) {
    res.status(500).json(error);
  }
});

// user route for login
router.post("/login", async (req, res) => {
  try {
    let success = false;
    const { aadharnumber, password } = req.body;
    // find the user by its aadharnumber
    const user = await User.findOne({ aadharnumber: aadharnumber });
    // if user is not available or entered password is not match by user's password -- return error
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Incorrect Username or Password" });
    }

    // generate the token
    const payload = {
      id: user.id,
    };
    let token = await generateToken(payload);
    success = true;
    res.json({ success: success, user: user, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// get specific profile using auth token
router.get("/profile", jwtMiddleware, async (req, res) => {
  try {
    const userData = req.user;
    const userId = userData.id;
    const user = await User.findById(userId);
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// put request for update user's details
router.put("/update", jwtMiddleware, async (req, res) => {
  try {
    let success = false;
    const { currentpass, newpass } = req.body;
    const userId = req.user.id; // extract the id from the token
    // check if currentPass or newPass is available in the req.body
    if (!(currentpass || newpass)) {
      return res
        .status(401)
        .json({ error: "Kindly Provide current and New Password" });
    }
    // find the user by its id
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User Not Found" });

    // update the user's password
    success = true;
    user.password = newpass;
    await user.save();
    res.status(200).json({ success: success, message: "Password Changed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});
module.exports = router;
