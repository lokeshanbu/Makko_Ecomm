
//import Navbar from "./Navbar";
import React, { useState } from "react";
import "./Cheddar Cheese.css";
import Navbar from "./Navbar";
import productData from "./productData";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";



const Cheddar_Cheese = () => {
  // Find the product from productData
  const product = productData.find(p => p.name === "Cheddar Cheese");

  // Default selections
  const weightOptions = Object.keys(product.priceOptions);

  const [weight, setWeight] = useState(weightOptions[0]);
  const { addToCart } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  
  const { cart } = useContext(CartContext); // Add this if not already present

const handleAddToCart = () => {
  const existingItem = cart.find(
    (item) => item.id === "cheddar_cheese" && item.weight === product.weight
  );

  if (existingItem) {
    alert("Product with this weight is already in the cart. Increasing quantity.");
  }

  addToCart(
    {
      id: "cheddar_cheese",
      name: "Cheddar Cheese",
      price: product.priceOptions[weight],
      image: "/savory/Cheddar Cheese.jpg",
      weight: weight,
    },
    Number(quantity)
  );
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
            <li><Link to="/savory">Savory</Link></li>
            <li><Link to="/sweet">Sweet</Link></li>
            <li><Link to="/spicy">Spicy</Link></li>
            <li><Link to="/others">Others</Link></li>
          </ul>
        </li>
        <a href="#">Categories</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>

      {/* Product Section */}
      <div className="cheddar-cheese-page">
        <div className="cheddar-cheese-container">
          {/* Left: Product Image */}
          <img className="cheddar-cheese-image" src={product.image} alt={product.name} />

          {/* Right: Product Details */}
          <div className="cheddar-cheese-details">
            <h1 className="cheddar-cheese-title">{product.name}</h1>

            <div className="cheddar-cheese-price-section">
              <span className="cheddar-cheese-price">Rs. {product.priceOptions[weight]}</span>
              <span className="cheddar-cheese-old-price">Rs. {(product.priceOptions[weight] * 1.2).toFixed(2)}</span>
            </div>

            <div className="cheddar-cheese-selection-container">
              <div className="cheddar-cheese-weight-section">
                <label className="cheddar-cheese-label">Weight</label>
                <select className="cheddar-cheese-select" value={weight} onChange={(e) => setWeight(e.target.value)}>
                  {weightOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="cheddar-cheese-quantity-section">
                <label className="cheddar-cheese-label">Qty.</label>
                <input 
                  type="number" 
                  className="cheddar-cheese-input"
                  min="1" 
                  value={quantity} 
                  onChange={(e) => setQuantity(e.target.value)} 
                />
              </div>
            </div>

            <div className="cheddar-cheese-buttons">
            <button
  className="cheddar-cheese-add-to-cart"
  onClick={() => {
    const selectedId = `cheddar_cheese_${weight}`; // unique ID for each weight
    const cartItemExists = cart.some(item => item.id === selectedId);

    if (cartItemExists) {
      alert("Product already in cart!");
    } else {
      addToCart({
        id: selectedId,
        name: "Cheddar Cheese",
        price: product.priceOptions[weight],
        image: product.image,
        weight: weight
      }, parseInt(quantity));
      alert("Product added to cart!");
    }
  }}
>
  Add to Cart
</button>

              <button className="cheddar-cheese-buy-now">Buy it now</button>
            </div>

            <p className="cheddar-cheese-short-description">
              <em>{product.description}</em>
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Products (Optional: filter from productData with isRecommended = true) */}
      <div className="rec-cheddar-cheese-recommended-products">
        <h2>You may also like</h2>
        <div className="rec-cheddar-cheese-product-grid">
          {productData.filter(p => p.isRecommended).map((item) => (
            <div className="rec-cheddar-cheese-product-card" key={item.name}>
              <Link to={item.route}>
                <img src={item.image} alt={item.name} />
              </Link>
              <p>{item.name}</p>
              <p className="price">Rs. {Object.values(item.priceOptions)[0]} <span className="rec-cheddar-cheese-old-price">Qty. {Object.keys(item.priceOptions)[0]}</span></p>
              <button className="rec-cheddar-cheese-add-to-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Cheddar_Cheese;

