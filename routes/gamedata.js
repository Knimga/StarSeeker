const express = require('express');
const router = express.Router();

const RaceDesc = require('../models/raceDesc.model');
const ThemeDesc = require('../models/themeDesc.model');

router.get('/raceDesc', (req,res) => {
    RaceDesc.find().lean().then((raceDesc) => {
        res.status(200).send(raceDesc);
    }).catch((e) => {res.status(400).send(e)});
});

router.get('/themeDesc', (req,res) => {
    ThemeDesc.find().lean().then((themeDesc) => {
        res.status(200).send(themeDesc);
    }).catch((e) => {res.status(400).send(e)});
});

module.exports = router;