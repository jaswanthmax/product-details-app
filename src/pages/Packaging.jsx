// src/pages/Packaging.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initPackagingData } from "../utils/initPackagingData";
import "./Category.css";

function Packaging() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // 🔍 search state
  const navigate = useNavigate();

  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("packagingProducts")) || [];
    setProducts(stored);
  };

  useEffect(() => {
    initPackagingData(); // initialize localStorage with packaging products
    loadProducts();

    const handleStorage = () => loadProducts();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // 🔹 Filter packaging products by search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-container">
      <h1 className="vv">Packaging Collection</h1>

      {/* 🔍 Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search packaging..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* Packaging product grid */}
      <div className="category-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="category-card"
              onClick={() => navigate(`/packaging/${product.id}`)}
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
          <p className="no-results">No packaging products found</p>
        )}
      </div>
    </div>
  );
}

export default Packaging;
