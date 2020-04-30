var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'nodemailertowson29@gmail.com',
    pass: '****'
  },
  tls:{
    rejectUnauthorized:false
  }  
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});


router.route('/').post((req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var greeting = 'Hello! The following message has been sent from your website!'
  var content = `\n \n name: ${name} \n email: ${email} \n message: ${message} `

  var mailOptions = {
    from: name,
    to: 'ksoni1@students.towson.edu',
    cc: email,
    subject: 'Riverfront Hotel Customer Contact Message',
    text: greeting + content
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;