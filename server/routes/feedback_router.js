const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');


router.post('/', (req, res) => {
    let feedbackObject = req.body;
    console.log('Adding feedback', feedbackObject);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedbackObject.feeling, feedbackObject.understanding, feedbackObject.supported, feedbackObject.comments])
    .then( (result) => {
        res.sendStatus(201);
    }).catch( error => {
        console.log('error adding feedback', error);
        res.sendStatus(500);
    })
});

// `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
//     VALUES ($1, $2, $3, $4);`;

module.exports = router;