import React,  { useState } from "react";
 // Your product data
import "./Cream Onion.css";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Cream_Onion = () => {
  
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
        <li><Link to="#">Others</Link></li>
      </ul> </li>
    

        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Product Section */}
      <div className="cream-onion-page">
      <div className="cream-onion-container">
        {/* Left Side: Product Image */}
        <img className="cream-onion-image" src="/savory/cream & onion.jpg" alt="cream-onion" />

        {/* Right Side: Product Details */}
        <div className="cream-onion-details">
          {/* Product Name */}
          <h1 className="cream-onion-title">Cream and Onion</h1>

          {/* Price */}
          <div className="cream-onion-price-section">
            <span className="cream-onion-price">Rs. 249.00</span>
            <span className="cream-onion-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="cream-onion-selection-container">
            <div className="cream-onion-weight-section">
              <label className="cream-onion-label">Weight</label>
              <select className="cream-onion-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="cream-onion-quantity-section">
              <label className="cream-onion-label">Qty.</label>
              <input 
                type="number" 
                className="cream-onion-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="cream-onion-buttons">
            <button className="cream-onion-add-to-cart">Add to Cart</button>
            <button className="cream-onion-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="cream-onion-short-description">
            <em>Experience the perfect blend of Cream & Onion Makhana, a deliciously savory snack that combines the rich, creamy taste of fresh dairy with the zesty kick of onions. Made from premium-quality fox nuts, 
              this light yet flavorful treat is roasted to perfection and seasoned with an irresistible mix of cream and onion flavors.</em>
          </p>
        </div>
      </div>
    </div>

    <div className="rec-cream-onion-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-cream-onion-product-grid">
        <div className="rec-cream-onion-product-card">
          <a href="/cheddar_cheese">
          <img src="/savory/Cheddar Cheese.jpg" alt="cheddar cheese Makhana" /></a>
          <p>Cheddar Cheese </p>
          <p className="price">Rs. 95.00 <span className="rec-cream-onion-old-price">Qty. 150g</span></p>
          <button className="rec-cream-onion-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-cream-onion-product-card">
          <a href="/masala_phool">
          <img src="/spicy/Masala-phool-makhana-01.jpg" alt="Salt & Pepper Makhana" /></a>
          <p>Masala phool makhana</p>
          <p className="price">Rs. 190.00 <span className="rec-cream-onion-old-price">Qty. 150g</span></p>
          <button className="rec-cream-onion-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-cream-onion-product-card">
          <a href="/peri_peri">
          <img src="/spicy/peri peri spicy.jpg" alt="Caramel Makhana" /></a>
          <p>Peri Peri Makhana</p>
          <p className="rec-cream-onion-price">Rs. 230.00<span className="rec-cream-onion-old-price">Qty. 150g</span></p>
          <button className="rec-cheddar-cheese-add-to-cart-btn">Add to Cart</button>
          
        </div>
        
      </div>
    </div>
      
    </div>
    
    
  );
};

export default Cream_Onion;
