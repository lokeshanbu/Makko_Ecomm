import React from "react";
import "./Sweet.css"; 
//import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./App.css"// Import CSS file for styling

const Flavor_Sweet = () => {
    console.log("Sweet Page Loaded!");

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
      <div className="sweet-flavor-section">
        <h3 className="sweet-flavor-title">Sweet</h3>
        <div class="sweet-container">
        <img src="/Sweet/Goodness of Jaggery2.2.jpg" alt="Savory Flavors" className="sweet-flavor-image" />
        <div class="sweet-middle">
        <div class="sweet-text">Wholesome, sweet, and utterly irresistible – that’s Makhana magic</div>
        <div class="sweet-text">Satisfy your sweet cravings with nature’s crunchy treasure</div> 
      </div>
      </div>
      </div>

      {/* Categories Section */}
      <div className="sweet-categories-section">
        <h3 className="sweet-categories-title">Categories</h3>
        <div className="sweet-product-row">
          {/* Product 1 */}
          <div className="sweet-product-card">
           <a href="/caramel">
            <img src="/Sweet/caramel foxnut2.jpg" alt="Product 1" /></a>
            <p>Caramel Foxnut</p>
            <div class="sweet-product-details">
            <p className="sweet-price" >Rs:499</p>
            <p className="sweet-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 2 */}
          <div className="sweet-product-card">
            <a href="/jaggery">
            <img src="/Sweet/Goodness of Jaggery.jpg" alt="Product 2" /></a>
            <p>Goodness of Jaggery</p>
            <div class="sweet-product-details">
            <p className="sweet-price" >Rs:599</p>
            <p className="sweet-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 3 */}
          
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

export default Flavor_Sweet;
