const Feedbackform = () =>{
    const[feedbackState,setFeedbackState] = useState({
        feedback_auto:"",
        feedback:"",
    });
 
   

    const feedbackInputHandler = (e)=>{
        const feedbackInput = {...feedback};
        feedbackInput[e.target.name] = e.target.value;
        setFeedbackState(feedbackInput); 
        console.log(feedbackInput);
    }

    const feedbackSubmitHandler = async(e) =>{
        await axios.post("http://localhost:5000/feedback",{
            feedback_auto: feedbackState.feedback_auto,
            feedback:feedbackState.feedback,

        });
    }

    return (
        <div className="feedbackform">
            <form onSubmit={feedbackSubmitHandler}>
                <label id="get-in-touch">GET IN TOUCH</label>
                <h1>We Would Like To Hear From You</h1>
            
                <label>Reference Number:</label>
                <input type="text" placeholder="1231231" disabled/> 
                <select name="" onChange={feedbackInputHandler}>
                    <option>Very Bad</option>
                    <option>Bad</option>
                    <option>Fair</option>
                    <option>Good</option>
                    <option>Very Good</option>
                </select> 
                <textarea onChange={feedbackInputHandler} placeholder="Type your feedback here" /> 
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Feedbackform;