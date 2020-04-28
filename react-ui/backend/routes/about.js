const router = require('express').Router();
let About =require('../models/about.model');

//Get Hotel
router.route('/').get((req, res) => {
    About.find()
        .then(about => res.json(about))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;