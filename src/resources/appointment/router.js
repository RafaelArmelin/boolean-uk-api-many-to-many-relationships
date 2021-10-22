const express = require("express");

const { createAppointment } = require("./controller");

const router = express.Router();

router.post("/", createAppointment);

module.exports = router;
