const router = require('express').Router(); //require express 
let Guest = require('../models/guest.model'); //require the mongoose model

//First route or first endpoint 
//If it's just / then this is a get request
//responds in JSON format
router.route('/').get((req, res) => {
    Guest.find()
        .then(user => res.json(guest))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const guestID = req.body.guestID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;

    const newGuest = new Guest({guestID, firstName, lastName, phone, email});


router.deleteGuest = function(req, res){
    console.log(req.params.guestID)
    Guest.deleteOne({"guestID":req.params.guestID}).exec(function(err, userData){
        if(err){
            res.status(400).json(err)
        }else {
            res.status(200).json(user)
        }
    })
}


module.exports = router;
/////////////////////////////////////

