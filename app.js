
const express = require('express');
const expHand = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const env = require('./env');

const app = express();

app.get('/', (req, res, next) => {
    res.send('Index');
});

app.use('/gigs', require('./routes/gigs'));

// Starting the Server
const port  = process.env.PORT || env.APP_PORT;
app.listen(port, function () {
    console.log("Server started on port " + port);
});
