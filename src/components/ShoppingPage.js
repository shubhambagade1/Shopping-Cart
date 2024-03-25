import React from "react";
import Cards from "./Cards";
import Pdata from "./Pdata";

function ShoppingPage({ addToCart }) {
  return (
    <>
      <div className="container-fluid"> 
        <h1 className="text-center text-danger">Product List</h1>
        <div className="row">
          {Pdata.map((product, index) => (
            <div className="col-md-3" key={index}>
              <Cards
                product={product}   
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShoppingPage;
