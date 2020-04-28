const router = require('express').Router();
//requires the mongoose model
let Room = require('../models/room.model');

//First end point that handles get request for users 
//so for this one below 
//localhost:5000/users/
//users.find is a mongoose method which returns a promise
// in json format
//res.json means we're returning something in JSON format (users)

//This is the first route
///users/

//find method returns a promise in JSON format 
//then returns all the users rs.json means return in JSON format and return users
//        .then(users => res.json(users))
router.route('/').get((req, res) => {
  Room.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

//For HTPP post requests
//new username is part of the request body
router.route('/add').post((req, res) => {
  const room = req.body.room;

  const newRoom = new Room({room});

  newRoom.save()
    .then(() => res.json('Room added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;