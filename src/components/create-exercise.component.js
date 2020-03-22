import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercises extends Component {
    //all components that have a constructor should have a super props call
    constructor(props) {
        super(props);

        //Binding 'this' to each method so that 'this' refers to the right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username : '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
            //Users array so that we can get a dropdown
        }
    }

    //React lifecycle method
    //Called right before anything loads on page
    //data is an array 
    //just user.username because that is the only thing we care about
    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                        username: response.data[0].username //first user in the array
                    })
                }
            })
    }

    //to change the state when username is
    /*
    Textbox with username 
    When someone enter user name it calls function 
    sets state e.target.value
    The target is the textbox. 
    The value of username is whatever is in the textbox 


    TODO: Do the same for the other ones 
    */
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    //different due to calendar will be clickable
    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description, 
            duration: this.state.duration, 
            date: this.state.date
        }
        //Eventually we'll send to the database
        console.log(exercise);

        //expecting a json post
        //user is the json 
        //from users.js '/add'
        axios.post('http://localhost:5000/exercises/add', exercise)
            .then(res => console.log(res.data));

        //Take the person back to the homepage
        window.location = "/";
    }

    render() {
        return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <label>Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"> 
                <label>Description: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    />
              </div>
              <div className="form-group">
                <label>Duration (in minutes): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onChangeDuration}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
              </div>
            </form>
        </div>
        )
    }
}