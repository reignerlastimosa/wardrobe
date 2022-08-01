const Contactform = () =>{
    return (
        <div className="contactform">
            <form>
                <label id="get-in-touch">CONTACT US</label>
                <h1>GET IN TOUCH</h1>
            
                
                <input type="text" placeholder="Please enter your Fullname"/> 
                <input type="text" placeholder="Please enter your email here:"/>
                
                <textarea placeholder="Type your feedback here" /> 
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Contactform;