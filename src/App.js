import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Footer from "./components/footer.component";
import Contact from "./components/contact.component";
import Rooms from "./components/rooms.component";
import ErrorPage from "./components/error.component.js";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import Services from "./components/services.component";

function App() {
  return (
    <Router>
      <div className = "container">
        <Navbar />
        <br/>

        <br/>
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/services" component={Services} />
        <Contact/>
        <Footer />
      </div>
    </Router>
  );
}

//test this

export default App;
