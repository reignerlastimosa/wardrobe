import Header from './components/Header';
import Nav from './components/Nav';
import Shopcarousel from './components/Shopcarousel';
import Shopmain from './components/Shopmain';
import Footer from './components/Footer';
import "./Shop.css"
import {useState, useEffect} from 'react';
import axios from 'axios';

const Shop = () =>{
    const[searchKey,setSearchKey] =useState('');

   
    const [productCategory, setProductCategory] = useState([]);
    const [product,setProduct] = useState([]);
    
    

    const loadCategory = async ()=>{
        const product_category = await axios.get('http://localhost:5000/product_category');
        setProductCategory(product_category.data);
        console.log(productCategory);
    }

    const loadProduct = async ()=>{
        const response = await axios.get('http://localhost:5000/products');
        
        setProduct(response.data);
        console.log(product);
    }

   

    useEffect(()=>{
        loadCategory();
        loadProduct();
       
    },[]);


   
  
    
    return(
        <div>
            <Header/>
            <Nav searchKey={searchKey} setSearchKey={setSearchKey} product={product} setProduct={setProduct}/>
            <Shopcarousel/>
            <Shopmain product={product} setProduct={setProduct} productCategory={productCategory} loadProduct={loadProduct}/>
            <Footer/>
        </div>
    )

}





export default Shop;