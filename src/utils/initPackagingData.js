// src/utils/initPackagingData.js
export const initPackagingData = () => {
  const products = [
    {
      id: 1,
      name: "Plastic Mannequin",
      price: "₹1200",
      description: "Lightweight plastic mannequin for display.",
      mainImage: "/man/abstract-male-mannequin-runway-ma-53 (3).webp",
      thumbnails: [
        "/man/abstract-male-mannequin-runway-ma-53 (1).webp",
        "/man/abstract-male-mannequin-runway-ma-53 (2).webp",
        "/man/abstract-male-mannequin-runway-ma-53.webp",
      ],
    },
    {
      id: 2,
      name: "Fiber Mannequin",
      price: "₹2500",
      description: "Durable fiber mannequin for stores.",
      mainImage: "/packaging/fiber-mannequin-main.jpg",
      thumbnails: [
        "/packaging/fiber-mannequin-main.jpg",
        "/packaging/fiber-mannequin-thumb.jpg",
      ],
    },
  ];

  localStorage.setItem("packagingProducts", JSON.stringify(products));
};
