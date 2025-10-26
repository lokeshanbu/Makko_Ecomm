import React from "react";
import "./Spicy.css"; 
//import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./App.css"// Import CSS file for styling

const Flavor_Spicy = () => {
    console.log("Spicy Page Loaded!");

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
      

      {/* Flavor Name */}
      <div className="spicy-flavor-section">
        <h3 className="spicy-flavor-title">Spicy</h3>
        <div class="spicy-container">
        <img src="/spicy/spicy_main.jpg" alt="Savory Flavors" className="spicy-flavor-image" />
        <div class="spicy-middle">
        <div class="spicy-text">Turn up the heat with our fiery Spicy Makhana bold, crunchy, and irresistibly tasty!</div>
        <div class="spicy-text">For those who love a little kick – enjoy the bold flavors of our Spicy Makhana!</div> 
      </div>
      </div>
      </div>

      {/* Categories Section */}
      <div className="spicy-categories-section">
        <h3 className="spicy-categories-title">Categories</h3>
        <div className="spicy-product-row">
          {/* Product 1 */}
          <div className="spicy-product-card">
            <a href="/fiery_sriracha">
            <img src="/spicy/Fiery Sriracha Spice.jpg" alt="Product 1" /></a>
            <p>Fiery Sriracha Spice Makhana</p>
            <div class="spicy-product-details">
            <p className="spicy-price" >Rs:399</p>
            <p className="spicy-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 2 */}
          <div className="spicy-product-card">
            <a href="/masala_phool" >
            <img src="/spicy/Masala-phool-makhana-01.jpg" alt="Product 2" /></a>
            <p>Masala Phool Makhana</p>
            <div class="spicy-product-details">
            <p className="spicy-price" >Rs:399</p>
            <p className="spicy-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 3 */}
          <div className="spicy-product-card">
            <a href="/peri_peri">
            <img src="/spicy/peri peri spicy.jpg" alt="Product 3" /></a>
          
            <p>Peri Peri Spicy Makhana</p>
            <div class="spicy-product-details">
            <p className="spicy-price" >Rs:399</p>
            <p className="spicy-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>
        </div>
      </div>

      {/* Footer (Same as Home Page) */}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We deliver high-quality, organic makhana with a variety of flavors.</p>
        </div>
        <div className="footer-section">
          <h3>Mission</h3>
          <p>To provide healthy and delicious snacks to everyone.</p>
        </div>
        <div className="footer-section">
          <h3>Vision</h3>
          <p>To be the leading online makhana store with the best quality.</p>
        </div>
        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <a href="#">FB</a> | <a href="#">IG</a> | <a href="#">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Flavor_Spicy;
