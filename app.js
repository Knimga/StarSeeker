const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const users = require('./routes/users');
const gamedata = require('./routes/gamedata');

const app = express();
const port = process.env.PORT || 3000;

const config = process.env.HEROKU_MONGO ? JSON.parse(process.env.HEROKU_MONGO) : require('./config/db');

mongoose.connect(config.meanDb,{useNewUrlParser: true, useUnifiedTopology: true,});
mongoose.connection.on('connected', () => {console.log(`connected to mongo db '${config.dbName}'!`)});
mongoose.connection.on('error', (err) => {console.log(`db error: ${err}`)});

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/gamedata', gamedata);

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('Invalid endpoint');
}); 

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});