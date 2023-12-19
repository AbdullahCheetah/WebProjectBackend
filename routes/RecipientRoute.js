const { addDoctor, updateDoctor, deleteDoctor, getAllDoctor } = require('../controllers/RecipientController');
const express = require('express');
const router = express.Router();

router.post("/add", addDoctor);
router.put("/update/:id", updateDoctor);
router.delete("/delete/:id", deleteDoctor);
router.get("/getAll", getAllDoctor);

module.exports = router;
