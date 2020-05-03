import React, { Component } from 'react';
import axios from 'axios';
const Payment = props => (
    <tr>
        <td id="charge">${props.payment.roomCharges}</td>
        <td id="booking">{props.payment.bookingID}</td>
        <td>{props.payment.paid}</td>
    </tr>
)
//Need to received the booking ID from the previous page 
export default class PaymentsPage extends Component {
    constructor(props){
        super(props);
        this.state = {payments: []};
    }
    //This will get the last payment entered in DB 
    componentDidMount(){
        axios.get('/payment/last')
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
                <th>Paypal</th>
              </tr>
            </thead>
            <tbody>
              { this.paymentList() }
            </tbody>
          </table>
          <html lang="en">
          <body>
            <h2>Ready to Checkout?</h2> 
            <form action='/paypal' method="POST">
              Payment: <input id="payment" name="pfield" type="text" value = " $450" />
              <input type="submit" value="Buy"/>
            </form>
          </body>
          </html>
        </div>
      )
    }
}
