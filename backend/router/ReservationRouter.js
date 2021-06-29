const express = require('express');
const router = express.Router();

const ReservationModel = require('../lib/models/Reservation');

/*
    This router is within 'Module'
*/

router.post('/', async (req, res) => {
    const data = req.body;
    console.log(data);
});

module.exports = router;