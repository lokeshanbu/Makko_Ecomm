import React,  { useState } from "react";
 // Your product data
import "./Fiery Sriracha Spice.css";
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

const Fiery_Sriracha = () => {
  
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
      <div className="fiery-sriracha-page">
      <div className="fiery-sriracha-container">
        {/* Left Side: Product Image */}
        <img className="fiery-sriracha-image" src="/spicy/Fiery Sriracha Spice.jpg" alt="fiery sriracha" />

        {/* Right Side: Product Details */}
        <div className="fiery-sriracha-details">
          {/* Product Name */}
          <h1 className="fiery-sriracha-title">Fiery Sriracha Spice</h1>

          {/* Price */}
          <div className="fiery-sriracha-price-section">
            <span className="fiery-sriracha-price">Rs. 249.00</span>
            <span className="fiery-sriracha-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="fiery-sriracha-selection-container">
            <div className="fiery-sriracha-weight-section">
              <label className="fiery-sriracha-label">Weight</label>
              <select className="fiery-sriracha-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="fiery-sriracha-quantity-section">
              <label className="fiery-sriracha-label">Qty.</label>
              <input 
                type="number" 
                className="fiery-sriracha-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="fiery-sriracha-buttons">
            <button className="fiery-sriracha-add-to-cart">Add to Cart</button>
            <button className="fiery-sriracha-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="fiery-sriracha-short-description">
            <em>Indulge in the bold and spicy taste of Fiery Sriracha Makhana, a perfect fusion of crunchy fox nuts and the zesty heat of sriracha seasoning. 
                Made from premium-quality makhana (fox nuts),this irresistible snack is carefully roasted and coated with a fiery blend that delivers a punch of flavor in every bite.</em></p>
        </div>
      </div>
      </div>

      <div className="rec-fiery-sriracha-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-fiery-sriracha-product-grid">
        <div className="rec-fiery-sriracha-product-card">
          <a href="/masala_phool">
          <img src="/spicy/Masala-phool-makhana-01.jpg" alt="Plain Makhana" /></a>
          <p>Masala Phool Makhana</p>
          <p className="price">Rs. 95.00 <span className="rec-fiery-sriracha-old-price">Qty. 150g</span></p>
          <button className="rec-fiery-sriracha-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-fiery-sriracha-product-card">
        
        <a href="/peri_peri">
          <img src="/spicy/peri peri spicy.jpg" alt="peri peri spicy Makhana" /></a>
          <p>Peri Peri Spicy</p>
          <p className="price">Rs. 190.00 <span className="rec-fiery-sriracha-old-price">Qty. 150g</span></p>
          <button className="rec-fiery-sriracha-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-fiery-sriracha-product-card">
          <img src="/others/Fox_Nuts_Tangy_Tomato_Makhana_3.webp" alt="tangy" />
          <p>Tangy Tomato Makhana</p>
          <p className="rec-fiery-sriracha-price">Rs. 230.00 <span className="rec-fiery-sriracha-old-price">Qty. 150g</span></p>
          <button className="rec-fiery-sriracha-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Fiery_Sriracha;
