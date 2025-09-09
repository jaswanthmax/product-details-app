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
      name: "Wooden Hanger Set  M60 B-grade",
      price: "₹499",
      description: "Durable plastic hangers for all clothes.",
      mainImage: "/New folder/bumerang-hanger-natural__0710666_pe727700_s5.avif",
      thumbnails: [
        "/New folder/bumerang-hanger-natural__1090678_pe862141_s5.avif",
        "/New folder/bumerang-hanger-natural__1325068_pe943779_s5.avif",
        "/New folder/bumerang-hanger-natural__1325069_pe943780_s5.avif",
        "/New folder/bumerang-hanger-natural__1325073_pe943781_s5.avif",
        "/New folder/bumerang-hanger-natural__1355583_pe953183_s5.avif",
      ],
    },
    {
      id: 3,
      name: "Wooden Hanger Set  M387 Natural Side Grip",
      price: "₹999",
      description: "Non-slip velvet hangers for delicate clothes.",
      mainImage: "/New folder/M-387 Sidegrip/download (1).jpeg",
      thumbnails: [
        "/New folder/M-387 Sidegrip/download (2).jpeg",
        "/New folder/M-387 Sidegrip/download.jpeg",
      ],
    },
    {
      id: 4,
      name: "Wooden Hanger Set M-30 SQ Down Clip",
      price: "₹699",
      description: "/New folder/M-387 Sidegrip/M-30 Sq Down Clip/download (1).jpeg",
      mainImage: "/New folder/M-387 Sidegrip/M-30 Sq Down Clip/download (1).jpeg",
      thumbnails: [
        "/New folder/M-387 Sidegrip/M-30 Sq Down Clip/download (3).jpeg",
        "/New folder/M-387 Sidegrip/M-30 Sq Down Clip/download.jpeg",
        "/New folder/M-387 Sidegrip/M-30 Sq Down Clip/images.jpeg",
      ],
    },
     {
   id: 5,
   name: "Wooden Hanger Set M-35 Brown J HookHangor ",
   price: "₹699",
   description: "Nil",
   mainImage: "/New folder/m-35 Brown j Hook Hanger/download (2).jpeg",
   thumbnails: [
     "/New folder/m-35 Brown j Hook Hanger/download (2).jpeg",
     "/New folder/m-35 Brown j Hook Hanger/images (1).jpeg",
     "/New folder/m-35 Brown j Hook Hanger/images (1).jpeg",
     "/New folder/m-35 Brown j Hook Hanger/images.jpeg",
   ],
 },
    {
   id: 6,
   name: "Wooden Hanger Set  M55 12 Wooden Hanger",
   price: "₹999",
   description: "Non-slip velvet hangers for delicate clothes.",
   mainImage: "/New folder/M-55 12 Wooden Hanger/s0rkf_64.avif",
   thumbnails: [
     "/New folder/M-55 12 Wooden Hanger/rkyzo_64.avif",
     "/New folder/M-55 12 Wooden Hanger/ychtf_64.avif",
   ],
 },
     {
   id: 7,
   name: "Wooden Hanger Set  M18 A",
   price: "₹999",
   description: "Non-slip velvet hangers for delicate clothes.",
   mainImage: "/New folder/M-18 A/download (1).jpeg",
   thumbnails: [
     "/New folder/M-18 A/download (2).jpeg",
     "/New folder/M-18 A/download (3).jpeg",
     "/New folder/M-18 A/download.jpeg",
   ],
  },
    {
id: 8,
name: "Wooden Hanger M32 American Down Clip",
price: "₹999",
description: "Non-slip velvet hangers for delicate clothes.",
mainImage: "/New folder/M32 American Down Clip/download (4).jpeg",
thumbnails: [
  "/New folder/M32 American Down Clip/download.jpeg",
  "/New folder/M32 American Down Clip/images (1).jpeg",
  "/New folder/M32 American Down Clip/images.jpeg",
],
    },

      {
id: 9,
name: "Wooden Hanger Set  M997 White j Hook Hanger",
price: "₹999",
description: "Non-slip velvet hangers for delicate clothes.",
mainImage: "/New folder/M-997 White j hook hanger/download (1).jpeg",
thumbnails: [
  "/New folder/M-997 White j hook hanger/download (2).jpeg",
  "/New folder/M-997 White j hook hanger/download (3).jpeg",
  "/New folder/M-997 White j hook hanger/download.jpeg",
],
      },

        {
id: 10,
name: "Wooden Hanger Set  C Grade",
price: "₹999",
description: "Non-slip velvet hangers for delicate clothes.",
mainImage: "/New folder/CGrade/download (1).jpeg",
thumbnails: [
  "/New folder/CGrade/download (4).jpeg",
  "/New folder/CGrade/download (4).jpeg",
  "/New folder/CGrade/download.jpeg",
],
        },
    // Add more products here as needed
  ];

  localStorage.setItem("hangerProducts", JSON.stringify(products));
};
