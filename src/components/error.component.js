import React, { Component } from 'react';
import ErrorImage from "../images/errorImage.jpg";
//import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {

  render() {
    return (
          <nav className="">
            <div className="collapse" id="contact"></div>
            <h2>ERROR THIS PAGE DOES NOT EXIST</h2>
            <img src={ErrorImage} width="1200" height="800" alt="404 Error" width></img>
          </nav>
      );
    }    
}



