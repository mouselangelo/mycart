import React, {  createContext, useState } from 'react';
import './App.css';
import Products from './Products';
import ShoppingCart from "./ShoppingCart"

export const ShoppingCartContext = createContext();

function App() {
  const [itemsInCart, updateCart] = useState([{id: "1", name: "Awesome thing", price: 9.99}])
  
  console.log("render", itemsInCart);

  return (
    <ShoppingCartContext.Provider value={{itemsInCart, updateCart}}>
    <div className="App">
      <Products />
      <ShoppingCart itemsInCart={itemsInCart}/>
    </div>
    </ShoppingCartContext.Provider>
  );
}

export default App;
