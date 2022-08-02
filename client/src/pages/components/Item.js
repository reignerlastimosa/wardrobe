import Image from './images/man.jpg';

const Item = () =>{
    return (
        <div className="item">
            <input type="check"/>
           <div className="item-image">  
           <img src={Image} height="100%" width="100%"/>
           </div>

           <div className="item-info">
            <h3>Item 1</h3>
            <h5>Large, Color Red</h5>
           </div>

           <div className="item-price">
            <h2>P200.00</h2>
            <h2>P300.00</h2>
            <h2>-50%</h2>
           </div>

           <div className="item-quantity">
            <p>Quantity</p>
            <button>-</button>
            <p>1</p>
            <button>+</button>
           </div>
        </div>
    );
};

export default Item;