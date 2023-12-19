const Doctor = require('../model/User.schema');

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({role:'doctor'});

    res.status(200).json({ doctors });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllDoctors,
};
