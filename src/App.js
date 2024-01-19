import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Product } from './components/Product/Products'; 
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import './scss/style.scss';

// Datos del producto
import productData from './assets/mocks/product.json';
import { CartProvider } from './context/cart';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Cart/>
      <Product product={productData.product} />
      <Footer />
    </CartProvider>
  );
}

export default App;
