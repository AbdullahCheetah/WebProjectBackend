const user = require('../model/User.schema');

const addDoctor = async (req, res) => {
    try {
      const { email, password, role } = req.body;
      
      const existingDoctor = await user.findOne({ email });
      if (existingDoctor) {
        return res.status(400).json({ message: 'User already exists with this email' });
      }
  
      const createdDoctor = await user.create({
        email,
        password,
        role,
      });
  
      res.status(201).json(createdDoctor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = { addDoctor };
