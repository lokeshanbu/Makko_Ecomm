import React from "react";
import "./App.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from "./TempCarousel"; 
import Navbar from "./Navbar";

const Home =() => {
  return (
    <div className="app-container">
       <Navbar />
      
      {/* Navigation */}
      <nav className="menu">
        <a href="#">Home</a>
        <li class="dropdown">
      <a href="#">Flavors ▾</a>
      <ul class="dropdown-menu">
        <li><Link to="/savory">Savory</Link></li>
        <li><Link to="/sweet">Sweet</Link></li>
        <li><Link to ="/spicy">Spicy</Link></li>
        <li><Link to="/others">Others</Link></li>
      </ul> </li>
    

        <a href="#">Categories</a>
        <a href="/about_us  ">About Us</a>
        <a href="/contact_us">Contact Us</a>
      </nav>
      
      {/* Slideshow */}
     
      <div className="App">
            <MyCarousel />
       </div>
 
    

      {/* Workflow Section */}
      <div className="workflow-section">
       {/* <img src="/left_img.png" alt="Left" className="side-image" />*/}
       {/*<img src="workflow.jpg" alt="Workflow" className="workflow-image" />*/}
       <div class="process-container">
       <div class="process-step">
    <img src="/flow1.1.png" alt="Identify artisans"/>
    <i>Identify Authentic Makhana Farmers</i>
  </div>
  <div class="process-step">
    <img src="/flow2.png" alt="Collaborate"/>
    <i>Collaborate on unique designs</i>
  </div>
  <div class="process-step">
    <img src="/flow3.png" alt="Quality"/>
    <i>Create Pieces Of Superior Quality</i>
  </div>
  <div class="process-step">
    <img src="/flow4.png" alt="Customer"/>
    <i>Bring Makhana to the Valuable Customer</i>
  </div>
  <div class="process-step">
    <img src="/flow5.png" alt="Sustain"/>
    <i>Help in sustaining the Makhana and the rural farmers</i>
  </div>
</div>

       {/* <img src="/right_img.png" alt="Right" className="side-image" />*/}
      </div>
      
     
    <div>
      {/* Featured Products */}
      <h4 className="featured-title">Featured Products</h4>
      <div className="featured-products">
        <div className="product-card">
          <a href="/fiery_sriracha">
          <img src="/spicy/Fiery Sriracha Spice.jpg" alt="Product 1" /></a>
          <p>Fiery Sriracha Spice Makhana</p>
          <div className="product-details">
          <p className="price">Rs:399</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
          
        </div>
        <div className="product-card">
          <a href="/ghee_salt">
          <img src="/savory/Traditional Ghee & Himalayan Pink Salt.jpg" alt="Product 2" /></a>
          <p >Ghee & Himalayan Pink Salt </p>
          <div className="product-details">
          <p className="price2">Rs:300</p>
          <p className="quantity">Qty:150g</p></div>
          <button>Add to Cart</button>
         
        </div>
        <div className="product-card">
          <a href="/jaggery">
          <img src="/Sweet/Goodness of Jaggery.jpg" alt="Product 3" /></a>
          <p>Goodness of Jaggery</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
    
          <button>Add to Cart</button>
          
        </div>
        <div className="product-card">
          <a href="/pudina">
          <img src="/others/pudina_makhana2.jpg" alt="Product 4" /></a>
          <p>Zingy Pudina Pop</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
          
        </div>
      </div>
      {/* second row */}
      <div className="featured-products">
        <div className="product-card">
          <a href="/peri_peri">
          <img src="/spicy/peri peri spicy.jpg" alt="Product 1" /></a>
          <p>Peri Peri Spicy Makhana</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
         
        </div>
        <div className="product-card">
          <a href="/cheddar_cheese">
          <img src="/savory/Cheddar Cheese.jpg" alt="Product 2" /></a>
          <p>Cheddar Cheese Makhana</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
         
        </div>
        <div className="product-card">
          <a href="/caramel">
          <img src="/Sweet/caramel foxnut2.jpg" alt="Product 3" /></a>
          <p>Caramel Makhana</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
         
        </div>
        <div className="product-card">
          <a href="/tangy">
          <img src="/others/tangy1.jpg" alt="Product 4" /></a>
          <p>Tangy Tomato Makhana</p>
          <div className="product-details">
          <p className="price">Rs:300</p>
          <p className="quantity">Qty:150g</p>
          </div>
          <button>Add to Cart</button>
          
        </div>
      </div>
    </div> 

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
}

export default Home;

