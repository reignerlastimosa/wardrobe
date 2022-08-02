import { useState } from "react";


import Product from './Product';
import Carousel1 from './images/carousel1.jpg';
const Shopmain = () =>{

    const [productClicked, setProductClicked] = useState(false);

    const viewProduct = (e) =>{
        e.preventDefault();
        if(productClicked === false){
            setProductClicked(true);
        }
        else{
            setProductClicked(false);
        }
    }

    
    return (
        
        
        
        <div className="shopmain">
            <div className="tabs">
                <div className="category">
                    <select>
                        <option>Shoes</option>
                        <option>Dress</option>
                        <option>Watch</option>
                        <option>Sunglasses</option>
                    </select>
                </div>
            </div>

            <div className="products">
                <div className={`buy ${productClicked===true?'buy-show' : ''}`}>
                    <div className="buy-image">
                    <img src={Carousel1} width="90%" height="70%"/>
                    </div>

                    <div className="buy-details">

                    <form>
                    <div>  
                    <h2>Item 1</h2>
                    <h2>P200.55</h2>
                    <label>P300.55  </label>
                    
                    <label>-20%</label>
                    </div> 

                    <div>  
                    <label>Color Family</label>
                    <input type="radio" name="a"/>
                    <input type="radio" name="a"/>
                    </div>

                    <div>  
                    <label>Size</label>
                    <input type="radio" name="1"/>
                    
                    <input type="radio" name="1"/>
                    <input type="radio" name="1"/>
                    </div>

                    <div className="buy-quantity">  
                    <label>Quantity</label>
                    <button type="button">-</button>
                    <input type="text"/>

                    <button type="button">+</button>
                    </div>

                    <input type="submit" value="Add to Cart"/>
                    </form>
                    </div>
                </div>

                <Product onClick={viewProduct}/>
                <Product onClick={viewProduct}/>
                <Product onClick={viewProduct}/>
                <Product onClick={viewProduct}/>
                <Product onClick={viewProduct}/>
                
            </div>
        </div>
        
       
       
    );
};

export default Shopmain;