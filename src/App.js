import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import { ShopContextLogic } from './context/ShopContext';


function App() {

  return (
  <div className='App'>
   <ShopContextLogic>
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </Router>
   </ShopContextLogic>

    

  </div>
  );
}

export default App;
