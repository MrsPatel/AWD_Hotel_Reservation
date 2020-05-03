import React, {
  Component
} from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="">
            <div className="collapse"id="cokntact"></div>
            <h2>Guest Services</h2>
            <table>
              <tr>
                <td><img src="parking.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="pawprints.png" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="gym.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
              </tr>
              <tr>
                <td><center><b><font size="5">Parking</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Pet Amenities</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Fitness Center</font></b></center></td>
              </tr>
              <tr><pre> </pre></tr>
              <tr>
                <td><img src="pool.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="babysit.png" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="wifi.png" alt="Base Room" width="200" height="200" align="left-center"></img></td>
              </tr>
              <tr>
                <td><center><b><font size="5">Pool</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Babysitting</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Wifi</font></b></center></td>
              </tr>
              <tr><pre> </pre></tr>
              <tr>
                <td><img src="meetingRoom.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="breakfast.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td><img src="gameRoom.jfif" alt="Base Room" width="200" height="200" align="left-center"></img></td>
              </tr>
              <tr>
                <td><center><b><font size="5">Meeting Rooms</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Breakfast</font></b></center></td>
                <td>&nbsp;&nbsp;</td>
                <td><center><b><font size="5">Game Room</font></b></center></td>
              </tr>
            </table>
            <tr><pre> </pre></tr>
            <tr><pre> </pre></tr>
        </nav>

      );
    }    
}



