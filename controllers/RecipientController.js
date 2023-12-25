const user = require('../model/User.schema');

const addDoctor = async (req, res) => {
  try {
    const { name, email, password, role, availableDays, availableTimeStart, availableTimeEnd } = req.body;
    const existingDoctor = await user.findOne({ email });

    if (existingDoctor) {
      return res.status(400).json({ message: 'Doctor already exists with this email' });
    }

    const createdDoctor = await user.create({
      name,
      email,
      password,
      role,
      availableDays,
      availableTimeStart,
      availableTimeEnd,
    });

    res.status(201).json(createdDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateDoctor = async (req, res) => {
  const doctorId = req.params.id;
  const { name, email, password, role, availableDays, availableTimeStart, availableTimeEnd } = req.body;
  try {
    const updatedDoctor = await user.findByIdAndUpdate(doctorId, {
      name,
      email,
      password,
      role,
      availableDays,
      availableTimeStart,
      availableTimeEnd,
    }, { new: true });

    if (!updatedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json(updatedDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteDoctor = async (req, res) => {
  const doctorId = req.params.id;

  try {
    const deletedDoctor = await user.findByIdAndDelete(doctorId);

    if (!deletedDoctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    res.status(200).json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllDoctor = async (req, res) => {
  try {
    const doctors = await user.find({ role: 'doctor' });

    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { addDoctor, updateDoctor, deleteDoctor, getAllDoctor };
