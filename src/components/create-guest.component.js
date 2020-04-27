import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGuests extends Component{
    constructor(props){
        super(props);

        this.onChangeGuestID = this.onChangeGuestID.bind(this);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            guestID : '',
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        }
    }

    onChangeGuestID(e){
        this.setState({
            guestID: e.target.value
        })
    }

    onChangefirstName(e){
        this.setState({
            firstName: e.target.value
        })
    }

    onChangelastName(e){
        this.setState({
            lastName: e.target.value
        })
    }

    onChangePhone(e){
        this.setState({
            phone: e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const guest = {
            guestID: this.state.guestID,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phone: this.state.phone,
            email: this.state.email
        }
        console.log(guest);

        //expecting a json post
        //guest is the json
        //from guest.js '/add'
        axios.post('http://localhost:5000/guest/add', guest)
            .then(res => console.log(res.data));
        
        //Take the person to the homepage
        window.location = "/";

        this.render() {
            return (
                <div>
                    <h3>Create guest</h3>
                    <form onSubmit ={this.onSubmit}>
                        <div className ="form-group">
                            <label>First Name:</label>
                            <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangefirstName}>
                                {
                                    this.state.guest.map(function(firstName){
                                        return<option
                                            key={firstName}
                                            value={user}>{user}
                                            </option>
                                    })
                                }
                                </select>
                        </div>
                    </form>
                </div>
            )
        }
;
    }
}
