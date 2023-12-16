const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    Frequency:String,// 2 times a day or 3 times a day
    AppointmentID:String,
    Medicinename:String,
    Description:String,
    Noofdays:Number,
},{timestamps:true})
const model = mongoose.model("Medicine" , userSchema);
module.exports = model;
