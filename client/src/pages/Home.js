import Header from './components/Header';
import Nav from './components/Nav';
import Homepage from './components/Homepage';
import Homeflex from './components/Homeflex';
import About from './components/About';
import Homecarousel from './components/Homecarousel';
import Homegrid from './components/Homegrid';
import Footer from './components/Footer';

import "./Home.css"


const Home = () =>{
    return(
        <div>
            <Header/>
            <Nav/>
            <Homepage/>
            <Homeflex/>
            <About/>
            <Homecarousel/>
            <Homegrid/>
            <Footer/>
        </div>
    )

}





export default Home;