// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    let storageKey = "";

    if (location.pathname.includes("/hangers")) {
      storageKey = "hangerProducts";
    } else if (location.pathname.includes("/packaging")) {
      storageKey = "packagingProducts";
    } else if (location.pathname.includes("/textile")) {
      storageKey = "textileProducts";
    } else if (location.pathname.includes("/all")) {
      storageKey = "allProducts"; // ✅ FIXED
    }

    if (storageKey) {
      const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
      const found = stored.find((item) => item.id === parseInt(id));
      if (found) {
        setProduct(found);
        setSelectedImage(found.mainImage); // set default image
      }
    }
  }, [id, location.pathname]);

  if (!product) {
    return (
      <p style={{ textAlign: "center", marginTop: "2rem" }}>
        Product not found!
      </p>
    );
  }

  return (
    <div className="image-detail-view">
      {/* Left Side: Images */}
      <div className="image-container">
        <div className="main-image-container">
          <img
            src={selectedImage}
            alt={product.name}
            className="main-image"
          />
          <button className="close-btn" onClick={() => navigate(-1)}>
            ✕
          </button>
        </div>

        {/* Thumbnails */}
        {product.thumbnails && product.thumbnails.length > 0 && (
          <div className="sidebar-thumbnails">
            {[product.mainImage, ...product.thumbnails].map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`${product.name} ${index}`}
                className={`thumbnail-img ${
                  selectedImage === thumb ? "active" : ""
                }`}
                onClick={() => setSelectedImage(thumb)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Right Side: Product Info */}
      <div className="product-details">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
