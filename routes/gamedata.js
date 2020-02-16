const express = require('express');
const router = express.Router();

const RaceDesc = require('../models/raceDesc.model');
const ThemeDesc = require('../models/themeDesc.model');
const ClassDesc = require('../models/classDesc.model');
const Skills = require('../models/skills.model');

async function getStaticData(model,res) {
    return model.find().lean().then((data) => {
        res.status(200).send(data);
    }).catch((e) => {res.status(400).send(e)});
}

router.get('/raceDesc', (req,res) => {getStaticData(RaceDesc,res)});
router.get('/themeDesc', (req,res) => {getStaticData(ThemeDesc,res)});
router.get('/classDesc', (req,res) => {getStaticData(ClassDesc,res)});
router.get('/skills', (req,res) => {getStaticData(Skills,res)});

module.exports = router;