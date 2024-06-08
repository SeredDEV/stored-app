import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import men_banner from './assets/banner/banner_mens.png'
import women_banner from './assets/banner/banner_women.png'

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cat" element={<ShopCategory banner={men_banner} category="cat" />} />
          <Route path="/dog" element={<ShopCategory banner={women_banner} category="dog" />} />
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
