// src/pages/Hangers.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initHangerData } from "../utils/initHangerData";
import "./Category.css";
import "./Hangers.css";

function Hangers() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const loadProducts = () => {
    const stored = JSON.parse(localStorage.getItem("hangerProducts")) || [];
    setProducts(stored);
  };

  useEffect(() => {
    initHangerData(); // initialize hanger products in localStorage
    loadProducts();

    const handleStorage = () => loadProducts();
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Filter hangers by search
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-container">
      <h1 className="vv">Hanger Collection</h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search hangers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* Hanger product grid */}
      <div className="category-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product.id} // unique key for hangers
              className="category-card"
              onClick={() => navigate(`/hangers/${product.id}`)}
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
          <p className="no-results">No hangers found</p>
        )}
      </div>
    </div>
  );
}

export default Hangers;
