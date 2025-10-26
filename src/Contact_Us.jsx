import React from "react";
import "./Contact_Us.css";
import Navbar from "./Navbar";


import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUs = () => {
  return (
    <div className="app-container">
        <div className="contact-page">
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
        <a href="/contact_us">Contact Us</a>
      </nav>

      <h1>Contact us</h1>
      <div className="contact-container">
        {/* Left Side - Info */}
        <div className="contact-info">
          <h2>MAKKO - Indian Foxnuts</h2>
          <p>We are here for you. For any questions or assistance.</p>
          <p><strong>Street:</strong> 15/1 6th Cross (Right Side), Magadi Road</p>
          <p><strong>City:</strong> Salem</p>
          <p><strong>Pincode:</strong> 636003</p>
          <p><strong>Mobile Number:</strong> +91 9600913134</p>
          <p><strong>Email ID:</strong> makhanaexport@gmail.com</p>
                                        <div className="contact-address">lokeshanbu04@gmail.com</div>
        </div>

        {/* Right Side - Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="6" required></textarea>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>

      </div>
    </div>
  );
};

export default ContactUs;
