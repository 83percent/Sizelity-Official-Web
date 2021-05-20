const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const __Mongoose = require('./lib/db/Mongo');

// Field
const PORT = 3002;

// Route
const LoginRouter = require('./router/LoginRouter');
const UserRouter = require('./router/UserRouter');

/* ================================
            Server start
================================ */
const server = express();

server.use(express.static('public'));
server.use(cookieParser({secret: '83percent'}));
server.use(cookieSession({
    name: 'shop',
    keys: ['83percent']
})); 
server.use(cors({
    //origin: 'https://www.sizelity.com',
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true
}));
server.use(express.json());
server.use(session({
    resave: false,
    saveUninitialized : false,
    cookie: {
        secure: false
    },
    secret: '83percent'
}));
server.use(passport.initialize());
server.use(passport.session());
server.options('/*', (_, res) => {
    //res.header("Access-Control-Allow-Origin", "https://www.sizelity.com");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", 'true');

    res.sendStatus(200);
});

/* ================================
               Router
================================ */
server.use('/account', LoginRouter);
server.use('/user', (req, res, next) => {
    if(req.isAuthenticated()) next();
    else {
        res.sendStatus(401);
    }
},UserRouter);

// Route Connect


server.listen(PORT, () => {
    console.log(" Start Server.js PORT : ",PORT);
});