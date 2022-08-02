import Image from './images/man.jpg';

const Item = ({itemQuantity, setItemQuantity}) =>{

    const addItem = () =>{
        setItemQuantity(itemQuantity + 1);
    }
    const removeItem = ()=>{
        
        if (itemQuantity>0){
            setItemQuantity(itemQuantity - 1);
        }
        else{
            return;
        }
    }

    return (
        <div className="item">
            <div className="item-checkbox">

            
            <input type="checkbox" />
            </div>
           <div className="item-image">  
           
           <img src={Image} height="90%" width="100%"/>
           </div>

           <div className="item-info">
            <h5>Item 1</h5>
            <p>Large, Color Red</p>
           </div>

           <div className="item-price">
            <h5>P200.00</h5>
            <h5 className="dashed">P300.00</h5>
            <h5>-50%</h5>
           </div>

           <div className="item-quantity">
            
            <button onClick={removeItem}>-</button>
            <input type="text" value= {itemQuantity}/>
            <button onClick={addItem}>+</button>
           </div>
        </div>
    );
};

export default Item;