import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShoppingPage from "./components/ShoppingPage";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  //adding products into cart component 
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ShoppingPage addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
