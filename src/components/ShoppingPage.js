import React from "react";
import Cards from "./Cards";
import Pdata from "./Pdata";
import './ShoppingPage.css';

function ShoppingPage() {
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = existingCart.findIndex(item => item.id === product.id);
    
    if (productIndex !== -1) {
      existingCart[productIndex].quantity += 1;
      existingCart[productIndex].total = parseFloat(product.pprice) * existingCart[productIndex].quantity;
    } else {
      existingCart.push({ ...product, quantity: 1, total: parseFloat(product.pprice) });
    }
    
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Product added Successfully!!!");
  };

  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center text-danger">Product List</h1>
        <div className="row">
          {Pdata.map((product, index) => (
            <div className="col-md-3" key={index}>
              <Cards
                product={product}
                addToCart={handleAddToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShoppingPage;
