import { useState } from "react";
import axios from 'axios';
const Homepage = () =>{

    const[user,setUser] = useState({
        fullname:"",
        username:"",
        password:"",
        phone:"",
        address:"",
    })

    const handleCreateUser = (e)=>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
        console.log(newUser);
    };

    const createUserSubmit = async()=>{
        const response = await axios.post('http://localhost:5000/create_user',{
            fullname: user.fullname,
            username: user.username,
            password: user.password,
            phone: user.phone,
            address:user.address,
          });
    };

    const[userLoggedIn, setUserLoggedIn] = useState({
        username:"",
        password:""
    });


    const handleLoggedInUser = (e)=>{
        const oldUser = {...userLoggedIn};
        oldUser[e.target.name] = e.target.value;
        setUserLoggedIn(oldUser);
        console.log(userLoggedIn)

    }

    const loggedInUserSubmit = async() =>{
       
       try {
        const response = await axios.post("http://localhost:5000/login",{
            username: userLoggedIn.username,
            password: userLoggedIn.password,

        })
     
       
        
       }
       catch(error){
        console.log(error);
      }
      
    };







    const[loggedIn, setLoggedIn] =useState(false);

    const logIn = (e)=>{
        e.preventDefault();
        if(loggedIn === false){
            setLoggedIn(true);
        }
        else{
            setLoggedIn(false);
        }
    }

    const[signedUp,setSignedUp] = useState(false);

    const signUp = (e)=>{
        e.preventDefault();
        if(signedUp === false){
            setLoggedIn(false);
            setSignedUp(true);
            
        }
        else{
            setSignedUp(false);
        }
    }

    return (
        <div className="homepage">

            
            <form onSubmit = {loggedInUserSubmit} className={`login ${loggedIn===true?'login-show':'' }`}>
                <div className="login-header">
                    <h2>LOGIN</h2>
                    <button className="login-close" onClick={logIn}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg></button>
                </div>
                <input onChange ={handleLoggedInUser} name="username" value={userLoggedIn.username}type="text" placeholder="Enter your username"/>
                
                <input onChange = {handleLoggedInUser} name="password" value={userLoggedIn.password} type="password" placeholder="Enter your password"/>
                <button className="login-btn" type="submit">LOGIN</button>
                <p>Not registered? <a href="" onClick={signUp}>Create an account</a></p>
            </form>

            <form onSubmit ={createUserSubmit} className={`signup ${signedUp===true?'signup-show':'' }`}>
                <div className="signup-header">
                    <h2>SIGNUP</h2>
                    <button className="signup-close" onClick={signUp}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg></button>
                </div>
                <input onChange={handleCreateUser} name="fullname" value={user.fullname} type="text" placeholder="Your fullname"/>
                <input onChange={handleCreateUser} name="username" value={user.username}type="text" placeholder="Your username"/>
                <input onChange={handleCreateUser} name="password" value={user.password}type="password" placeholder="Your password"/>
                <input onChange={handleCreateUser} name="phone" value ={user.phone} type="tel" placeholder="Your mobile number" pattern="[0-9]{11}" required/>
                <input onChange={handleCreateUser} name="address" value={user.address} type="text" placeholder="Your address"/>
                
                <button className="signup-btn" type="submit">SIGN UP</button>
                
            </form>

           

            <h1>Get up to 30% Off New Arrivals</h1>
            <button className="homepage-button" onClick={logIn}>SHOP NOW</button>
        </div>
    );
};

export default Homepage;