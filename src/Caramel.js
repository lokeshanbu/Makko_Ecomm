import React,  { useState } from "react";
 // Your product data
import "./Caramel.css";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



const Caramel = () => {
  
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState("150g");

  

  return (
   
      <div className="app-container">
         
         <Navbar />
      
      {/* Navigation */}
      <nav className="menu">
        <a href="/">Home</a>
        <li class="dropdown">
      <a href="#">Flavors ▾</a>
      <ul class="dropdown-menu">
        <li><Link to="/savory">Savory</Link></li>
        <li><Link to="/sweet">Sweet</Link></li>
        <li><Link to ="/spicy">Spicy</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul> </li>
    

        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Product Section */}
      <div className="caramel-page">
      <div className="caramel-container">
        {/* Left Side: Product Image */}
        <img className="caramel-image" src="/Sweet/caramel foxnut2.jpg" alt="fiery sriracha" />

        {/* Right Side: Product Details */}
        <div className="caramel-details">
          {/* Product Name */}
          <h1 className="caramel-title">Caramel Makhana</h1>

          {/* Price */}
          <div className="caramel-price-section">
            <span className="caramel-price">Rs. 249.00</span>
            <span className="caramel-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="caramel-selection-container">
            <div className="caramel-weight-section">
              <label className="caramel-label">Weight</label>
              <select className="caramel-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="caramel-quantity-section">
              <label className="caramel-label">Qty.</label>
              <input 
                type="number" 
                className="caramel-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="caramel-buttons">
            <button className="caramel-add-to-cart">Add to Cart</button>
            <button className="caramel-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="caramel-short-description">
            <em>A sweet delight that combines the light crunch of roasted fox nuts with a smooth caramel coating. 
              This indulgent snack is perfect for those who crave a touch of sweetness with every bite.
              </em></p>
            </div>
      </div>
      </div>

      <div className="rec-caramel-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-caramel-product-grid">
        <div className="rec-caramel-product-card">
          <a href="/jaggery">
          <img src="/Sweet/Goodness of Jaggery.jpg" alt="sweet Makhana" /></a>
          <p>Goodness of Jaggery</p>
          <p className="price">Rs. 95.00 <span className="rec-caramel-old-price">Qty. 150g</span></p>
          <button className="rec-caramel-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-caramel-product-card">
        
        <a href="/cream_onion">
          <img src="/savory/cream & onion.jpg" alt="cream & onion Makhana" /></a>
          <p>cream & onion</p>
          <p className="price">Rs. 190.00 <span className="rec-caramel-old-price">Qty. 150g</span></p>
          <button className="rec-caramel-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-caramel-product-card">
          <a href="/tangy">
          <img src="/others/Fox_Nuts_Tangy_Tomato_Makhana_3.webp" alt="tangy" /></a>
          <p>Tangy Tomato Makhana</p>
          <p className="rec-caramel-price">Rs. 230.00 <span className="rec-caramel-old-price">Qty. 150g</span></p>
          <button className="rec-caramel-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Caramel;
