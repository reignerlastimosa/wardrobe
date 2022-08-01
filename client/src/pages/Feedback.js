import Header from './components/Header';
import Nav from './components/Nav';
import Feedbackpage from './components/Feedbackpage';
import Feedbackform from './components/Feedbackform';
import Footer from './components/Footer';
import "./Feedback.css"



const Feedback = () =>{
    return (
        <div className="feedback">
            <Header/>
            <Nav/>
            <Feedbackpage/>
            <Feedbackform/>
            <Footer/>
        </div>
    );
};

export default Feedback;