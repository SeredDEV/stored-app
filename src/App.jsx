import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingup from './Pages/LoginSingup';
import cat_banner from './assets/banner/banner_cat.svg'
import dog_banner from './assets/banner/banner_dog.svg'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cat" element={<ShopCategory banner={cat_banner} category="cat" />} />
          <Route path="/dog" element={<ShopCategory banner={dog_banner} category="dog" />} />
          <Route path="/product" element={<Product />} >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={< LoginSingup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
