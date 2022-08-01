const Feedbackform = () =>{
    return (
        <div className="feedbackform">
            <form>
                <label id="get-in-touch">GET IN TOUCH</label>
                <h1>We Would Like To Hear From You</h1>
            
                <label>Reference Number:</label>
                <input type="text" placeholder="1231231" disabled/> 
                <select>
                    <option>Very Bad</option>
                    <option>Bad</option>
                    <option>Fair</option>
                    <option>Good</option>
                    <option>Very Good</option>
                </select> 
                <textarea placeholder="Type your feedback here" /> 
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Feedbackform;