// src/pages/HangerDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles/ProductDetails.css"; // create a CSS file for styling

function HangerDetails() {
  const { id } = useParams(); // get product id from route
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("hangerProducts")) || [];
    const found = stored.find((item) => item.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>

      <div className="details-card">
        <img src={product.mainImage} alt={product.name} className="details-img" />
        <div className="details-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>

          {/* Show thumbnails if available */}
          <div className="thumbnails">
            {product.thumbnails?.map((thumb, i) => (
              <img key={i} src={thumb} alt={`${product.name} ${i}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HangerDetails;
