const express = require("express");
const router = express.Router();
const contact = require("../Models/Contact");

router.post("/", async (req, res) => {
  try {
    let success = false;
    const data = req.body;
    const details = new contact(data);
    let response = await details.save();
    success = true;
    res.status(200).json({ success: success, response: response });
  } catch (error) {
    res.status(500).json("Internal Server Down");
    console.log(error);
  }
});

module.exports = router;
