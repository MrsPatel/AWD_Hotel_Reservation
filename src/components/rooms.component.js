import React, {
  Component
} from 'react';
import Carousel from 'react-bootstrap/Carousel'
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {


  render() {
    return (
        <nav className="">
          
        <div className="collapse"id="contact"></div>
        <h2>Rooms Available</h2>

        <div  class="col-sm-60">
        <hr/>
        <div class="col-xs-3">
          <ul class="nav nav-tabs tabs-left sideways">
            <li class="active"><a href="#base-v" data-toggle="tab" align>Base Room</a>&emsp;&emsp;&emsp;&emsp;&emsp;</li>
            <li><a href="#middle-v" data-toggle="tab">Middle Tier Room</a>&emsp;&emsp;&emsp;&emsp;&emsp;</li>
            <li><a href="#deluxe-v" data-toggle="tab">Deluxe Room</a></li>
          </ul>
        </div>

        <div class="col-xs-9">

          <div class="tab-content">
            <div class="tab-pane active" id="base-v">
                <table>
                <tr><pre> </pre></tr>
                  <tr>
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
                <tr>
                    <td>
                      <Carousel><Carousel.Item>
                      <img className="d-block w-1000" src="base1.jpg" width="700" height="400" alt="First slide"/>   
                      </Carousel.Item>

                      <Carousel.Item>
                        <img className="d-block w-1000" src="base2.jpg"  width="700" height="400" alt="Second slide"/>
                      </Carousel.Item>

                      <Carousel.Item>
                        <img className="d-block w-1000" src="base3.jpg"  width="700" height="400" alt="Third slide"/>
                      </Carousel.Item></Carousel>
                    </td>
                </tr>
                  <tr><pre> </pre></tr>
                  <tr><pre> </pre></tr>
                </table>
              </div>

            <div class="tab-pane" id="middle-v">
              <table>
              <tr><pre> </pre></tr>
              <tr>
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

                <tr>
                 <td>
                    <Carousel><Carousel.Item>
                      <img className="d-block w-1000" src="middle1.jpg" width="700" height="400" alt="First slide"/>   
                      </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-1000" src="middle2.jpg" width="700" height="400" alt="Second slide"/>
                    </Carousel.Item>

                    <Carousel.Item>
                      <img className="d-block w-1000" src="middle3.jpg" width="700" height="400" alt="Third slide"/>
                    </Carousel.Item></Carousel>
                  </td>
                </tr>
              <tr><pre> </pre></tr>
              <tr><pre> </pre></tr>
              </table>
            </div>

            <div class="tab-pane" id="deluxe-v">
              <table>
              <tr><pre> </pre></tr>
              <tr>
                <td>
                    <b><font size="5">Deluxe Room</font></b>
                      <ul>
                        <li>Min: 1 person, max: 5 people</li>
                        <li>Breakfast</li>
                        <li>Pets Allowed</li>
                        <li>Free Parking</li>
                        <li>Kitchen Area</li>
                        <li>Rate Per Day: $350</li>
                      </ul>
                  </td>
                </tr>
                <tr>
                 <td>
                    <Carousel><Carousel.Item>
                    <img className="d-block w-1000" src="deluxe1.jpg" width="700" height="400" alt="First slide"/>   
                     </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-1000" src="deluxe2.jpg" width="700" height="400" alt="Second slide"/>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img className="d-block w-1000" src="deluxe3.jpg" width="700" height="400" alt="Third slide"/>
                  </Carousel.Item></Carousel>
                </td>

                </tr>
                <tr><pre> </pre></tr>
                <tr><pre> </pre></tr>
              </table>
            </div>
            
          </div>
        </div>

        <div class="clearfix"></div>

      </div>
      
           
        </nav>

      );
    }    
}



