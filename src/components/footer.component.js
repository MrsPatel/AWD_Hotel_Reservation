import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="">
        <div className="collpase">
        </div>
        <footer class="w3-padding-32 w3-black w3-center w3-margin-top">
          <h5>Find Us On</h5>
          <div class="w3-xlarge w3-padding-16" >
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            &emsp; 
            <i class="fa fa-instagram w3-hover-opacity"></i>
            &emsp; 
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            &emsp; 
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            &emsp; 
            <i class="fa fa-twitter w3-hover-opacity"></i>
            &emsp; 
            <i class="fa fa-linkedin w3-hover-opacity"></i>
          </div>
          <p>COSC 617 Project</p>
        </footer>
      </nav>
      );
    }    
}



