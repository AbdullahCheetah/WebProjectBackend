const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    FullName :String,
    Email:String,
    Role:String,// Patient,Doctor,Admin,Recepient
    Password:String,
    Blocked:Boolean,//Blocked By Admin
    Reason:String,   // Reason to block
},{timestamps:true})
const model = mongoose.model("User" , userSchema);
module.exports = model;

