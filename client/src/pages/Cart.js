import Header from './components/Header';
import Nav from './components/Nav';
import Cartpage from './components/Cartpage';
import Footer from './components/Footer';
import './Cart.css';

const Cart = () =>{
    return (
        <div className="cart">
            <Header/>
            <Nav/>
            <Cartpage/>
            <Footer/>
        </div>
    );
};

export default Cart;