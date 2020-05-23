const express = require('express');
const router = express.Router();

const RaceDesc = require('../models/raceDesc.model');
const ThemeDesc = require('../models/themeDesc.model');
const Skills = require('../models/skills.model');
const BabSaves = require('../models/babSaves.model');
const Proficiencies = require('../models/proficiencies.model');
const Classes = require('../models/classes.model');
const ClassFeatures = require('../models/classFeatures.model');
const ClassAbilities = require('../models/classAbilities.model');

async function getStaticData(model,res) {
    return model.find().lean().then((data) => {
        res.status(200).send(data);
    }).catch((e) => res.status(400).send(e));
}

router.get('/raceDesc', (req,res) => getStaticData(RaceDesc,res));
router.get('/themeDesc', (req,res) => getStaticData(ThemeDesc,res));
router.get('/skills', (req,res) => getStaticData(Skills,res));
router.get('/babSaves', (req,res) => getStaticData(BabSaves,res));
router.get('/proficiencies', (req,res) => getStaticData(Proficiencies,res));
router.get('/classes', (req,res) => getStaticData(Classes,res));
router.get('/classFeatures', (req,res) => getStaticData(ClassFeatures,res));
router.get('/classAbilities', (req,res) => getStaticData(ClassAbilities,res));

module.exports = router;