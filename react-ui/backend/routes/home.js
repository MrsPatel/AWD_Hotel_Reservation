const router = require('express').Router();
let Home =require('../models/home.model');

//Get Hotel
router.route('/').get((req, res) => {
    Home.find()
        .then(home => res.json(home))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
