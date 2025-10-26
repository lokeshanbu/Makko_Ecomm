import React,  { useState } from "react";
 // Your product data
import "./Tangy.css";
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

const Tangy = () => {
  
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
      <div className="tangy-page">
      <div className="tangy-container">
        {/* Left Side: Product Image */}
        <img className="tangy-image" src="/others/Fox_Nuts_Tangy_Tomato_Makhana_3.webp" alt="tangy tomato" />

        {/* Right Side: Product Details */}
        <div className="tangy-details">
          {/* Product Name */}
          <h1 className="tangy-title">Tangy Tomato Makhana</h1>

          {/* Price */}
          <div className="tangy-price-section">
            <span className="tangy-price">Rs. 249.00</span>
            <span className="tangy-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="tangy-selection-container">
            <div className="tangy-weight-section">
              <label className="tangy-label">Weight</label>
              <select className="tangy-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="tangy-quantity-section">
              <label className="tangy-label">Qty.</label>
              <input 
                type="number" 
                className="tangy-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="tangy-buttons">
            <button className="tangy-add-to-cart">Add to Cart</button>
            <button className="tangy-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="tangy-short-description">
            <em>Enjoy the mouthwatering tang of ripe tomatoes paired with crispy roasted makhana. 
                This snack brings a zesty twist to your munching moments, making it an all-time favorite for flavor lovers.
                 A tasty companion for your cravings, any time of the day.
                </em></p>
            </div>
      </div>
      </div>

      <div className="rec-tangy-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-tangy-product-grid">
        <div className="rec-tangy-product-card">
          <a href="/pudina">
          <img src="/others/pudina_makhana2.jpg" alt="pudina Makhana" /></a>
          <p>Zingy Pudina Pop</p>
          <p className="price">Rs. 95.00 <span className="rec-tangy-old-price">Qty. 150g</span></p>
          <button className="rec-tangy-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-tangy-product-card">
        <a href="/fiery_sriracha">
          <img src="/spicy/Fiery Sriracha Spice.jpg" alt="Fiery Sriracha" /></a>
          <p>Fiery Sriracha Spicy</p>
          <p className="price">Rs. 190.00 <span className="rec-tangy-old-price">Qty. 150g</span></p>
          <button className="rec-tangy-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-tangy-product-card">
            <a href="/ghee_salt">
          <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="ghee-salt" /></a>
          <p>Ghee-Himalayan Pink Salt</p>
          <p className="rec-tangy-price">Rs. 230.00 <span className="rec-tangy-old-price">Qty. 150g</span></p>
          <button className="rec-tangy-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Tangy;
