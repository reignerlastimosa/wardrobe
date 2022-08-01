import { useState } from "react";

const Homepage = () =>{

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

            
            <form className={`login ${loggedIn===true?'login-show':'' }`}>
                <div className="login-header">
                    <h2>LOGIN</h2>
                    <button className="login-close" onClick={logIn}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg></button>
                </div>
                <input type="text" placeholder="Enter your username"/>
                
                <input type="password" placeholder="Enter your password"/>
                <button className="login-btn" type="submit">LOGIN</button>
                <p>Not registered? <a href="" onClick={signUp}>Create an account</a></p>
            </form>

            <form className={`signup ${signedUp===true?'signup-show':'' }`}>
                <div className="signup-header">
                    <h2>SIGNUP</h2>
                    <button className="signup-close" onClick={signUp}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg></button>
                </div>
                <input type="text" placeholder="Your fullname"/>
                <input type="text" placeholder="Your username"/>
                <input type="password" placeholder="Your password"/>
                <input type="tel" placeholder="Your mobile number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                <input type="text" placeholder="Your address"/>
                
                <button className="signup-btn" type="submit">SIGN UP</button>
                
            </form>

           

            <h1>Get up to 30% Off New Arrivals</h1>
            <button className="homepage-button" onClick={logIn}>SHOP NOW</button>
        </div>
    );
};

export default Homepage;