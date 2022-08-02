import Item from './Item';


const Items = ({itemQuantity, setItemQuantity}) =>{
    return (
        <div className="items">
            <Item itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}/>
            <Item itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}/>
            <Item itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}/>
            <Item itemQuantity={itemQuantity} setItemQuantity={setItemQuantity}/>
           
        </div>
    );
};

export default Items;