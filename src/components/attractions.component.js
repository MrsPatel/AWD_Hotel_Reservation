import React, {
  Component
} from 'react';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
        <nav className="">
            <div className="collapse"id="contact"></div>
            <h2>Attractions nearby</h2>
            <table>
              <tr>
                <td><img src="Playground.jpg" alt="PlayGround" width="400" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Playground</font></b>
                    <ul>
                      <li>For Family and Kids.</li>
                      <li>Ice Cream Parlour in the Summer</li>
                      <li>Nice sitting area</li>

                    </ul>
                </td>
              </tr>

              <tr><pre> </pre></tr>
              <tr>
                <td><img src="Theater.jpg" alt="Theater" width="400" height="200" align="left-center"></img></td>
                <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Theater</font></b>
                    <ul>
                      <li>For family and kids.</li>
                      <li>In-house Bar.</li>
                      <li>Restaurant</li>
                     
                    </ul>
                  </td>
              </tr>

              <tr><pre> </pre></tr>
              <tr>
              <td><img src="Shopping Mall.jpg" alt="Shopping Mall" width="400" height="200" align="left-center"></img></td>
              <td>&nbsp;&nbsp;</td>
                <td>
                  <b><font size="5">Shopping Mall</font></b>
                    <ul>
                      <li>All your local brands.</li>
                      <li>Food court</li>
                      <li>Bowling</li>
                      <li>Pool</li>
                      <li>Restaurant</li>
                      
                    </ul>
                </td>
              </tr>
              <tr><pre> </pre></tr>
            </table>
        </nav>

      );
    }    
}
