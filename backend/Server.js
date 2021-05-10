const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const bodyParser = require('body-parser');

const __Mongoose = require('./lib/db/Mongo');

// Field
const PORT = 3001;

// Route
const LoginRouter = require('./router/LoginRouter');

/* ================================
            Server start
================================ */
const server = express();

server.use(express.static('public'));
server.use(cookieParser({secret: 'rererere'}));
server.use(cookieSession({
    name: 'session',
    keys: ['rererere']
})); 
server.use(cors({
    //origin: 'https://www.sizelity.com',
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH','OPTIONS'],
    credentials: true
}));
server.use(bodyParser.json());
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized : false,
    cookie: {
        secure: false
    },
    secret: 'rererere'
}));
server.use(passport.initialize());
server.use(passport.session());
server.use('/account', LoginRouter);

// Route Connect


server.listen(PORT, () => {
    console.log(" Start Server.js PORT : ",PORT);
});