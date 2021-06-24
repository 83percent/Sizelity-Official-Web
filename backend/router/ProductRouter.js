const express = require('express');
const router = express.Router();

const Product = require("../module/Product");

const StatusCode = require("../lib/response-code/status-code");

//    Create Product


router.post("/", async (req, res) => {
    const id = req.user.id;
    const data = req.body;
    const result = await Product.set(id, data);
});


router.get("/search/:value/:count", async (req, res) => {
    const id = req.user.id;
    const {value, count} = req.params;
    
    if(parseInt(count) < 0) res.sendStatus(StatusCode.invalid);
    else {
        const result = await Product.search(id, value, parseInt(count));
        console.log(result);
        if(result != null) res.send(result);
        else res.sendStatus(StatusCode.noData);
        //const result = await Product.search(id, value);
    }
});


/*
    ./product/get
*/

router.get("/get/type/:type/:count", async (req, res) => {
    const domain = req.user.domain;
    const {type, count} = req.params;

    if(parseInt(count) < 0) {
        res.sendStatus(StatusCode.invalid);
    }
    
    const result = await Product.getOfType(domain, type, perseInt(count));
    if(result) res.send(result);
    else res.sendStatus(StatusCode.error);
});

module.exports = router;