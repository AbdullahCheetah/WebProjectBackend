const {addDoctor} = require('../controllers/RecipientController');
const express = require('express');
const router = express.Router();

router.post("/add", addDoctor);

module.exports = router;
