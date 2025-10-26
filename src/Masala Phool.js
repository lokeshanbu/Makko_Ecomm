import React,  { useState } from "react";
 // Your product data
import "./Masala Phool.css";
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

const Masala_Phool = () => {
  
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
      <div className="masala-phool-page">
      <div className="masala-phool-container">
        {/* Left Side: Product Image */}
        <img className="masala-phool-image" src="/spicy/Masala-phool-makhana-01.jpg" alt="masala phool makhana" />

        {/* Right Side: Product Details */}
        <div className="masala-phool-details">
          {/* Product Name */}
          <h1 className="masala-phool-title">Masala Phool Makhana</h1>

          {/* Price */}
          <div className="masala-phool-price-section">
            <span className="masala-phool-price">Rs. 249.00</span>
            <span className="masala-phool-old-price">Rs. 300.00</span>
          </div>

          {/* Weight & Quantity Section */}
          <div className="masala-phool-selection-container">
            <div className="masala-phool-weight-section">
              <label className="masala-phool-label">Weight</label>
              <select className="masala-phool-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                <option>150g</option>
                <option>250g</option>
                <option>500g</option>
              </select>
            </div>

            <div className="masala-phool-quantity-section">
              <label className="masala-phool-label">Qty.</label>
              <input 
                type="number" 
                className="masala-phool-input"
                min="1" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="masala-phool-buttons">
            <button className="masala-phool-add-to-cart">Add to Cart</button>
            <button className="masala-phool-buy-now">Buy it now</button>
          </div>

          {/* Short Description */}
          <p className="masala-phool-short-description">
            <em>Indulge in the bold and spicy taste of Fiery Sriracha Makhana, a perfect fusion of crunchy fox nuts and the zesty heat of sriracha seasoning. 
                Made from premium-quality makhana (fox nuts),this irresistible snack is carefully roasted and coated with a fiery blend that delivers a punch of flavor in every bite.</em></p>
        </div>
      </div>
      </div>

      <div className="rec-masala-phool-recommended-products">
      <h2>You may also like</h2>
      <div className="rec-masala-phool-product-grid">
      <div className="rec-masala-phool-product-card">
        <a href="/fiery_sriracha">
          <img src="/spicy/Fiery Sriracha Spice.jpg" alt="Caramel Makhana" /></a>
          <p>Fiery Sriracha Spice</p>
          <p className="rec-masala-phool-price">Rs. 230.00 <span className="rec-masala-phool-old-price">Qty. 150g</span></p>
          <button className="rec-masala-phool-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-fiery-sriracha-product-card">
        <a href="/ghee_salt">
          <img src="/spicy/peri peri spicy.jpg" alt="peri peri spicy Makhana" /></a>
          <p>Peri Peri Spicy</p>
          <p className="price">Rs. 190.00 <span className="rec-fiery-sriracha-old-price">Qty. 150g</span></p>
          <button className="rec-fiery-sriracha-add-to-cart-btn">Add to Cart</button>
        </div>
        <div className="rec-masala-phool-product-card">
        <a href="/cheddar_cheese">
          <img src="/others/pudina_makhana2.jpg" alt="Pudina Makhana" /></a>
          <p>Pudina Makhana</p>
          <p className="price">Rs. 190.00 <span className="rec-masala-phool-old-price">Qty. 150g</span></p>
          <button className="rec-masala-phool-add-to-cart-btn">Add to Cart</button>
        </div>
        
        
      </div>
    </div>

    
      
    </div>
    
    
  );
};

export default Masala_Phool;
