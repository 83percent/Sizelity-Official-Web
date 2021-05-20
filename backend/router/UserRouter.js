const express = require('express');
const router = express.Router();

// Module
const User = require("../module/User");


const StatusCode = require("../lib/response-code/status-code");


router.get("/:id", async (req, res) => {
    const id = req.params.id;
    if(id != req.user.id) res.sendStatus(StatusCode.badRequest); // 400
    else {
        const result = await User.get(id);
        if(result == null) res.sendStatus(StatusCode.noData); // 404
        else res.send(result);
    }
});

module.exports = router;