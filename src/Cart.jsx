// src/pages/Cart.jsx
import React, { useState } from "react";
import { useEffect } from "react";
import  { useContext } from "react";
import { CartContext } from "./CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import './ShoppingCart.css';

import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Cart = () => {
    const { cart, removeFromCart, updateCartItemQty } = useContext(CartContext);
    const [quantities, setQuantities] = useState(
      cart.reduce((acc, item) => {
        acc[`${item.id}-${item.weight}`] = item.quantity;
        return acc;
      }, {})
    );
    
    
useEffect(() => {
  const updatedQuantities = cart.reduce((acc, item) => {
    acc[`${item.id}-${item.weight}`] = item.quantity;
    return acc;
  }, {});
  setQuantities(updatedQuantities);
}, [cart]);

  const navigate = useNavigate();

  const handleQtyChange = (key, value) => {
  const qty = parseInt(value);
  if (qty >= 1 && qty <= 10) {
    setQuantities((prev) => ({ ...prev, [key]: qty }));
  }
};

  const handleUpdate = (id, weight) => {
    updateCartItemQty(id, weight, quantities[`${id}-${weight}`]);
  };
  

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


    return (
      <>
        <Navbar />

{/* Navigation */}
<nav className="menu">
  <a href="/">Home</a>
  <li className="dropdown">
    <a href="#">Flavors ▾</a>
    <ul className="dropdown-menu">
      <li><Link to="/savory">Savory</Link></li>
      <li><Link to="/sweet">Sweet</Link></li>
      <li><Link to="/spicy">Spicy</Link></li>
      <li><Link to="/others">Others</Link></li>
    </ul>
  </li>
  <a href="#">Categories</a>
  <a href="#">About Us</a>
  <a href="#">Contact Us</a>
</nav>
  
<div className="cart-container">
        <h2 className="cart-title">Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            
            <div key={item.id} className="cart-item">
              <Link
               to={item.route}
              className="item-link"
               style={{ display: "flex", textDecoration: "none", color: "inherit" }}
>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    Rs. {item.price} × {item.quantity} = Rs. {item.price * item.quantity}
                  </div>
                </div>
              </Link>


              <div className="cart-actions">
              <input
  type="number"
  min="1"
  max="10"
  value={quantities[`${item.id}-${item.weight}`] || 1}
 onChange={(e) =>
    handleQtyChange(`${item.id}-${item.weight}`, e.target.value)
  }
/>

                <button onClick={() => handleUpdate(item.id, item.weight)}>Update</button>
                <button className="cart-remove-button" onClick={() => removeFromCart(item.id, item.weight)}>Remove</button>
              </div>
            </div>
          ))
        )}

        {cart.length > 0 && (
          <>
            <div className="cart-total">Total: Rs. {total}</div>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
          </>
        )}
      </div>

      </>
    );
  };
  
  export default Cart;
