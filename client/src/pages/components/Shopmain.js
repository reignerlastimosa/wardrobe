import Product from './Product';

const Shopmain = () =>{
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
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                
            </div>
        </div>
        
       
       
    );
};

export default Shopmain;