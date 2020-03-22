import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

/*
 Has exercise  component
 functional react component 
 accept props and return jsx, use fuctional component instead of class component
 usually in it's own file but since this is small it's ok 
 make the squiggly line below, refactor it as a button
*/
const Exercise = props => (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0,10)}</td>
      <td>
        <Link to={"/edit/"+props.exercise._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </td>
    </tr>
)

//exercise list component
//implemented as class component
export default class ExerciseList extends Component {
    constructor(props){
        //always start with super props
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises: []};
    }

    //We want all fields, as opposed to username 
    //and put into exercises array
    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
          .then(response => {
            this.setState({ exercises: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    //takes the object id that mongodb assigns to delete it
    deleteExercise(id) {
        //puts id at the end of the url
        axios.delete('http://localhost:5000/exercises/'+id)
            //log that it's been deleted
            .then(response => { console.log(response.data)});
        
        //The below code updates the page with the new table after the entry is deleted
        /*
        When the id does not equal the omne we're deleting, we'll pass it to the
        exercises array. Remove just what we are deleting.  
        the _id comes from the 
        */
        this.setState({
          exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }

    //returns this.exercsies.map (which is every element in the array) 
    /*
    every element in the exercise array it returns a component
    the component is a row on the table

    */
    exerciseList() {
        return this.state.exercises.map(currentexercise => {
          return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
        })
      }


    
    
    //body calls the exercistList() method to return the rows of table 
    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                <tbody>
                    { this.exerciseList() }
                </tbody>
                </table>
        </div>
        )
    }
}