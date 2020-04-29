import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

/*
     <td>
        <Link to={"/editBooking/"+props.payment._id}>Edit</Link> | <a href="/" onClick={() => { props.deleteBooking(props.booking._id) }}>Cancel</a>
        </td>
*/
const Payment = props => (
    <tr>
        <td>${props.payment.roomCharges}</td>
        <td>{props.payment.bookingID}</td>
        <td>{props.payment.paid}</td>
   
    </tr>
)

//Need to received the booking ID from the previous page 
export default class PaymentsPage extends Component {
    constructor(props){
        super(props);

        //this.onClickPayPal = this.onClickPayPal.bind(this);

        this.state = {payments: []};
    }
    //This will get the last payment entered in DB 
    componentDidMount(){
        axios.get('http://localhost:5000/payment/last')
            .then(response => {
                this.setState({payments: response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    

    paymentList(){
        return this.state.payments.map(currentPayment=>{
            return <Payment payment = {
                currentPayment
            }
            key = {
                currentPayment._id
            }
            />;
        })
    }






    render(){
        return (
          <div>
          <h3>Your Booking Payment</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Total</th>
                <th>Booking ID</th>
                <th>Payment Status</th>
              </tr>
            </thead>
            <tbody>
              { this.paymentList() }
            </tbody>
          </table>
        </div>
      )
    }
}