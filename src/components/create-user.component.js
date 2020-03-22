import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
    //all components that have a constructor should have a super props call
    constructor(props) {
        super(props);
    
        //Binding 'this' to each method so that 'this' refers to the right thing
        this.onChangeUsername = this.onChangeUsername.bind(this);            
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            username : ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
         })
    }
    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username
        }
        //Eventually we'll send to the database
        console.log(user)

        //expecting a json post
        //user is the json 
        //from users.js '/add'
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        //Keep the user on this page
        //set the username to blank
        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}