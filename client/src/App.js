import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from './pages/Home';
import Shop from './pages/Shop';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import { useState } from "react";



function App() {
  
  
 
  return (
    <BrowserRouter>  
    <div className="App">
      
    <Routes>  
      
      <Route exact path ="/" element={<Home />}/> 
      <Route exact path ="/shop" element={<Shop />}/> 
      <Route exact path ="/feedback" element={<Feedback/>}/> 
      <Route exact path ="/contact" element={<Contact/>}/> 
      <Route exact path ="/profile" element={<Profile />}/> 
      <Route exact path ="/cart" element={<Cart/>}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
