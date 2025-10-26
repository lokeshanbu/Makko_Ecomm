import React from "react";
import "./Others.css"; 
//import "./App.css";
import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import "./App.css"// Import CSS file for styling

const Flavor_Others = () => {
    console.log("Others Page Loaded!");

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
        <li><Link to="others">Others</Link></li>
      </ul> </li>
    

        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
      

      {/* Flavor Name */}
      <div className="others-flavor-section">
        <h3 className="others-flavor-title">Savory</h3>
        <div class="others-container">
        <img src="/others/pudina_makhana.jpg" alt="Savory Flavors" className="others-flavor-image" />
        <div class="others-middle">
        <div class="others-text">Savor the crunch, embrace the flavor, enjoy the moment!!</div>
        <div class="others-text">Light, crispy, and irresistibly delicious!</div> 
      </div>
      </div>
      </div>

      {/* Categories Section */}
      <div className="others-categories-section">
        <h3 className="others-categories-title">Categories</h3>
        <div className="others-product-row">
          {/* Product 1 */}
          <div className="others-product-card">
           {/* <a href="/cheddar_cheese"></a> ----- link to product page*/}
           <a href="/pudina">
            <img src="/others/pudina_makhana2.jpg" alt="Product 1" /></a>
            <p>Zingy Pudina Pop</p>
            <div class="others-product-details">
            <p className="others-price" >Rs:499</p>
            <p className="others-quantity">Qty:150g</p></div>
            <button>Add to Cart</button>
           
          </div>

          {/* Product 2 */}
          <div className="others-product-card">
            <a href="/tangy">
            <img src="/others/Fox_Nuts_Tangy_Tomato_Makhana_3.webp" alt="Product 2" /></a>
            <p>Tangy Tomato Makhana</p>
            <div class="others-product-details">
            <p className="others-price" >Rs:599</p>
            <p className="others-quantity">Qty:150g</p></div>
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

export default Flavor_Others;
