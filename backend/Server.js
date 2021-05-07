const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const __Mongoose = require('./lib/db/Mongo');

// Field
const PORT = 3001;

// Route


/* ================================
            Server start
================================ */
const server = express();
server.use(bodyParser.json());

server.use(cors({
    //origin: 'https://www.sizelity.com',
    origin: 'http://localhost:3001',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH','OPTIONS'],
    credentials: true
}));



// Route Connect


server.listen(PORT, () => {
    console.log(" Start Server.js PORT : ",PORT);
});