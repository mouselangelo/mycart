import React, {  createContext, useState } from 'react';
import './App.css';
import Products from './Products';
import ShoppingCart from "./ShoppingCart"

export const ShoppingCartContext = createContext();

function App() {
  const [itemsInCart, updateCart] = useState([])
  
  return (
    <ShoppingCartContext.Provider value={{itemsInCart, updateCart}}>
    <div className="App">
      <Products />
      <ShoppingCart />
    </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
