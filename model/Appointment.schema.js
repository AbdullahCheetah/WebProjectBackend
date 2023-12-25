const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  Date: String,
  Time: String,
  DoctorID: String,
  PatientID: String,
  Status: String, // Completed, Incomplete, Cancelled, Rescheduled
  Type: String, // Appointment type: Normal or Emergency
  Fees: Number,
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
