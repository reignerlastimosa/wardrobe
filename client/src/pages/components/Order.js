const Order = () =>{
    return (
        <div className="order">
           <div className="order-location">
            <p>Location</p>
            <p>Blk 43 L7 Caloocan City</p>
           </div>
           <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="subtotal">  
            <div className="subtotal-text">
                 <p>Subtotal</p>
                <p>Shipping Fee</p>
                <p>Total</p>
            </div>

            <div className="subtotal-value">
                <p>P513.00</p>
                <p>P60.00</p>
                <h3>P573.00</h3>
            </div>
            </div>
            
            <div className="checkout">
            <button className="checkout-btn">PROCEED TO CHECKOUT</button>
            </div>
           </div>
          
           
        </div>
    );
};

export default Order;