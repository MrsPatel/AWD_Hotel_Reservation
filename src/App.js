import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

//Import components
import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Contact from "./components/contact.component";
import Home from "./components/home.component";
import Rooms from "./components/rooms.component";
import ErrorPage from "./components/error.component.js";
import BookingsList from "./components/bookings-list.component";
import EditBooking from "./components/edit-booking.component"
import CreateBooking from "./components/create-booking.component";
//Not needed, if we need more rooms we can add with postman or
//insomnia using JSON into the Database
//import CreateRoom from "./components/create-room.component";
import Services from "./components/services.component";
import Attractions from "./components/attractions.component";
import About from "./components/about.component";

//div className="Container" makes it fall inside the navbar component from bootstrap 
function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>
        <br/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BookingList" exact component={BookingsList} />
          <Route path="/editBooking/:id" exact component={EditBooking} />
          <Route path="/createBooking" exact component = {CreateBooking}/>
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/services" exact component={Services} />
          <Route path="/attractions" exact component={Attractions} />
          <Route path="/about" exact component={About} />
          <Route exact component={ErrorPage}/>
        </Switch>

        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

//test this

export default App;
