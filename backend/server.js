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
//Middleware - to parse JSON for sending and receiving
app.use(express.json());

//DB URI to start MongoDB connection 
const uri = process.env.ATLAS_URI; //From environment variable 
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
//.once means once the connection is open it establishes
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//Require files for routes
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Use the files for routes
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Starts the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
