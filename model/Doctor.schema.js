const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    FullName :String,
    Email:String,
    Role:String,// Patient,Doctor,Admin,Recepient
    Password:String,
    Blocked:Boolean,//Blocked By Admin
    Reason:String,   // Reason to block
    NormalFees :Number,
    EmergencyFees:Number,
    AvailableDays:[String],
    AvailableTimeStart:String,
    AvailableTimeEnd:String,
},{timestamps:true})
const model = mongoose.model("Doctor" , userSchema);
module.exports = model;

