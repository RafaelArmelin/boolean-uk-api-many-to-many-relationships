const express = require("express");

const { createPatientWithAppointment } = require("./controller");

const router = express.Router();

router.post("/", createPatientWithAppointment);

module.exports = router;
