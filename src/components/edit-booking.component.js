import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class EditBooking extends Component {
    constructor(props){
        super(props);

        /*
        //Binding 'this' to each method so that 
        'this' refers to the right thing
        */
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCheckin = this.onChangeCheckin.bind(this);
        this.onChangeCheckOut = this.onChangeCheckout.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        /*
        
        Create everything in state so that wehen you update it gets 
        updated with the new values
        Rooms is an array to select the rooms that are in the database
        */
        this.state = {
            room: '',
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            checkIn: new Date(),
            checkOut: new Date(),
            rooms: []
        }
    }

    /*
    React lifecycle method
    Component did mount will auto call right before anything displays
    on page. 
    When the Create booking component is about to load, right before
    it loads, it's going to run this
    */
    componentDidMount(){
        axios.get('http://localhost:5000/booking/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    room: response.data.room, 
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    phone: response.data.phone,
                    email: response.data.email,
                    checkIn: new Date(response.data.checkIn),
                    checkOut: new Date(response.data.checkOut)
                })
            })
            .catch(function (error){
                console.log(error);
            })
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
    For these 2 we will add in a date to pass in and
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

    onSubmit(e){
        //prevents default HTML submit behavior from taking place
        e.preventDefault();

        const booking = {
            room: this.state.room,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut
        }

        console.log(booking);
        axios.post('http://localhost:5000/booking/update/'+this.props.match.params.id, booking)
            .then (res => console.log(res.data));
        //send user data to backend 
        

        //Take the person back to the home page
        //We need to change to take to the payments page
        window.location = '/';
    }
    render(){
        return (
            <div>
                <h3>Update My Booking</h3>
                <form onSubmit={this.onSubmit}>
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
                        <input 
                            type="text" 
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
                        <input type="submit" value="Edit Booking" className="btn btn-primary" />
                    </div>
                
                </form>
            </div>
        )
    }
}
/*
Edit Booking component will not redirect to payments
We should cause the edit button to send an email using nodemailer on submit
*/