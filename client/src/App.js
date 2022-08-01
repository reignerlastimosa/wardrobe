import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>  
    <div className="App">
    <Routes>  
      <Route exact path ="/" element={<Home/>}/> 
      <Route exact path ="/shop" element={<Shop/>}/> 
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
