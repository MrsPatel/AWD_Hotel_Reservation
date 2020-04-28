import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="">
            <div className="collapse"id="contact"></div>
            <h2>Contact Us</h2>
            <p>If you have any questions please contact us below:</p>
            <i className="fa fa-map-marker w3-text-red"></i>Baltimore, MD<br></br>
            <i className="fa fa-phone w3-text-red"></i> Phone: +(123)456-7890)<br></br>
            <i className="fa fa-envelope w3-text-red"> </i> Email: sriver7@students.towson.edu<br></br>
            <form action="" target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required name="Name"></input></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="email" placeholder="Email" required name ="Email"></input></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message" required name="Message"></input></p>
                <p><button className="w3-button w3-black w3-padding-large" type="submit">SEND MESSAGE</button></p>
            </form>
        </nav>

      );
    }    
}



