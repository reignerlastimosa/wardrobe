import Carousel1 from './images/carousel1.jpg';
import Carousel2 from './images/carousel2.jpg';
import Carousel3 from './images/carousel3.jpg';



const Shopcarousel = () =>{
    return (
        
        
        <div className="shopcarousel">
            <div class="carousel" id="carousel-1"><img src={Carousel1} height="100%" width="100%"/></div>
            <div class="carousel" id="carousel-2"><img src={Carousel2} height="100%" width="100%"/></div>
            <div class="carousel" id="carousel-3"><img src={Carousel3} height="100%" width="100%"/></div>

            <div className="carousel-links">  
            <a href="#carousel-1">  <div> </div> </a> 
            <a href="#carousel-2">  <div> </div> </a> 
            <a href="#carousel-3"> <div> </div>  </a> 
            </div>
        </div>
        
       
       
    );
};

export default Shopcarousel;