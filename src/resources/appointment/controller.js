const prisma = require("../../utils/db");

const createAppointment = async (req, res) => {
    const result = await prisma.appointment.create({
        data: {
            practiceName: req.body.practiceName
            reason: req.body.reason
            dateTime:req.body.dateTime
        }
    })
};

module.exports = { createAppointment };
