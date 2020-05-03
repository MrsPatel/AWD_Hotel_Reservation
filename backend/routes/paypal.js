const express = require('express');
const paypal = require('paypal-rest-sdk');
var router = express.Router();
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AX8C-G3TmThfMKOwg5wcpSUVA7aW4KHsz_djqIoaxn9dVCG21HesN4fo_xVtwYcYfSITnDLZBIVtmZfL',
    'client_secret': 'ENHHgoHywNvOYdMh5k9vESgLC7uWxNgFIQJy2Foekl9GoD6oHxvAscQCSQKo7bKsMmJ5sCMxWOotPCeI'
  });
router.route('/').post( (req, res) => {
  var payment = "450"
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:5000/success",
        "cancel_url": "http://localhost:5000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Hotel Payment", //add variables 
                "sku": "001",
                "price": payment,
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": payment
        },
        "description": "{% %}"
    }]
};
paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) { throw error; } 
  else {
        for(let i = 0;i < payment.links.length;i++)
        {
          if(payment.links[i].rel === 'approval_url'){ res.redirect(payment.links[i].href); }
        }
       }
});
});
router.route('/success').get((req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;
  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": payment
        }
    }]
  };
  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
});
});
router.route('/cancel').get( (req, res) => res.send('Cancelled'));
module.exports = router;