import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [fullName, setFullName] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("fullName");
    if (storedName) {
      setFullName(storedName);
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    setFullName(null);
    navigate("/"); // Optional: redirect to sign-in page
  };

  return (
    <>
      <div className="quote">Healthy and Crunchy Makhana for Every Occasion</div>

      <div className="navbar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <FaSearch className="icon" />
        </div>
        <div className="logo">
          <img src="/logo.jpg" alt="Logo" width="200px" />
        </div>
        <div className="auth-links">
          {fullName ? (
            <>
              <span style={{ marginRight: "10px" }}>Hello, {fullName} | </span>
              <span
                onClick={handleSignOut}
                style={{
                  cursor: "pointer",
                  color: "black",
                  textDecoration: "none",
                  background: "none",
                  border: "none",
                  padding: 0,
                  font: "inherit"
                }}
              >
                Sign Out
              </span>
            </>
          ) : (
            <>
              <Link to="/signin">Sign In | </Link>
              <Link to="/acct">Create Account</Link>
            </>
          )}
          <FaShoppingCart className="cart-icon" onClick={() => navigate("/cart")} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
