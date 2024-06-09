// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';
import ShopContextProvider from './Context/ShopContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ShopContextProvider>
        <App />
    </ShopContextProvider>
);
