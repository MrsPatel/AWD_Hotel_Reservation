const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());
//AWD2020_MoNGo_Proj

//DB Credentials for the MongoAtlas DB
//DB User: testUser
//DB Pass: userPass1
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//require the files for the routes
const guestRouter = require('./routes/guest');
const hotelRouter = require('./routes/hotel');
const roomRouter = require('./routes/room');
const bookingRouter = require('./routes/booking');

//use the fileswill load everything in this router
app.use('/hotel', hotelRouter);
app.use('/room', roomRouter);
app.use('booking', bookingRouter);


app.listen(port, () => {
    console.log(`Server is running on: ${port}`);
});
