import React, { useState, useEffect } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleQuantityChange = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
          ...item,
          quantity: Math.max(item.quantity + change, 1),
          total: parseFloat(item.pprice) * (item.quantity + change)
        }
        : item
    );
    setCart(updatedCart);
  };

  const handleCancel = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const grandTotal = cart.reduce((total, item) => total + item.total, 0);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="container">
      <h1 className="text-center text-danger">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((item, index) => (
              <li key={index} className="list-group-item">
                <div className="row">
                  <div className="col-md-2">
                    <img
                      src={item.imgsrc}
                      className="img-fluid"
                      alt={item.pname}
                    />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.pname}</h5>
                    <p>Price: {item.pprice}</p>
                  </div>
                  <div className="col-md-4">
                    <p>Quantity</p>
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="btn btn-sm btn-secondary me-2"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="btn btn-sm btn-secondary ms-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => handleCancel(item.id)}
                      className="btn btn-sm btn-danger ms-2"
                    >
                      Cancel
                    </button>
                    <p>Total: {item.total}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div>
            <h4>Grand Total: {grandTotal}</h4>
          </div>
          <button className="btn btn-danger" onClick={clearCart}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
