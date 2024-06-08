import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cat" element={<ShopCategory category="cat" />} />
          <Route path="/dog" element={<ShopCategory category="dog" />} />
          <Route path="/product" element={<Product />} />
          < Route path=":productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={< LoginSingup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
