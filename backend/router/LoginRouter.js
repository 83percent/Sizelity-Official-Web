const express = require('express');
const router = express.Router();

const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const ShopUserModel = require("../lib/models/ShopUserModel");
const bcrypt = require('bcrypt');

const StatusCode = require("../lib/response-code/status-code");
const saltRounds = 10;

router.post('/signup', async (req, res) => {
    const {sname, domain, password, tel, email} = req.body;
    if(!sname || sname.length < 2 || sname.length > 20 || !domain ||
        !password || password.length < 8 || password.length > 20 ||
        !tel || tel.length < 8 || tel.length > 20 || !email ||
        email.length < 10 || email.length > 50) res.sendStatus(StatusCode.invalid); // 412
    else {
        try {
            let isExist = await ShopUserModel.findOne({domain}, ["_id"]);
            if(isExist) res.sendStatus(StatusCode.exist); // 419
            else {
                const salt = bcrypt.genSaltSync(saltRounds);
                const hash = bcrypt.hashSync(password, salt);
                const account = new ShopUserModel({sname, domain, password: hash, tel, email});
                const {_id} = await account.save();
                res.send({_id}); // 200
            }
        } catch(err) {
            console.log(err);
            res.sendStatus(StatusCode.error); // 500
        }
    }
})
router.post('/signin', passport.authenticate('local'), 
    function(req, res) {
        if(req.user) {
            res.send({
                _id: req.user._id,
                sname: req.user.sname
            });
        } else {
            res.sendStatus(StatusCode.noData); // 404
        }
    }
);

passport.use(new LocalStrategy (
    async function(username, password, done) {
        const shop = await ShopUserModel.findById(username);
        if(!shop) {
            return done(null, false, {message: 'Incorrect id'});
        } else {
            try {
                const match = password.length > 20 
                    ? password === shop.password
                    : bcrypt.compareSync(password, shop.password);
                    console.log("비밀번호 확인 : ", match)
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
passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    ShopUserModel.findById(id, (err, user) => {
        done(err, user);
    })
});
module.exports = router;