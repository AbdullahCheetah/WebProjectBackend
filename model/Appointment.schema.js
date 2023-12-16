const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Date :String,
    Time:String,
    DoctorID:String,
    PatientID:String,
    Status:String,// Completed,Incomplete,Cancelled,Resheduled
    Type:String,//Appointment type normal or emegency
    Fees:Number
},{timestamps:true})
const model = mongoose.model("Appointment" , userSchema);
module.exports = model;
