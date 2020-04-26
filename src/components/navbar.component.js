import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">AWD Hotel Services</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create Guest</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Booking</Link>
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
/*
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">AWD Hotel Services</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Booking</Link>
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
*/