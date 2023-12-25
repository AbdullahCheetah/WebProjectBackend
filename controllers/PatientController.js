const Doctor = require('../model/User.schema');
const Appointment = require('../model/Appointment.schema');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({ role: 'doctor' });
    res.status(200).json({ doctors });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const requestAppointment = async (req, res) => {
  try {
    const { Date, Time, DoctorID, PatientID } = req.body;

    const appointment = new Appointment({
      Date,
      Time,
      DoctorID,
      PatientID,
      Status: 'Incomplete',
      Type: 'Normal',
      Fees: 1000,
    });

    const savedAppointment = await appointment.save();

    res.status(201).json({ appointment: savedAppointment });
  } catch (error) {
    console.error('Error requesting appointment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getAllDoctors,
  requestAppointment,
};
