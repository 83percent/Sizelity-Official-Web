const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const ShopUserModel = require("../lib/models/ShopUserModel");
const bcrypt = require('bcrypt');

const StatusCode = require("../lib/response-code/status-code");
const saltRounds = 10;

router.post('/signup', async (req, res) => {
    
})
router.post('/signin', passport.authenticate('local'), 
    function(req, res) {
        if(req.user) {
            res.send({
                _id: req.user.id,
                password: req.user.upwd,
                sname: req.user.name
            });
        } else {
            res.sendStatus(StatusCode.noData);
        }
    }
);

passport.use(new LocalStrategy (
    function(username, password, done) {
        console.table([username, password]);
        const shop = ShopUserModel.findById(username);
        if(!shop) {
            return done(null, false, {message: 'Incorrect id'});
        } else {
            try {
                const match = password.length > 20 
                    ? password === shop.password
                    : bcrypt.compareSync(password, shop.upwd);
                if(match) {
                    return done(null, shop);
                } else {
                    return done(null, false, {message: 'Incorrect password'});
                }
            } catch(e) {
                return done(e)
            }
        }
    }
));

module.exports = router;