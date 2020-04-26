import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Contact from "./components/contact.component";
import Home from "./components/home.component";
import Rooms from "./components/rooms.component";
import ErrorPage from "./components/error.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Services from "./components/services.component";
import Attractions from "./components/attractions.component";


function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>

        <br/>
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
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
