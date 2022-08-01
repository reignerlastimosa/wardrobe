import Carousel1 from './images/carousel1.jpg';
import Carousel2 from './images/carousel2.jpg';
import Carousel3 from './images/carousel3.jpg';



const Homecarousel = () =>{
    return (
        <div className="new-products">  
        <h1>CHECK OUT OUR NEW PRODUCTS</h1>
        <div className="homecarousel">
            <div class="carousel" id="carousel-1"><img src={Carousel1} height="100%" width="100%"/></div>
            <div class="carousel" id="carousel-2"><img src={Carousel2} height="100%" width="100%"/></div>
            <div class="carousel" id="carousel-3"><img src={Carousel3} height="100%" width="100%"/></div>
        </div>
        
        <div className="carousel-links">  
            <a href="#carousel-1">  O </a> 
            <a href="#carousel-2">  O </a> 
            <a href="#carousel-3"> O  </a> 
        </div>
        </div>
    );
};

export default Homecarousel;