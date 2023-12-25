const express = require('express');
const router = express.Router();
const { getDoctorAppointments } = require('../controllers/DoctorController');
const { verify } = require("../utils")


router.get('/appointments', verify, getDoctorAppointments);

module.exports = router;