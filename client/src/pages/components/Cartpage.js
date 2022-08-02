import { useState } from 'react';
import Items from './Items';
import Order from './Order';



const Cartpage = () =>{

    const[itemQuantity, setItemQuantity] = useState(1);

   
    return (
        <div className="cartpage">
            <Items itemQuantity = {itemQuantity} setItemQuantity={setItemQuantity}/>
            <Order/>
            
        </div>
    );
};

export default Cartpage;