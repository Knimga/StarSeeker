const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');

const User = require('../models/user.model');

router.post('/register', (req,res,next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        userName: req.body.userName,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err){res.json({success: false, message: err})}
            else{res.json({success: true, message:'User registered'})}
    })
});

router.post('/authenticate', (req,res,next) => {
    const userName = req.body.userName;
    const password = req.body.password;

    User.getUserByUserName(userName, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({success: false, msg: 'User not found'});

        User.comparePassword(password, user.password, (err , isMatch) => {
            if(err) throw err;
            if(isMatch) {
                const token = jwt.sign(user, config.secret, {expiresIn: 43200}); //12 hours
                res.json({
                    success: true, 
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        userName: user.userName,
                        email: user.email
                    }
                });
            } else return res.json({success: false, msg: 'Wrong password'});
        });
    });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req,res,next) => {
    res.json({user: req.user});
});

router.get('/validate', (req,res,next) => {
    res.send('VALIDATE');
});

module.exports = router;