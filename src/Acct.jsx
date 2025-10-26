import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Acct.css";
//import { Navbar } from "react-bootstrap";
import Navbar from "./Navbar";

const Acct = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic email validation
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/auth/acct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fullName, email, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("fullName", data.user.fullName); // ✅ Save name too
        setMessage("✅ Account created successfully!");
        setErrorMsg("");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
       else {
        setErrorMsg(data.message || "❌ Failed to create account.");
        setMessage("");
      }
    } catch (error) {
      setErrorMsg("Server error. Please try again later.");
      setMessage("");
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
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Signup Form */}
      <div className="signup-container">
        <div className="signup-card">
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Create your account below.</p>

          {message && <p style={{ color: "green" }}>{message}</p>}
          {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
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
            <button type="submit" className="signup-button">Create account</button>
          </form>

          <div className="signup-links">
            <Link to="/signin">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Acct;
