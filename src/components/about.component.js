
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
  
        <nav className="">
            <div className="collapse"id="contact"></div>
            <table>
              <tr>
                <td><img src="bmore.jpg" alt="Bmore" width="600" height="300"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td>
                    <h2>About Riverfront Hotel</h2>
                        <p>
                            Set in the Inner Harbor Neighborhood, this Riverfront Hotel is a 1-minute walk from the metro station, a 5-minute walk from the National Aquarium, 
                            and a 10-minute walk from the Baltimore Convention Center.
                        </p>
                        <p>
                            The classy rooms have pillow-top mattresses and harbor views which come with Wi-Fi, flat-screen TVs, plus sitting areas and work desks.
                            Upgraded rooms add pull-out sofas as well as a mini kitchen for your convenience.
                        </p>
                        <p>
                            Breakfast buffet is complimentary. There's also a casual rooftop bar serving drinks and light snacks.
                        </p>
                </td>
              </tr>
              </table>
              <tr><pre> </pre></tr>
              <tr><pre> </pre></tr>
        </nav>

      );
    }    
}

