import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>  
    <div className="App">
    <Routes>  
      <Route exact path ="/" element={<Home/>}/> 
      <Route exact path ="/shop" element={<Shop/>}/> 
      <Route exact path ="/feedback" element={<Feedback/>}/> 
      <Route exact path ="/contact" element={<Contact/>}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
