const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name :String,
    email:String,
    role:String,// Patient,Doctor,Admin,Recepient
    password:String,
    Blocked:Boolean,//Blocked By Admin
    Reason:String,   // Reason to block
},{timestamps:true})
const model = mongoose.model("User" , userSchema);
module.exports = model;

