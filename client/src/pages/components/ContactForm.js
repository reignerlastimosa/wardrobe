import axios from 'axios';
import {useState} from 'react';

const Contactform = () =>{

    const[contact,setContact] = useState({
        fullname:"",
        email:"",
        feedback:"",
    });
 
   

    const contactInputHandler = (e)=>{
        const input = {...contact};
        input[e.target.name] = e.target.value;
        setContact(input); 
        console.log(input);
    }

    const contactSubmitHandler = async(e) =>{
        await axios.post("http://localhost:5000/contact",{
            fullname: contact.fullname,
            email:contact.email,
            feedback:contact.feedback,
        });
    }

    return (
        <div className="contactform">
            <form onSubmit = {contactSubmitHandler}>
                <label id="get-in-touch">CONTACT US</label>
                <h1>GET IN TOUCH</h1>
            
                
                <input onChange = {contactInputHandler} name="fullname" value ={contact.fullname} type="text" placeholder="Please enter your Fullname"/> 
                <input onChange = {contactInputHandler} name="email" value ={contact.email} type="text" placeholder="Please enter your email here:"/>
                
                <textarea onChange = {contactInputHandler} value={contact.feedback} name="feedback" placeholder="Type your feedback here" /> 
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Contactform;