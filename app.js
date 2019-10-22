const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


// create our Express app
const app = express();

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));
//build mode
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

module.exports = app;