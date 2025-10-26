import React, { useState } from "react";
import "./Signin.css";
import Navbar from "./Navbar";


import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Added axios
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
  const [email, setEmail] = useState("");
  //const [fullName, setFullName] = useState(null);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/signin", {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Save token after successful login
        localStorage.setItem("fullName", response.data.user.fullName); 
        navigate("/"); // Redirect to homepage
      } else {
        setErrorMsg(response.data.message);
      }
    } catch (error) {
      setErrorMsg("Invalid credentials or server error.");
    }
  };

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
              <a href="/contact_us">Contact Us</a>
            </nav>
      

      <div className="signin-container">
        <div className="signin-card">
          <h1 className="signin-title">Sign In</h1>
          <form className="signin-form" onSubmit={handleSignin}>
            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="signin-button">Sign In</button>
          </form>
          <div className="signin-links">
            <Link to="/acct">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
