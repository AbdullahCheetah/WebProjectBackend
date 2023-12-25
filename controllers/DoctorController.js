const Appointment = require('../model/Appointment.schema');

const getDoctorAppointments = async (req, res) => {
  try {
    const { loggedInDoctorId } = req.body; 

    console.log(loggedInDoctorId);

    if (!loggedInDoctorId) {
      throw new Error('Doctor information not available');
    }

    const appointments = await Appointment.find({ DoctorID: loggedInDoctorId });

    console.log(appointments);

    res.status(200).json({ appointments });
  } catch (error) {
    console.error('Error fetching doctor appointments:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message}` });
  }
};

module.exports = {
  getDoctorAppointments,
};
