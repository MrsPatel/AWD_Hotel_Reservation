const router = require('express').Router();
let Room =require('../models/room.model');

//Get Hotel
router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(400).json('Erorr: ' + err));
});

//This CRUD operation should not be accessible. Only the get option
//Create a room (CREATE)
router.route('/add').post((req, res) => {
    const roomID = req.body.roomID;
    const hotelID = req.body.hotelID;
    const roomType = req.body.roomType;
    const roomRate = req.body.roomRate;
    const maxPeople = req.body.maxPeople;

    const newRoom = new Room({
        roomID,
        hotelID,
        roomType,
        roomRate,
        maxPeople
    });

    newRoom.save()
        .then(() => res.json('Room created!'))
        .catch(err => res.status(400).json(err));
});

//Get Room (READ)
router.route('/:id').get((req, res) => {
    Room.findById(req.params.id)
      .then(room => res.json(room))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Update Room 
router.route('/update/:id').post((req, res) => {
    Room.findById(req.params.id)
        .then(room => {
            room.roomID = req.body.roomID;
            room.hotelID = req.body.hotelID;
            room.roomType = req.body.roomType;
            room.roomType = req.body.roomType;
            room.roomRate = Number(req.body.RoomRate);
            room.maxPeople = Number(req.body.maxPeople);

            room.save()
                .then(() => res.json('Room info updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Room 
router.route('/:id').delete((req, res) => {
    Room.findByIdAndDelete(req.params.id)
        .then(() => res.json ('Room deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
