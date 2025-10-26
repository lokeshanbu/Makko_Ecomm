import React,  { useState } from "react";
 // Your product data
import "./Peri Peri.css";
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

const Peri_Peri = () => {
  
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
      <div className="peri-peri-page">
      <div className="peri-peri-container">
        {/* Left Side: Product Image */}
        <img className="peri-peri-image" src="/spicy/peri peri spicy.jpg" alt="peri peri" />

        {/* Right Side: Product Details */}
        <div className="peri-peri-details">
          {/* Product Name */}
          <h1 className="peri-peri-title">Peri Peri Spicy Makhana</h1>

          {/* Price */}
          <div className="peri-peri-price-section">
            <span className="peri-peri-price">Rs. 249.00</span>
            <span className="peri-peri-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="peri-peri-selection-container">
            <div className="peri-peri-weight-section">
              <label className="peri-peri-label">Weight</label>
              <select className="peri-peri-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="peri-peri-quantity-section">
              <label className="peri-peri-label">Qty.</label>
              <input 
                type="number" 
                className="peri-peri-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="peri-peri-buttons">
            <button className="peri-peri-add-to-cart">Add to Cart</button>
            <button className="peri-peri-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="peri-peri-short-description">
            <em>Indulge in the bold and spicy taste of Fiery Sriracha Makhana, a perfect fusion of crunchy fox nuts and the zesty heat of sriracha seasoning. 
                Made from premium-quality makhana (fox nuts),this irresistible snack is carefully roasted and coated with a fiery blend that delivers a punch of flavor in every bite.</em></p>
        </div>
      </div>
      </div>

      <div className="rec-peri-peri-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-peri-peri-product-grid">
        <div className="rec-peri-peri-product-card">
          <a href="/masala_phool">
          <img src="/spicy/Masala-phool-makhana-01.jpg" alt="Plain Makhana" /></a>
          <p>Masala Phool Makhana</p>
          <p className="rec-peri-peri-price">Rs. 95.00 <span className="rec-peri-peri-old-price">Qty. 150g</span></p>
          <button className="rec-peri-peri-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-peri-peri-product-card">
        <a href="/ghee_salt">
          <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="ghee salt Makhana" /></a>
          <p>Ghee-Himalayan Pink Salt</p>
          <p className="rec-peri-peri-price">Rs. 190.00 <span className="rec-peri-peri-old-price">Qty. 150g</span></p>
          <button className="rec-peri-peri-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-peri-peri-product-card">
          <img src="/others/tangy1.jpg" alt="tangy" />
          <p>Tangy Tomato Makhana</p>
          <p className="rec-peri-peri-price">Rs. 230.00 <span className="rec-peri-peri-old-price">Qty. 150g</span></p>
          <button className="rec-peri-peri-add-to-cart-btn">Add to Cart</button>
        </div>
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Peri_Peri;
