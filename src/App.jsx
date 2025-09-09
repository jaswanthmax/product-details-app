// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Hangers from "./pages/Hangers";
import Packaging from "./pages/Packaging";
import Textile from "./pages/Textile";
import AllProducts from "./pages/AllProducts";
import ProductDetails from "./pages/ProductDetails"; // ✅ common details page

function App() {
  return (
    <Router>
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Category overview page */}
        <Route path="/categories" element={<Category />} />

        {/* Individual category pages */}
        <Route path="/hangers" element={<Hangers />} />
        <Route path="/packaging" element={<Packaging />} />
        <Route path="/textile" element={<Textile />} />
        <Route path="/allproducts" element={<AllProducts />} />

        {/* ✅ Common product details page for all categories */}
        <Route path="/hangers/:id" element={<ProductDetails />} />
        <Route path="/packaging/:id" element={<ProductDetails />} />
        <Route path="/textile/:id" element={<ProductDetails />} />
        <Route path="/all/:id" element={<ProductDetails />} />

      </Routes>
    </Router>
  );
}

export default App;
