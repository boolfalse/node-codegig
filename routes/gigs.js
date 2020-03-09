
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

// Create Gig Page
router.get('/create', (req, res) => {
    res.render('create');
});

// Create Gig
router.post('/create', (req, res) => {
    let {
        title,
        technologies,
        budget,
        description,
        contact_email
    } = req.body;

    let errors = [];

    // Validate Fields
    if (!title) {
        errors.push({ text: "Title is required" });
    }
    if (!technologies) {
        errors.push({ text: "Technologies is required" });
    }
    if (!description) {
        errors.push({ text: "Description is required" });
    }
    if (!contact_email) {
        errors.push({ text: "Contact email is required" });
    }

    // Check for Errors
    if (errors.length > 0) {
        res.render('create', {
            errors,

            title,
            technologies,
            budget,
            description,
            contact_email
        });
    }
    else {

        // Check budget
        budget = budget.toLowerCase().replace(/ /g, '');
        if (budget.length > 0) {
            budget = '$' + budget;
        } else {
            budget = 'Unknown';
        }

        // Make lowercase and remove the space after comma
        technologies = technologies.toLowerCase().replace(/, /g, ',');

        // Insert into table
        Gig.create({
            title,
            technologies,
            budget,
            description,
            contact_email,
        })
            .then(gig => {
                res.redirect('/gigs');
            })
            .catch(err => {
                console.log(err);
            });
    }
});

module.exports = router;
