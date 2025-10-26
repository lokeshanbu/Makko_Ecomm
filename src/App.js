import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./CartContext";

//import Product1 from "./pages/Product1";
import Cart from "./Cart";
import productData from './productData';

import Home from "./Home";
import Navbar from "./Navbar";
import Signin from "./Signin";
import Acct from "./Acct";

import Flavor_Savory from "./Flavor_Savory";
import Flavor_Spicy from "./Flavor_Spicy";
import Flavor_Sweet from "./Flavor_Sweet";
import Flavor_Others from "./Flavor_Others";

import Cheddar_Cheese from "./Cheddar Cheese";
import Cream_Onion from "./Cream Onion";
import Ghee_Salt from "./Ghee Salt";

import Fiery_Sriracha from "./Fiery Sriracha Spice";
import Masala_Phool from "./Masala Phool";
import Peri_Peri from "./Peri Peri";

import Caramel from "./Caramel";
import Jaggery from "./Jaggery";

import Pudina from "./Pudina";
import Tangy from "./Tangy";

import About_Us from "./About_Us";
import Contact_Us from "./Contact_Us";




function App() {
  return (
     <CartProvider> 
    <Router>
      <Routes>

      <Route path="/cart" element={<Cart />} />
      <Route path="/productData/:id" element={<productData />} />

        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/acct" element={<Acct />} />

        <Route path="/savory" element={<Flavor_Savory />} />
        <Route path="/spicy" element={<Flavor_Spicy />} />
        <Route path="/sweet" element={<Flavor_Sweet />} />
        <Route path="/others" element={<Flavor_Others />} /> 

        {/* savory */}
        <Route path="/cheddar_cheese" element={<Cheddar_Cheese />} />
        <Route path="/cream_onion" element={<Cream_Onion />} />
        <Route path="/ghee_salt" element={<Ghee_Salt />} />

        {/*spicy*/}
        <Route path="/fiery_sriracha" element={<Fiery_Sriracha />} />
        <Route path="/masala_phool" element={<Masala_Phool />} />
        <Route path="/peri_peri" element={<Peri_Peri />} />

        {/*sweet*/}
        <Route path="/caramel" element={<Caramel />} />
        <Route path="/jaggery" element={<Jaggery />} />

        {/*others*/}
        <Route path="/pudina" element={<Pudina />} />
        <Route path="/tangy" element={<Tangy />} />


        <Route path="/about_us" element={<About_Us />} />
        <Route path="/contact_us" element={<Contact_Us />} />

      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;