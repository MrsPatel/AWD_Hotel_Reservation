const router = require('express').Router();
let Guest =require('../models/guest.model');

router.route('/').get((req, res) => {
    Guest.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Erorr: ' + err));
});

//Create a guest (CREATE)
router.route('/add').post((req, res) => {
    const guestID = req.body.guestID;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;

    const newGeust = new Guest({
        guestID,
        firstName,
        lastName,
        phone,
        email
    });

    newGeust.save()
        .then(() => res.json('Guest created!'))
        .catch(err => res.status(400).json('Error: ' = err));
});

//Get Guest (READ)
router.route('/:id').get((req, res) => {
    Guest.findById(req.params.id)
      .then(guest => res.json(guest))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Guest.findById(req.params.id)
        .then(guest => {
            guest.username = req.body.guestID;
            guest.firstName = req.body.firstName;
            guest.lastName = req.body.lastName;
            guest.phone = req.body.phone;
            guest.email = req.body.email;

            guest.save()
                .then(() => res.json('Guest info updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Guest 
router.route('/:id').delete((req, res) => {
    Guest.findByIdAndDelete(req.params.id)
        .then(() => res.json ('Guest deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
