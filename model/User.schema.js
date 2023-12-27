const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  role: String, // Patient,Doctor,Admin,Recipient
  password: String,
  specialist:String,
  blocked: Boolean, // Blocked By Admin
  reason: String, // Reason to block
  availableDays:String,
  availableTimeStart:String,
  availableTimeEnd:String,
  Fees: Number,
}, { timestamps: true });

const model = mongoose.model("User", userSchema);
module.exports = model;
