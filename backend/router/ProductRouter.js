/* const express = require('express');
const router = express.router();

const Product = require("../module/Product");

const StatusCode = require("../lib/response-code/status-code");

//    Create Product


router.post("/", async (req, res) => {
    const id = req.user.id;
    const data = req.body;
    const result = await Product.set(id, data);
});


module.exports = router; */