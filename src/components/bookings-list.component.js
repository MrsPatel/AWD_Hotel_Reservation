import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


/*
Link below is from react router dom 
*/
const Booking = props => (
    <tr>
        <td>{props.booking.room}</td>
        <td>{props.booking.firstName}</td>
        <td>{props.booking.lastName}</td>
        <td>{props.booking.phone}</td>
        <td>{props.booking.email}</td>
        <td>{props.booking.checkIn.substring(0,10)}</td>
        <td>{props.booking.checkOut.substring(0,10)}</td>
        <td>
        <Link to={"/editBooking/"+props.booking._id}>Edit</Link> | <a href="/" onClick={() => { props.deleteBooking(props.booking._id) }}>Cancel</a>
        </td>
    </tr>
)


export default class BookingsList extends Component {
    constructor (props){
        super(props);

        this.deleteBooking = this.deleteBooking.bind(this);

        this.state = {bookings: []};
    }

    //This will get all the bookings from here 
    componentDidMount(){
        axios.get('http://localhost:5000/booking/')
            .then(response => {
                this.setState({bookings: response.data})
            })
            .catch((error)=> {
                console.log(error);
            })
    }
    
    deleteBooking(id){
        axios.delete('http://localhost:5000/booking/'+id)
            //log that it's been deleted
            .then(response => {console.log(response.data)});

        //Statee filters to show the one that isn't your booking     

    //The below code updates the page with the new table after the entry is deleted        
    /*
     When the id does not equal the omne we're deleting, we'll pass it to theexercises array. Remove just what we are deleting.  
     the _id comes from the mongoDb
    */
        this.setState({
            bookings: this.state.bookings.filter(el => el._id !== id)
        })
    }

    boookingList(){
        return this.state.bookings.map(currentbooking =>{
            return <Booking booking = {
                currentbooking
            }
            deleteBooking = {
                this.deleteBooking
            }
            key = {
                currentbooking._id
            }
            />;
        })
    }
  render(){
      return (
        <div>
        <h3>Current Bookings</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Room</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>E-Mail</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.boookingList() }
          </tbody>
        </table>
      </div>
    )
  }
}