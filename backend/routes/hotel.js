const router = require('express').Router();
let Hotel =require('../models/hotel.model');

//Get Hotel
router.route('/').get((req, res) => {
    Hotel.find()
        .then(hotels => res.json(hotels))
        .catch(err => res.status(400).json('Error: ' + err));
});

//This CRUD operation should not be accessible. Only the get option
//Create a Hotel (CREATE)
router.route('/add').post((req, res) => {
    const hotelID = req.body.hotelID;
    const streetAddress = req.body.streetAddress;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const hotelPhone = req.body.hotelPhone;
    const hotelEmail = req.body.hotelEmail; 

    const newHotel = new Hotel({
        hotelID,
        streetAddress,
        city,
        state,
        zip,
        hotelPhone,
        hotelEmail
    });

    newHotel.save()
        .then(() => res.json('Hotel created!'))
        .catch(err => res.status(400).json(err));
});

//Get Hotel (READ)
router.route('/:id').get((req, res) => {
    Hotel.findById(req.params.id)
      .then(hotel => res.json(hotel))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Update Hotel 
router.route('/update/:id').post((req, res) => {
    Hotel.findById(req.params.id)
        .then(hotel => {
            hotel.hotelID = req.body.hotelID;
            hotel.streetAddress = req.body.streetAddress;
            hotel.city = req.body.city;
            hotel.state = req.body.state;
            hotel.zip = req.body.zip;
            hotel.hotelPhone = req.body.hotelPhone;
            hotel.hotelEmail = req.body.hotelEmail;
            
            hotel.save()
                .then(() => res.json('Hotel info updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Hotel 
router.route('/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
        .then(() => res.json ('Hotel deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
