const router = require('express').Router();
//let Error =require('../models/error.model');

//Get Hotel
router.route('*').get((req, res) => {
    Error.find()
        .then(error => res.json(error))
        .catch(err => res.status(400).json('Error: ' + err));
        console.log("Error 404 hit here")
});

module.exports = router;
