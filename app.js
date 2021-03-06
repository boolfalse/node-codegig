
const express = require('express');
const expHand = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const env = require('./env');

const app = express();

// Set Static folder
app.use('/', express.static('public'));

// Express HandleBars
app.engine('handlebars', expHand({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        layout: 'landing' // if you want to use another layout instead of main, we need to have a 2-nd param here as object
    });
});

app.use('/gigs', require('./routes/gigs'));

// Starting the Server
const port  = process.env.PORT || env.APP_PORT;
app.listen(port, function () {
    console.log("Server started on port " + port);
});
