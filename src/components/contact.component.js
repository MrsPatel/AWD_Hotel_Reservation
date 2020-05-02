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
            url:"/contact", 
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
            <div className="">
                <h3>CONTACT US</h3>
                <p>If you have any questions please contact us below:</p>
                <i class="fa fa-map w3-text-red"></i>Towson University<br></br>
                <i class="fa fa-phone w3-text-red"></i>(555)-555-5555<br></br>
                <i class="fa fa-envelope w3-text-red"></i>ksoni1@students.towson.edu<br></br>
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <p><input type="text" className="form-control" id="name" placeholder="Name"/></p>
                        <p><input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email"/></p>
                        <p><textarea className="form-control" rows="5" id="message" placeholder="Enter your message"></textarea></p>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        )
    }
}

export default Contact; 