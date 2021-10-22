const express = require("express");

const { createDoctor } = require("./controller");

const router = express.Router();

router.post("/", createDoctor);

module.exports = router;
