// src/utils/initTextileData.js
export const initTextileData = () => {
  const products = [
    {
      id: 1,
      name: "Cotton Handloom Saree",
      price: "₹3,499",
      description: "Soft cotton saree handwoven with traditional designs.",
      mainImage: "/img-textile/textile1.jpg",
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
      thumbnails: [
        "/img-packaging/pack2.jpg",
        "/img-packaging/pack2-1.jpg",
        "/img-packaging/pack2-2.jpg",
        "/img-packaging/pack2-3.jpg",
        "/img-packaging/pack2-4.jpg",
      ],
    },
  ];

  localStorage.setItem("textileProducts", JSON.stringify(products));
};
