import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

function Category() {
  // Category cards linking to their pages
  const categories = [
    {
      title: "Hangers Display",
      image: "/img home/bumerang-hanger-natural__0925727_pe788849_s5.avif",
      route: "/Hangers", // page in pages/Jewellery.js
    },
    {
      title: "Mannequin Display",
      image: "/img home/mannequin-mall-male-abstract-athletic-mannequin-mm-hef00eg-14377197955_1600x.webp",
      route: "/Packaging", // page in pages/Packaging.js
    },
    {
      title: "Textile Display",
      image: "/img home/Textile-Display-1-compressed.jpg",
      route: "/Textile", // page in pages/Textile.js
    },
    {
      title: "All Packaging & Display",
      image: "/img home/all-packaging-materialspng-1.png",
      route: "/AllProducts", // page in pages/AllProducts.js
    },
  ];

  return (
    <div>

      <div className="category-page-container">
        <h1>Our Categories</h1>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <Link key={index} to={cat.route} className="category-card">
              <img src={cat.image} alt={cat.title} />
              <h3>{cat.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
