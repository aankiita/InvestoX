const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    default: "Commodity",
  },
  status: {
    type: String,
    default: "Active",
  },
  balance: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Investor", investorSchema);
