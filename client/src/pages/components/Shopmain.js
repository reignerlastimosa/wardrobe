import { useState, useEffect } from "react";



import Carousel1 from './images/carousel1.jpg';
import axios from 'axios';



const Shopmain = ({productCategory,product, setProduct,loadProduct}) =>{

    const [productClicked, setProductClicked,] = useState(false);

    const viewProduct = (e) =>{
        e.preventDefault();
        if(productClicked === false){
            setProductClicked(true);
        }
        else{
            setProductClicked(false);
        }
    }

    const handleSelectValue = async(e) =>{
        
        const selectedValue = e.target.value;

        if(selectedValue=='All'){
            loadProduct();
        }
        else{
        const response = await axios.get(`http://localhost:5000/products/${selectedValue}`);
        setProduct(response.data);
        }
        
        
    }
   
  

    
    return (
        
        
        
        <div className="shopmain">
            <div className="tabs">
                <div className="category">
                    <select onChange={handleSelectValue}>
                        <option>All</option>
                   {productCategory.map((product)=>{
                    return(
                        
                        <option>{product.product_category}</option>
                    )
                   })};

                    </select>
                </div>
            </div>
          
            <div className="products">

                <div className={`buy ${productClicked===true?'buy-show' : ''}`}>
                    <div className="buy-image">
                    <img src={Carousel1} width="90%" height="70%"/>
                    </div>

                    <div className="buy-details">
                    <button onClick={viewProduct}className="buy-close-btn"type="button"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg></button>
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


               
                {product.map((item)=>{
                return (

   
                    <div className="product" onClick={viewProduct}>
                        <div className="product-image">  
                        
                        </div>
                        
                        <div className="product-details">
                            <h5>{item.product_name}</h5>
                            <h5>{item.product_price}</h5>
                        </div>
                    </div>
                );

               })}
                
                   
                
                
                
                
            </div>
        </div>
        
       
       
    );
};

export default Shopmain;