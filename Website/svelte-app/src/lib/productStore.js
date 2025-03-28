import { writable } from "svelte/store";

 export let selectedProduct = writable(null);

// Array of products (same as in the main page)
export const products = [
    { id: 1, name: "Classic T-Shirt", price: "$29.99", image: "/images/clothing/shirt.png", 
      originalPrice: "$39.99", rating: 4.8, reviewCount: 124,
      description: "This is a high-quality product made with premium materials. Perfect for everyday use, this product combines style and function in a seamless design. The attention to detail is evident in every aspect, from the stitching to the finish.",
      features: [
        "Premium quality materials",
        "Durable construction",
        "Modern design",
        "Easy to maintain",
        "Eco-friendly production",
        "1-year warranty"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 2, name: "Casual T-Shirt", price: "$24.99", image: "/images/clothing/richard.webp", image2: "/images/clothing/shirt.png", image3: "/images/clothing/pavel.jfif",
      originalPrice: "$34.99", rating: 4.5, reviewCount: 98,
      description: "This is a high-quality product made with premium materials. Perfect for everyday use, this product combines style and function in a seamless design.",
      features: [
        "Premium quality materials",
        "Durable construction",
        "Modern design",
        "Easy to maintain"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","hoodies"]
    },
    { id: 3, name: "Premium T-Shirt", price: "$34.99", image: "/images/clothing/dobik.jfif",
      originalPrice: "$44.99", rating: 4.9, reviewCount: 156,
      description: "This premium t-shirt offers exceptional comfort and style for any occasion.",
      features: [
        "Premium quality materials",
        "Durable construction",
        "Modern design",
        "Easy to maintain",
        "Eco-friendly production"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","hoodies"]
    },
    { id: 4, name: "Sport T-Shirt", price: "$27.99", image: "/images/clothing/pavel.jfif",
      originalPrice: "$37.99", rating: 4.6, reviewCount: 112,
      description: "Designed for active lifestyles, this sport t-shirt keeps you cool and comfortable.",
      features: [
        "Moisture-wicking fabric",
        "Breathable design",
        "Lightweight construction",
        "Stretchable material"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Red"],
      category: ["all","boots"]
    },
    { id: 5, name: "Vintage T-Shirt", price: "$32.99", image: "/images/clothing/pavlik.png",
      originalPrice: "$42.99", rating: 4.7, reviewCount: 89,
      description: "Classic vintage style with modern comfort and durability.",
      features: [
        "Retro design",
        "Soft cotton blend",
        "Pre-washed for comfort",
        "Authentic look and feel"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Gray"],
      category: ["all","shirts"]
    },
    { id: 6, name: "Modern T-Shirt", price: "$29.99", 
      originalPrice: "$39.99", rating: 4.4, reviewCount: 76,
      description: "Contemporary style for the fashion-conscious individual.",
      features: [
        "Modern cut",
        "Premium materials",
        "Versatile design",
        "Comfortable fit"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 7, name: "Vintage T-Shirt", price: "$32.99",
      originalPrice: "$42.99", rating: 4.5, reviewCount: 92,
      description: "Another classic vintage option with a unique twist.",
      features: [
        "Retro design",
        "Soft cotton blend",
        "Pre-washed for comfort"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 8, name: "Vintage T-Shirt", price: "$32.99",
      originalPrice: "$42.99", rating: 4.3, reviewCount: 67,
      description: "Vintage-inspired design with modern comfort features.",
      features: [
        "Retro aesthetics",
        "Comfortable material",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 9, name: "Sport T-Shirt", price: "$27.99",
      originalPrice: "$37.99", rating: 4.7, reviewCount: 103,
      description: "Performance t-shirt designed for active lifestyles.",
      features: [
        "Moisture-wicking",
        "Quick-dry fabric",
        "Breathable design"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Red"],
      category: ["all","shirts"]
    },
    { id: 10, name: "Vintage T-Shirt", price: "$32.99",
      originalPrice: "$42.99", rating: 4.6, reviewCount: 88,
      description: "Classic vintage look with premium quality materials.",
      features: [
        "Retro design",
        "Premium materials",
        "Comfortable fit"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 11, name: "Modern T-Shirt", price: "$29.99",
      originalPrice: "$39.99", rating: 4.5, reviewCount: 79,
      description: "Sleek, modern design for contemporary tastes.",
      features: [
        "Contemporary style",
        "High-quality fabric",
        "Versatile design"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Green"],
      category: ["all","shirts"]
    },
    { id: 12, name: "Vintage brambora", price: "$32.99",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "Another vintage option with unique styling elements.",
      features: [
        "Classic vintage look",
        "Soft, comfortable fabric",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Brown"],
      category: ["all","shirts"]
    }
  ];