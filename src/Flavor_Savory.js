import React from "react";
import "./Savory.css"; 
//import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./App.css"// Import CSS file for styling

const Flavor_Savory = () => {
    console.log("Savory Page Loaded!");

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
      <div className="savory-flavor-section">
        <h3 className="savory-flavor-title">Savory</h3>
        <div class="savory-container">
        <img src="/savory/savory_main.jpg" alt="Savory Flavors" className="savory-flavor-image" />
        <div class="savory-middle">
        <div class="savory-text">Savor the crunch, embrace the flavor, enjoy the moment!!</div>
        <div class="savory-text">Light, crispy, and irresistibly delicious!</div> 
      </div>
      </div>
      </div>

      {/* Categories Section */}
      <div className="savory-categories-section">
        <h3 className="savory-categories-title">Categories</h3>
        <div className="savory-product-row">
          {/* Product 1 */}
          <div className="savory-product-card">
            <a href="/cheddar_cheese">
            <img src="/savory/Cheddar Cheese.jpg" alt="Product 1" /></a>
            <p>Cheddar Cheese Makhana</p>
            <div class="savory-product-details">
            <p className="savory-price" >Rs:499</p>
            <p className="savory-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 2 */}
          <div className="savory-product-card">
            <a href="/cream_onion">
            <img src="/savory/cream & onion.jpg" alt="Product 2" /></a>
            <p>Cream & Onion Makhana</p>
            <div class="savory-product-details">
            <p className="savory-price" >Rs:599</p>
            <p className="savory-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 3 */}
          <div className="savory-product-card">
           <a href="/ghee_salt">
            <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="Product 3" /></a>
            <p>Ghee & Himalayan Pink Salt</p>
            <div class="savory-product-details">
            <p className="savory-price" >Rs:659</p>
            <p className="savory-quantity">Qty:150g</p></div>
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

export default Flavor_Savory;
