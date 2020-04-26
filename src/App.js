import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Import components
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Contact from "./components/contact.component";
import Home from "./components/home.component";
import Rooms from "./components/rooms.component";
//import ErrorPage from "./components/error.component.js";
import BookingsList from "./components/bookings-list.component";
import EditBooking from "./components/edit-booking.component"
import CreateBooking from "./components/create-booking.component";
//import CreateRoom from "./components/create-room.component";
import Services from "./components/services.component";
import Attractions from "./components/attractions.component";

//div className="Container" makes it fall inside the navbar component from bootstrap 
function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/BookingList" exact component={BookingsList} />
        <Route path="/editBooking/:id" exact component={EditBooking} />
        <Route path="/createBooking" exact component = {CreateBooking}/>
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/services" exact component={Services} />
        <Route path="/attractions" exact component={Attractions} />
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

//test this

export default App;
