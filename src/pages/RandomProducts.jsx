import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "./Category.css";
import "./Hangers.css"; // reuse same CSS

function RandomProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem("allProducts")) || [];

    // Shuffle array and pick 20 random products
    const shuffled = allProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);

    setProducts(selected);
  }, []);

  return (
    <div className="category-container">
      <Navbar />

      <h1 className="vv">Random Products</h1>

      <div className="category-grid">
        {products.length > 0 ? (
          products.map((product, index) => (
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
          <p className="no-results">No products available</p>
        )}
      </div>
    </div>
  );
}

export default RandomProducts;
