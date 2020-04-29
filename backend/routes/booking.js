const router = require('express').Router();
let Booking =require('../models/booking.model');
//let Payment = require('../models/payment.model');

//Get Bookings
router.route('/').get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Erorr: ' + err));
});
//Get last Booking 
router.route('/last').get((req, res) => {
    Booking.find().sort({"_id" : -1}).limit(1)
        .then(booking => res.json(booking))
        .catch(err => res.status(400).json('Erorr: ' + err));
});


//Create a booking (CREATE)
/*
booking/add and its's a post request. 
We have all values in the req
*/
router.route('/add').post((req, res) => {
    const book_id = req.body.book_id;
    const room = req.body.room;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;
    const checkIn = Date.parse(req.body.checkIn);
    const checkOut = Date.parse(req.body.checkOut); 

    const newBooking = new Booking({
        book_id,
        room,
        firstName, 
        lastName,
        phone,
        email,
        checkIn,
        checkOut,
    });

    newBooking.save()
        .then(() => res.json('Booking created!'))
        .catch(err => res.status(400).json(err));
});
/*
:id is created by mongoDB 

*/
//Get Booking (READ)
//FIND BY ID
router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
      .then(booking => res.json(booking))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Booking by ID
router.route('/:id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params.id)
      .then(() => res.json('Booking deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});
//Update Booking 
//Update operations
//Finds by ID
//Then updates
//This route needs to receive a JSON object
//Like creating a new but assigning to something that exists
router.route('/update/:id').post((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.room = req.body.room;
            booking.firstName=req.body.firstName;
            booking.lastName = req.body.lastName;
            booking.phone = req.body.phone;
            booking.email = req.body.email;
            booking.checkIn = Date.parse(req.body.checkIn);
            booking.checkOut = Date.parse(req.body.checkOut);

            booking.save()
                .then(() => res.json('Booking info updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
