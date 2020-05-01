import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateBooking extends Component {
    constructor(props){
        super(props);

        /*
        //Binding 'this' to each method so that 
        'this' refers to the right thing
        */
        this.onChangeHotel = this.onChangeHotel.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCheckin = this.onChangeCheckin.bind(this);
        this.onChangeCheckOut = this.onChangeCheckout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
 
        /*
        Create everything in state so that wehen you update
        it gets updated with the new values
        Rooms is an array to select the rooms that are in the database
        */
        this.state = {
            hotel: '',
            room: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            checkIn: new Date(),
            checkOut: new Date(),
            hotels: [],
            rooms: [],
            roomCharges: 0
        }
    }

    /*
    React lifecycle method
    Component did mount will auto call right before anything displays
    on page. 
    When the Create booking component is about to load, right before
    it loads, it's going to run this to get the room table 
    */
    componentDidMount(){
        axios.get('http://localhost:5000/hotel/')
        .then(response => {
            if (response.data.length > 0){
                this.setState({
                    hotels: response.data.map(hotel => hotel.hotel),
                    hotel: response.data[0].hotel
                })
            }
        })
        .catch ((error) => {
            console.log(error);
        })
        //axios.get('https://guarded-tundra-05442.herokuapp.com/room/')
        axios.get('http://localhost:5000/room/')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        rooms: response.data.map(room => room.room),
                        room: response.data[0].room
                    })
                }
            })
            .catch ((error) => {
                console.log(error);
            })
    }

    //METHOD FOR WHEN ROOM SELECTION CHANGES
    //WHEN ROOM CHANFGES WE WILL SET THE STATE
    //use react setState method 
    //Whenever room is changed it will set the state. 
    //The targe is the textbox, value will be the value of that textbox
    //This is just fot the room element within the staee
    onChangeHotel(e){
        this.setState({
            hotel: e.target.value
        })
    }

    onChangeRoom(e){
        this.setState({
            room: e.target.value
        })
    }

    onChangeFirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }
    onChangeLastName(e){
        this.setState({
            lastName: e.target.value
        })
    }

    onChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    /*
    For these 2 we will add in a date to pass in ang
    get the value from the date 
    Calendar will be clickable 
    */
    onChangeCheckin(date){
        this.setState({
            checkIn: date
        })
    }

    onChangeCheckout(date){
        this.setState({
            checkOut: date
        })
    }

    onChangeBookingId(e){
        this.setState({
            bookingID: e.target.value
        })
    }


    onSubmit(e){
        //prevents default HTML submit behavior from taking place
        e.preventDefault();
        var bookingID = 458950 + Math.floor((Math.random()*9000)+1);
        const booking = {
            hotel: this.state.hotel,
            book_id: bookingID,
            room: this.state.room,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut
        }
        console.log(booking);

        //Get values for the payment calculation 
        var roomRate =0.0;
        var roomSelection = this.state.room;
        if (roomSelection === 'Base - $150 per night'){
            roomRate = 150.00;
        } else if (roomSelection === 'Middle Tier - $250 per night'){
            roomRate = 250.00;
        } else{
            roomRate = 350.00
        }
        //This needs to be calculated before any posts
        var entryDate = this.state.checkIn;
        var exitDate = this.state.checkOut;
        var totalStay = Math.floor((Date.UTC(exitDate.getFullYear(), exitDate.getMonth(), exitDate.getDate()) - Date.UTC(entryDate.getFullYear(), entryDate.getMonth(), entryDate.getDate()) ) /(1000 * 60 * 60 * 24));
        var paymentCalc = totalStay * roomRate;

        //Send booking to backend
        axios.post('http://localhost:5000/booking/add', booking)
            .then (res => console.log(res.data));

        //get payment to get the booking id 
        axios.get('http://localhost:5000/booking/last')
            .then(response => {
                if (response.data.length > 0){
                    this.setState({
                        bookingIDState: response.data._id.toString()
                    })
                }
            })
            .catch ((error) => {
                console.log(error);
            })

        //Update the booking id 

        //send the payment to MongoDB
        //HARDCODING THESE VALUES IN THERE WORKS 
        //var cost = 1500;
        //paycalc is not working currenlly so hardcoded
        //booking ID is not working either. These only work with hardcoded values. 
        const payment = {
            roomCharges: paymentCalc,
            bookingID: bookingID,
            paid: "Pending"
        }
        console.log(payment);
        
        axios.post('http://localhost:5000/payment/add', payment)
            .then (res => console.log(res.data));
        
        //Take person to the payments page
        window.location = '/payment';
    }
    render(){
        return (
            <div>
                <h3>Create New Booking</h3>
                <form onSubmit={this.onSubmit}>
                <div className = "form-group">
                        <label>Hotel: </label>
                        <select ref="hotelInput"
                            required
                            className = "form-control"
                            value = {this.state.hotel}
                            onChange={this.onChangeHotel}>
                            {
                                this.state.hotels.map(function(hotel){
                                    return <option
                                        key={hotel}
                                        value={hotel}>{hotel}
                                        </option>
                                })
                            }
                        </select>
                </div>
                    <div className = "form-group">
                        <label>Room: </label>
                        <select ref="roomInput"
                            required
                            className = "form-control"
                            value = {this.state.room}
                            onChange={this.onChangeRoom}>
                            {
                                this.state.rooms.map(function(room){
                                    return <option
                                        key={room}
                                        value={room}>{room}
                                        </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>First Name: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.firstName}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input 
                            type="text" 
                            required
                            className="form-control"
                            value={this.state.lastName}
                            onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        &nbsp;
                        <small>(Format: 123-456-7890)</small>
                        <input 
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                            type="email" 
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Check In Date: </label>
                        <div>
                            <DatePicker
                                selected = {this.state.checkIn}
                                onChange = {this.onChangeCheckin}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Check Out Date: </label>
                        <div>
                            <DatePicker
                                selected = {this.state.checkOut}
                                onChange = {this.onChangeCheckOut}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Booking" className="btn btn-primary" />
                    </div>
                
                </form>
                <p></p>
            </div>
        )
    }
}