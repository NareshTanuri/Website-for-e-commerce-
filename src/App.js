
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar from './components/Navbar';
import  Cart from './pages/cart/Cart';
import  Shop  from './pages/shop/Shop';
import { ShopContextProvider } from './context/ShopContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return <div className='App'>
   <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </ShopContextProvider>
  </div>;
}

export default App;
