const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//So that we can have environment variables in .env file
require('dotenv').config(); 

//To Create Express Server
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
//Middleware - to parse JSON since we're sending and receiving
app.use(express.json());

//DB URI to start MongoDB connection 
const uri = process.env.ATLAS_URI; //From environment variable 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
//.once means once the connection is open it establishes
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Require files for routes
const homeRouter = require('./routes/home');
const bookingRouter = require('./routes/booking');
const roomRouter = require('./routes/room');
const guestRouter = require('./routes/guest');
const hotelRouter = require('./routes/hotel'); 
const servicesRouter = require('./routes/services'); 
const attractionsRouter = require('./routes/attractions'); 
const errorRouter = require('./routes/error');


//Use the files for routes
app.use('/home', homeRouter);
app.use('/booking', bookingRouter);
app.use('/room', roomRouter);
app.use('/guest', guestRouter);
app.use('/hotel', hotelRouter);
app.use('/services', servicesRouter);
app.use('/attractions', attractionsRouter);
app.get('*', errorRouter);

//Starts the server port 5000
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
