const express = require('express');
const router = express.Router();
const { getDoctorAppointments, cancelAppointment, Checkup , getPatientHistory } = require('../controllers/DoctorController');

router.post('/appointments', getDoctorAppointments);
router.delete('/delete/:id', cancelAppointment);
router.post('/addCheckup', Checkup); 
router.post('/patientHistory', getPatientHistory);

module.exports = router;