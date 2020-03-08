
const express = require('express');
const router = express.Router();

const Gig = require('../models/gig');

// Read Gig list
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => {
            // console.log("Found " + gigs.length + " gigs!");
            // res.sendStatus(200);
            res.render('gigs', {
                gigs
            });
        })
        .catch(err => {
            console.log(err);
        });
});

// Create Gig
router.get('/create', (req, res) => {
    const data = {
        title: "Looking for a WordPress developer!",
        technologies: "WordPress, PHP, HTML, CSS",
        budget: '$1000',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        contact_email: 'user2@gmail.com'
    };

    Gig.create(data)
        .then(gig => {
            res.redirect('/gigs');
        })
        .catch(err => {
            console.log(err);
        });
});

module.exports = router;
