export const initHangerData = () => {
  const products = [
    {
      id: 1,
      name: "Plastic Hanger Set ",
      price: "₹799",
      description: "Premium wooden hangers for your wardrobe.",
      mainImage: "/New folder/61Z6NZttiCL._UF1000,1000_QL80_.jpg",
      thumbnails: [
        "/New folder/71a5TOVpnpL._UF1000,1000_QL80_.jpg",
        "/New folder/81gKxbIrLNL.jpg",
        "/New folder/100-Pack-Hanger-Sets-Heavy-Duty-Velvet-Hangers-Non-Slip-&Ultra-Thin,-Six-Colors-Option,-Clothes-Hangers.webp",
    
      ],
    },
    {
      id: 2,
      name: "Wooden Hanger Set",
      price: "₹499",
      description: "Durable plastic hangers for all clothes.",
      mainImage: "/hangers/plastic-hanger-main.jpg",
      thumbnails: [
        "/hangers/plastic-hanger-main.jpg",
        "/hangers/plastic-hanger-thumb.jpg",
      ],
    },
    {
      id: 3,
      name: "Velvet Hangers",
      price: "₹999",
      description: "Non-slip velvet hangers for delicate clothes.",
      mainImage: "/hangers/velvet-hanger-main.jpg",
      thumbnails: [
        "/hangers/velvet-hanger-main.jpg",
        "/hangers/velvet-hanger-thumb.jpg",
      ],
    },
    {
      id: 4,
      name: "Metal Hangers",
      price: "₹699",
      description: "Strong metal hangers for heavy clothes.",
      mainImage: "/hangers/metal-hanger-main.jpg",
      thumbnails: [
        "/hangers/metal-hanger-main.jpg",
        "/hangers/metal-hanger-thumb.jpg",
      ],
    },
    // Add more products here as needed
  ];

  localStorage.setItem("hangerProducts", JSON.stringify(products));
};
