import Header from './components/Header';
import Nav from './components/Nav';
import Contactpage from './components/Contactpage';
import Contactform from './components/ContactForm';
import Footer from './components/Footer';
import "./Contact.css"



const Feedback = () =>{
    return (
        <div className="feedback">
            <Header/>
            <Nav/>
            <Contactpage/>
            <Contactform/>
            <Footer/>
        </div>
    );
};

export default Feedback;