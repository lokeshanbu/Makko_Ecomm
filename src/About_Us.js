import React,  { useState } from "react";
 // Your product data
import "./About_Us.css";
import Navbar from "./Navbar";


import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const About_Us = () => {
  
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
        <a href="/about_us">About Us</a>
        <a href="contact_us">Contact Us</a>
      </nav>
      <h2 className="heading">About Us</h2>
  
      {/* Workflow Section */}
      <div className="about-workflow-section">
       
       <div class="about-process-container">
       <div class="about-process-step">
    <img src="/flow1.1.png" alt="Identify artisans"/>
    <i>Identify Authentic Makhana Farmers</i>
  </div>
  <div class="about-process-step">
    <img src="/flow2.png" alt="Collaborate"/>
    <i>Collaborate on unique designs</i>
  </div>
  <div class="about-process-step">
    <img src="/flow3.png" alt="Quality"/>
    <i>Create Pieces Of Superior Quality</i>
  </div>
  <div class="about-process-step">
    <img src="/flow4.png" alt="Customer"/>
    <i>Bring Makhana to the Valuable Customer</i>
  </div>
  <div class="about-process-step">
    <img src="/flow5.png" alt="Sustain"/>
    <i>Help in sustaining the Makhana and the rural farmers</i>
  </div>
</div>

        
      </div>

      {/* About Us Content */}
      <div className="about-content">
        
        <p>
        At Makko, we believe that snacking can be both delicious and healthy. 
        We source our raw makhana (fox nuts) directly from trusted and authentic farmers in Bihar — the heartland of premium-quality makhana cultivation.</p>

        <p>With a strong focus on hygiene and quality, our processing methods are designed to retain the natural goodness of makhana while crafting a variety of unique flavors to suit every taste preference. 
            From traditional to exotic, each variant is prepared keeping in mind the health and wellness of our customers.</p>

        <p>We take pride in serving not just the Indian market but also reaching global customers, especially across the UK and US.
           Whether it's retail in India or exports worldwide, our mission remains the same — to deliver wholesome snacking experiences rooted in purity, taste, and trust.</p>

        <b> Your health, our priority — one crunchy bite at a time.</b>


        
      </div>

      </div>
         
  );
};

export default About_Us;
