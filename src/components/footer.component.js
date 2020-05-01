import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="ID">
        <div className="collpase">
        </div>
        <footer className="w3-padding-32 w3-black w3-center w3-margin-top">
          <h5>Find Us On</h5>
          <div className="w3-xlarge w3-padding-16" >
            <a href="https://www.facebook.com"  target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-official w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://www.snapchat.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-snapchat w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest-p w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin w3-hover-opacity" style={{"color": "white"}}></i></a>
            &emsp; 
            <a href="https://github.com/MrsPatel/AWD_Hotel_Reservation" target="_blank" rel="noopener noreferrer"><i className="fa fa-github w3-hover-opacity" style={{"color": "white"}}></i></a>
          </div>
          <p>COSC 617 Project</p>
        </footer>
      </nav>
      );
    }    
}








