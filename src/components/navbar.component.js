import React, { Component } from 'react';
//Allows us to link to different routes. 
import { Link } from 'react-router-dom';


//navbar is from Bootstrap
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">AWD Hotel Services</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/createBooking" className="nav-link">Create Booking</Link>
          </li>
          <li className="navbar-item">
          <Link to="/BookingList" className="nav-link">Find My Booking</Link>
          </li>
          <li className="navbar-item">
          <Link to="/rooms" className="nav-link">Rooms</Link>
          </li>
          <li className="navbar-item">
          <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="navbar-item">
          <Link to="/attractions" className="nav-link">Attractions</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">About</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Contact</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}