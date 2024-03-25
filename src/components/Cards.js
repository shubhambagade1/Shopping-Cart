import React from "react";
import "./cards.css"

function Cards({ product, addToCart }) {
  const { imgsrc, pname, pprice } = product;

  const handleAddToCart = () => {
    //function to add the product to the cart
    addToCart(product);
  };

  return (
    <>
      <div className="card mt-3">
        <img src={imgsrc} className="card-img-top" alt="Product" />
        <div className="card-body">
          <h5 className="card-title">{pname}</h5>
          <p className="card-text">Price: {pprice}</p>
          <button onClick={handleAddToCart} className="btn btn-primary">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
