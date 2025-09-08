// src/pages/All.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initAllData } from "../utils/initAllProducts";
import "./Category.css";

function All() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("allProducts")) || [];
    setProducts(stored);
  };

  useEffect(() => {
    initAllData(); // Initialize combined products
    loadProducts();

    const handleStorage = () => loadProducts();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Filter products based on search
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="category-container">
      <h1 className="vv">All Products Collection</h1>

      {/* 🔍 Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="category-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="category-card"
              onClick={() => navigate(`/all/${product.id}`)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={
                  hoveredIndex === index && product.thumbnails?.[1]
                    ? product.thumbnails[1]
                    : product.mainImage
                }
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  );
}

export default All;
