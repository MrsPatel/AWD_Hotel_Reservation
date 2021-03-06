const router = require('express').Router();
let Payment = require('../models/payment.model');


router.route('/').get((req, res) => {
  Payment.find()
    .then(payment => res.json(payment))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Get last payment 
router.route('/last').get((req, res) => {
  Payment.find().sort({"_id" : -1}).limit(1)
      .then(booking => res.json(booking))
      .catch(err => res.status(400).json('Erorr: ' + err));
});
/*
 and its's a post request. 
We have all values in the req
*/
router.route('/add').post((req, res) => {
  const roomCharges = Number(req.body.roomCharges);
  const bookingID = String(req.body.bookingID);
  const paid = String(req.body.paid);
  

  const newPayment = new Payment({
    roomCharges,
    bookingID,
    paid
  });

  newPayment.save()
  .then(() => res.json('Payment added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//Get booking by created ID 
router.route('/:id').get((req, res)=> {
  Payment.findById(req.params.id)
  .then(payment => res.json(payment))
  .catch(err => res.status(400).json('Error: ' + err));
})
/*
:id is created by mongoDB 
*/
router.route('/:id').get((req, res) => {
    Payment.findById(req.params.id)
      .then(payment => res.json(payment))
      .catch(err => res.status(400).json('Error: ' + err));
});
  
router.route('/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
      .then(() => res.json('Payment deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

//Update operations
//Finds by ID
//Then updates
//This route needs to receive a JSON object
//Like creating a new but assigning to something that exists
router.route('/update/:id').post((req, res) => {
    Payment.findById(req.params.id)
      .then(payment => {
        payment.roomCharges = req.body.roomCharges;
        payment.bookingID = req.body.bookingID;
        payment.paid = req.body.paid;
  
        payment.save()
          .then(() => res.json('Payment updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
  

module.exports = router;