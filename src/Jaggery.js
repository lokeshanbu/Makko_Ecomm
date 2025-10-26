import React,  { useState } from "react";
 // Your product data
import "./Jaggery.css";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const recommendedProducts = [
  { id: 1, name: "Sample Product 1", price: 799, image: "product1.jpg" },
  { id: 2, name: "Sample Product 2", price: 899, image: "product2.jpg" },
  { id: 3, name: "Sample Product 3", price: 999, image: "product3.jpg" },
  { id: 4, name: "Sample Product 4", price: 699, image: "product4.jpg" },
];

const Jaggery = () => {
  
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
      <div className="jaggery-page">
      <div className="jaggery-container">
        {/* Left Side: Product Image */}
        <img className="jaggery-image" src="/Sweet/Goodness of Jaggery.jpg" alt="fiery sriracha" />

        {/* Right Side: Product Details */}
        <div className="jaggery-details">
          {/* Product Name */}
          <h1 className="jaggery-title">Goodness of Jaggery</h1>

          {/* Price */}
          <div className="jaggery-price-section">
            <span className="jaggery-price">Rs. 249.00</span>
            <span className="jaggery-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="jaggery-selection-container">
            <div className="jaggery-weight-section">
              <label className="jaggery-label">Weight</label>
              <select className="jaggery-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="jaggery-quantity-section">
              <label className="jaggery-label">Qty.</label>
              <input 
                type="number" 
                className="jaggery-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="jaggery-buttons">
            <button className="jaggery-add-to-cart">Add to Cart</button>
            <button className="jaggery-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="jaggery-short-description">
            <em>Experience the natural sweetness of jaggery wrapped around crunchy makhana. 
                This wholesome treat is not just delicious but also rich in traditional goodness and perfect for guilt-free snacking.
                </em></p>
            </div>
      </div>
      </div>

      <div className="rec-jaggery-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-jaggery-product-grid">
        <div className="rec-jaggery-product-card">
          <a href="/caramel">
          <img src="/Sweet/caramel foxnut2.jpg" alt="sweet Makhana" /></a>
          <p>Caramel Makhana</p>
          <p className="price">Rs. 95.00 <span className="rec-jaggery-old-price">Qty. 150g</span></p>
          <button className="rec-jaggery-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-jaggery-product-card">
        <a href="/cream_onion">
          <img src="/savory/cream & onion.jpg" alt="cream & onion Makhana" /></a>
          <p>cream & Onion Makhana</p>
          <p className="price">Rs. 190.00 <span className="rec-jaggery-old-price">Qty. 150g</span></p>
          <button className="rec-jaggery-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-jaggery-product-card">
            <a href="/ghee_salt">
          <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="ghee-salt" /></a>
          <p>Ghee-Himalayan Pink Salt</p>
          <p className="rec-jaggery-price">Rs. 230.00 <span className="rec-jaggery-old-price">Qty. 150g</span></p>
          <button className="rec-jaggery-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Jaggery;
