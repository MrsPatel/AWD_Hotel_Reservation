# AWD_Hotel_Reservation
The project is for a COSC 617 project Hotel Reservation System. The goal of this project is to provide an online hotel reservation service to customers. The website will consist of an option for the user to select the check-in/check-out date, how many guests will be staying, as well as a zipcode as to where they are trying to book the hotel. Once all this information has been entered, the website will display options based on the availability, pricing, and hotel rating?? The customers will be able to easily select which hotel fits their needs. Once a selection is made, the customers can view details about the hotels as well as make a selection on the type of room they are interested in staying in based on the details provided on that specific room (max occupancy, outside view, price, images). Once the decision has been made, customers can easily make reservations as well as cancel an existing reservation. Once the reservation has been selected, they will have the option to make a payment/advance payment through PayPal.Reminders will be sent as their check-in date gets closer. Each time a reservation has been made, the room status will be updated in the hotels’ database so multiple parties do not book the same room.

## Getting Started
Download locally either by cloning/pulling or copying from here
```text
  git pull https://github.com/MrsPatel/AWD_Hotel_Reservation.git
```
It will place into a directory called AWD_Hotel_Reservation
### Prerequisites
* Node 
* npm
Check that you have these installed: 
```text
  node -v
  npm -v
```
Request to have your IP address to the MongoDB adming to whitelist for MongoDB Atlas. You can get your IP address from going to google.com and typing what is my ip address? 
```text 
  npm install 
```
The command above automatically installs all of the required NPM packages necessary for this application to run. 
## Running the app locally
Instructions for deploying the app in your environment.  
VS Code is recommended as the tool to use for this.  
### Kick off nodemon
```text
  cd awd-hotel-reservation
  cd backend
  nodemon server
```
This kicks of node on port 5000. You can see your front end but it will not connect to your back end. 
nodemon package automatically restarts the node application when file changes in the directory are detected. 
Open your browser http://localhost:5000.
### Kick off React
Open a new terminal window. And run npm start. This will boot the react application on port 3000.
npm will connect your front end to your backend. 
```text
  npm start
```
This will automatically kick off your browser http://localhost:3000.
If you face scripting error, where it talks about something related to permissions required to load scripts. 
Go to windows menu, search for "PowerShell", run it as administrator and then run this command:
Set-ExecutionPolicy RemoteSigned 

It will ask you Y/N, please type the letter Y and then enter. Close the powershell and run the aforementioned commands again!

### MongoDB 
We are using MongoDB Atlas which is basically having MongoDB in the cloud so that we are all working with the same database. 

### Other Tools
* Bootstrap
* W3.css

## Authors
* Benson Liberman
* Komal Soni
* Muhammad Khan
* Shreya Patel
* Sonny Rivera-Ruiz

## React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
