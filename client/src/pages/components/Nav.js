import { useEffect, useState } from "react";
import axios from 'axios';

const Nav = ({product,setProduct, searchKey, setSearchKey}) =>{
    

    
    const searchProduct = async (e) =>{
        e.preventDefault();
        try{
          const response = await axios.post('http://localhost:5000/search',{
            searchKey
          })
          setProduct(response.data);
          console.log(response.data);

        }
        catch(error){
          console.log(error);
        }
      }

      const handleSearchSubmit = (e)=>{
        setSearchKey(e.target.value);
      }
    

    const[navScroll, setNavScroll] = useState(false);

    const navScrolled =()=>{
        if(window.scrollY >1){
            setNavScroll(true);
        }
        else{
            setNavScroll(false);
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',navScrolled)
        return()=>{
            window.removeEventListener('scroll',navScrolled)
        }
    },[]);

    const [searchForm,setSearchForm] = useState(false);

    const search = ()=>{
        if(searchForm === false){
            setSearchForm(true);
        }
        else{   
        setSearchForm(false);
            }
    }

  

    return (
        <div className ={`nav ${navScroll===true? 'top':''}`}>
            <h2>Ward<span>Robe</span></h2>
            <ul>
                <li><a href="/"> HOME </a></li>
                <li><a href="/shop"> SHOP</a></li>
                <li><a href="ANNOUNCEMENT"> ANNOUNCEMENT</a></li>
                <li><a href="/feedback">FEEDBACK </a></li>
                <li><a href="/contact"> CONTACT</a></li>

            </ul>

            <div>
                <button className={`${searchForm===true? 'search-hide':''}`}onClick={search}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg></button>
                <form method="POST" onSubmit={searchProduct} className={`searchForm ${searchForm ===true? 'search-show':''}`}>
                    <button type="submit"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg></button>
                    <input type="text" placeholder="Search product" value={searchKey} onChange={handleSearchSubmit}/>
                    
                </form>
                <button><a href="/profile"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                 <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg >  </a></button>
                <button> <a href="/cart"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg></a></button>
            </div>

        </div>
    );
};

export default Nav;