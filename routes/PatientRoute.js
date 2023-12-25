const express = require('express');
const router = express.Router();
const {verify} = require("../utils")
const { getAllDoctors, requestAppointment } = require('../controllers/PatientController');

router.get('/doctors', getAllDoctors);
router.post('/request-appointment', verify, requestAppointment);

module.exports = router;
