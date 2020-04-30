import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component{
  
    handleSubmit(e){
        //alert("Message Sent."); 
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        axios({
            method: "POST", 
            url:"http://localhost:5000/contact", 
            data: {
                name: name,   
                email: email,  
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            } 
        })
        window.location = '/';
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4">
                <h3>CONTACT US</h3>
                <ul>
                <li><i class="fa fa-road"></i>Towson University</li>
                <li><i class="fa fa-phone"></i>(555)-555-5555</li>
                <li><i class="fa fa-envelope"></i>ksoni1@students.towson.edu</li>
                </ul>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" rows="5" id="message" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Contact; 