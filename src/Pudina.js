import React,  { useState } from "react";
 // Your product data
import "./Pudina.css";
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

const Pudina = () => {
  
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
      <div className="pudina-page">
      <div className="pudina-container">
        {/* Left Side: Product Image */}
        <img className="pudina-image" src="/others/pudina_makhana2.jpg" alt="pudina" />

        {/* Right Side: Product Details */}
        <div className="pudina-details">
          {/* Product Name */}
          <h1 className="pudina-title">Zingy Pudina Pop</h1>

          {/* Price */}
          <div className="pudina-price-section">
            <span className="pudina-price">Rs. 249.00</span>
            <span className="pudina-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="pudina-selection-container">
            <div className="pudina-weight-section">
              <label className="pudina-label">Weight</label>
              <select className="pudina-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="pudina-quantity-section">
              <label className="pudina-label">Qty.</label>
              <input 
                type="number" 
                className="pudina-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="pudina-buttons">
            <button className="pudina-add-to-cart">Add to Cart</button>
            <button className="pudina-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="pudina-short-description">
            <em>Refresh your taste buds with the cool and spicy kick of Zingy Pudina Pop. 
                Infused with minty freshness and a burst of Indian spices, this crunchy snack is a perfect blend of flavor and lightness.
                A revitalizing treat that keeps your snacking fresh and guilt-free.
                </em></p>
            </div>
      </div>
      </div>

      <div className="rec-pudina-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-pudina-product-grid">
        <div className="rec-pudina-product-card">
          <a href="/tangy">
          <img src="/others/Fox_Nuts_Tangy_Tomato_Makhana_3.webp" alt="tangy Makhana" /></a>
          <p>Tangy Tomato Makhana</p>
          <p className="price">Rs. 95.00 <span className="rec-pudina-old-price">Qty. 150g</span></p>
          <button className="rec-pudina-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-pudina-product-card">
        <a href="/cream_onion">
          <img src="/savory/cream & onion.jpg" alt="cream & onion Makhana" /></a>
          <p>cream & Onion Makhana</p>
          <p className="price">Rs. 190.00 <span className="rec-pudina-old-price">Qty. 150g</span></p>
          <button className="rec-pudina-add-to-cart-btn">Add to Cart</button>
        </div>

        <div className="rec-pudina-product-card">
            <a href="/ghee_salt">
          <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="ghee-salt" /></a>
          <p>Ghee-Himalayan Pink Salt</p>
          <p className="rec-pudina-price">Rs. 230.00 <span className="rec-pudina-old-price">Qty. 150g</span></p>
          <button className="rec-pudina-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Pudina;
