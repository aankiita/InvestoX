const express = require("express");
const router = express.Router();
const Investor = require("../model/invester");
const User = require("../model/UserModel"); 

router.post("/openAccount", async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    const existing = await Investor.findOne({ userId });
    if (existing) {
      return res.status(400).json({ message: "Account already exists" });
    }

    const newInvestor = await Investor.create({
      userId: user._id,
      username: user.username,
    });

    res.status(201).json({
      success: true,
      message: "Commodity account created successfully!",
      investor: newInvestor,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
