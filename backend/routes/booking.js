const router = require('express').Router();
let Booking =require('../models/booking.model');

//Get Booking
router.route('/').get((req, res) => {
    Booking.find()
        .then(bookings => res.json(bookings))
        .catch(err => res.status(400).json('Erorr: ' + err));
});

//Create a booking (CREATE)
router.route('/add').post((req, res) => {
    const bookingID = req.body.bookingID;
    const guestID = req.body.guestID;
    const roomID = req.body.roomID;
    const checkIn =Date.parse(req.body.checkIn);
    const checkOut = Date.parse(req.body.checkOut);
    const persons = Number(req.body.persons);

    const newBooking = new Booking({
        bookingID,
        guestID,
        roomID,
        checkIn,
        checkOut,
        persons
    });

    newBooking.save()
        .then(() => res.json('Booking created!'))
        .catch(err => res.status(400).json(err));
});

//Get Booking (READ)
router.route('/:id').get((req, res) => {
    Booking.findById(req.params.id)
      .then(booking => res.json(booking))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Update Booking 
router.route('/update/:id').post((req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.bookingID = req.body.bookingID;
            booking.guestID = req.body.guestID;
            booking.roomID = req.body.roomID;
            booking.checkIn = req.body.checkIn;
            booking.checkOut = req.body.checkOut;
            booking.persons = req.body.persons;

            booking.save()
                .then(() => res.json('Booking info updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Room 
router.route('/:id').delete((req, res) => {
    Booking.findByIdAndDelete(req.params.id)
        .then(() => res.json ('Booking deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
