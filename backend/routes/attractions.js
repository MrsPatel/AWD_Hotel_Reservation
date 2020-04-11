const router = require('express').Router();
let Attractions =require('../models/attractions.model');

//Get Hotel
router.route('/').get((req, res) => {
    Attractions.find()
        .then(attractions => res.json(attractions))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
