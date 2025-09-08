// src/utils/initAllProducts.js
export const initAllData = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Handloom Saree",
      price: "₹3,499",
      description: "Soft cotton saree handwoven with traditional designs.",
      mainImage: "/img-textile/textile1.jpg",
      category: "textile",
      thumbnails: [
        "/img-textile/textile1.jpg",
        "/img-textile/textile1-1.jpg",
        "/img-textile/textile1-2.jpg",
      ],
    },
    {
      id: 2,
      name: "Eco-Friendly Bag",
      price: "₹499",
      description: "Reusable and eco-conscious bag made from natural fibers.",
      mainImage: "/img-packaging/pack2.jpg",
      category: "packaging",
      thumbnails: [
        "/img-packaging/pack2.jpg",
        "/img-packaging/pack2-1.jpg",
        "/img-packaging/pack2-2.jpg",
        "/img-packaging/pack2-3.jpg",
      ],
    },
    {
      id: 3,
      name: "Wooden Hanger",
      price: "₹299",
      description: "Durable wooden hanger with smooth finish.",
      mainImage: "/img-hangers/hanger1.jpg",
      category: "hangers",
      thumbnails: [
        "/img-hangers/hanger1.jpg",
        "/img-hangers/hanger1-1.jpg",
      ],
    },
  ];

  localStorage.setItem("allProducts", JSON.stringify(products));
};
