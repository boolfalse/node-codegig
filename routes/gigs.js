
const express = require('express');
const router = express.Router();

const Gig = require('../models/gig');

router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            console.log("Found " + gigs.length + " gigs!");
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
