import Carousel1 from './images/carousel1.jpg';
import Carousel2 from './images/carousel2.jpg';
import Carousel3 from './images/carousel3.jpg';


const Product = () =>{
    return (
        <div className="product">
            <div className="product-image">  
            <img src={Carousel1} height="100%" width="100%"/>
            </div>
            
            <div className="product-details">
                <h5>CAROUSEL 1</h5>
                <h5>P150</h5>
            </div>
        </div>
    );
};

export default Product;