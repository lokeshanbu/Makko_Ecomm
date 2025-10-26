import React, { useState, useContext } from 'react';
 // Your product data
 import { CartContext } from './CartContext'; 
 import { useCart } from 'react-use-cart';
import "./productData";
import "./Ghee Salt.css";
import Navbar from "./Navbar";

import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const gheeProduct = {
  id: "ghee-pink-salt",
  name: "Ghee & Himalayan Pink Salt Makhana",
  description:  "Savor the rich, nostalgic taste of tradition with our Ghee & Himalayan Pink Salt Makhana. Roasted to perfection in pure desi ghee and lightly seasoned with mineral-rich Himalayan pink salt, this snack brings together purity, crunch, and flavor in every bite.",
  weights: ["150g", "200g", "250g"],
  prices: [299, 359, 459],
};

const recommended = [
  {
    id: "cheddar-cheese",
    name: "Cheddar Cheese Makhana",
    image: "/savory/Cheddar Cheese.jpg",
    price: 299,
    weight: "150g",
  },
  {
    id: "cream-and-onion",
    name: "Cream and Onion Makhana",
    image: "/savory/cream & onion.jpg",
    price: 299,
    weight: "150g",
  },
  {
    id: "fiery-sriracha",
    name: "Fiery Sriracha Makhana",
    image: "/spicy/Fiery Sriracha Spice.jpg",
    price: 299,
    weight: "150g",
  },
];

const Ghee_Salt = () => {
  const [selectedWeight, setSelectedWeight] = useState("150g");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const getPrice = () => {
    const index = gheeProduct.weights.indexOf(selectedWeight);
    return gheeProduct.prices[index];
  };

  const handleAddToCart = () => {
    const price = getPrice();

    const productToAdd = {
  id: `${gheeProduct.id}-${selectedWeight}`,
  name: gheeProduct.name,
  image: "/savory/Traditional Ghee & Himalayan Pink Salt.jpg", // ADD this
  weight: selectedWeight,
  price, // make sure this is a number
  route: "/ghee_salt",
};

    const status = addToCart(productToAdd, quantity);

if (status === "exists_same_qty") {
  alert("🔔 Product already in the cart with same weight and quantity.");
} else if (status === "updated_qty") {
  alert("🔄 Product quantity updated in cart.");
} else if (status === "added_new") {
  alert("✅ Product added to cart.");
}


  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Navigation */}
      <nav className="menu">
        <a href="/">Home</a>
        <li className="dropdown">
          <a href="#">Flavors ▾</a>
          <ul className="dropdown-menu">
            <li><a href="/savory">Savory</a></li>
            <li><a href="/sweet">Sweet</a></li>
            <li><a href="/spicy">Spicy</a></li>
            <li><a href="/others">Others</a></li>
          </ul>
        </li>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Product Section */}
      <div className="ghee-salt-page">
        <div className="ghee-salt-container">
          {/* Left Side: Product Image */}
          <img
            className="ghee-salt-image"
            src= "/savory/Traditional Ghee & Himalayan Pink Salt.jpg"
            alt={gheeProduct.name}
          />

          
          <div className="ghee-salt-details">
            <h1 className="ghee-salt-title">{gheeProduct.name}</h1>

            {/* Price */}
            <div className="ghee-salt-price-section">
              <span className="ghee-salt-price">₹{getPrice()}</span>
            </div>

            {/* Weight & Quantity Section */}
            <div className="ghee-salt-selection-container">
              <div className="ghee-salt-weight-section">
                <label className="ghee-salt-label">Weight</label>
                <select
                  className="ghee-salt-select"
                  value={selectedWeight}
                  onChange={(e) => setSelectedWeight(e.target.value)}
                >
                  {gheeProduct.weights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              </div>

              <div className="ghee-salt-quantity-section">
                <label className="ghee-salt-label">Qty.</label>
                <input
  type="number"
  min={1}
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
  className="ghee-salt-input"
/>

              </div>
            </div>

            {/* Buttons */}
            <div className="ghee-salt-buttons">
              <button
                className="ghee-salt-add-to-cart"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>

            {/* Short Description */}
            <p className="ghee-salt-short-description">
              <em>{gheeProduct.description}</em>
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="rec-ghee-salt-recommended-products">
        <h2>You may also like</h2>
        <div className="rec-ghee-salt-product-grid">
          {recommended.map((item) => (
            <div key={item.id} className="rec-ghee-salt-product-card">
              <a href={`/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </a>
              <p>{item.name}</p>
              <p className="price">₹{item.price} <span className="rec-ghee-salt-old-price">{item.weight}</span></p>
              <button className="rec-ghee-salt-add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ghee_Salt;

    
     