const router = require('express').Router();
let Services =require('../models/services.model');

//Get Hotel
router.route('/').get((req, res) => {
    Services.find()
        .then(services => res.json(services))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
