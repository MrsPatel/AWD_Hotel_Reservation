import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="">
            <div className="collapse"id="contact"></div>
            <h2>Rooms Available</h2>
            <table>
              <tr>
                <td><img src="BaseRoom.jpg" alt="Base Room" width="400" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Base Room</font></b>
                    <ul>
                      <li>Min: 1 person, max: 2 people</li>
                      <li>Free Wifi</li>
                      <li>Free Parking</li>
                      <li>Rate Per Day: $150</li>
                    </ul>
                </td>
              </tr>

              <tr><pre> </pre></tr>
              <tr>
                <td><img src="MiddleTier.jpg" alt="Middle Tier Room" width="400" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Middle Tier Room</font></b>
                    <ul>
                      <li>Min: 1 person, max: 4 people</li>
                      <li>Breakfast</li>
                      <li>Free Parking</li>
                      <li>Rate Per Day: $250</li>
                    </ul>
                  </td>
              </tr>

              <tr><pre> </pre></tr>
              <tr>
              <td><img src="DeluxeRoom.jpg" alt="Deluxe Room" width="400" height="200" align="left-center"></img></td>
              <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Deluxe Room</font></b>
                    <ul>
                      <li>Min: 1 person, max: 5 people</li>
                      <li>Breakfast</li>
                      <li>Pets Allowed</li>
                      <li>Free Parking</li>
                      <li>Kithcen Area</li>
                      <li>Rate Per Day: $350</li>
                    </ul>
                </td>
              </tr>
              <tr><pre> </pre></tr>
            </table>
        </nav>

      );
    }    
}



