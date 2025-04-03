import { writable } from "svelte/store";

 export let product = writable(null);

// Array of products (same as in the main page)
export const products = [
    { id: 1, name: "I survived T-Shirt", price: "$2900.99", image: "/images/clothing/shirts/fluid.png", image2: "/images/clothing/shirts/fluid.png", image3: "/images/clothing/shirts/fluid.png", 
      originalPrice: "$3900.99", rating: 4.8, reviewCount: 124,
      description: "This is a high-quality product made with premium materials. Perfect for everyday use, this product combines style and function in a seamless design. The attention to detail is evident in every aspect, from the stitching to the finish. This product can only be purchased for a normal price, if the user has survived the dream ending without the use of Fluid Sac.",
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
      category: ["all","shirts"],
    },
    { id: 2, name: "Havel T-Shirt", price: "1989,- CZK", image: "/images/clothing/shirts/havel.png", image2: "/images/clothing/shirt.png", image3: "/images/clothing/pavel.jfif",
      originalPrice: "", rating: 4.5, reviewCount: 98,
      description: "This is a high-quality product made with premium materials. Perfect for everyday use, this product combines style and function in a seamless design.",
      features: [
        "Premium quality materials",
        "Durable construction",
        "Modern design",
        "Easy to maintain"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","shirts"]
    },
    { id: 3, name: "Split Cargo Sweatpants", price: "$34.99", image: "/images/clothing/pants/black_and_white.png",
      originalPrice: "$44.99", rating: 4.9, reviewCount: 156,
      description: "Stylish sweats.",
      features: [
        "Premium quality materials",
        "Durable construction",
        "Modern design",
        "Easy to maintain",
        "Eco-friendly production"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","bottoms"]
    },
    { id: 4, name: "Trusty Boots", price: "$27.99", image: "/images/clothing/boots/trusty.png",
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
    { id: 5, name: "Platform Boots", price: "$32.99", image: "/images/clothing/boots/tall.png",
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
      category: ["all","boots"]
    },
    { id: 6, name: "Daily Boots", price: "$29.99", image:"/images/clothing/boots/daily.png",
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
      category: ["all","boots"]
    },
    { id: 7, name: "Cat Stare Hoodies", price: "$32.99", image:"/images/clothing/hoodies/cat_stare.png",
      originalPrice: "$42.99", rating: 4.5, reviewCount: 92,
      description: "Another classic vintage option with a unique twist.",
      features: [
        "Retro design",
        "Soft cotton blend",
        "Pre-washed for comfort"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","hoodies"]
    },
    { id: 8, name: "Swept Sweater", price: "$32.99", image:"/images/clothing/sweaters/swept.png",
      originalPrice: "$42.99", rating: 4.3, reviewCount: 67,
      description: "Vintage-inspired design with modern comfort features.",
      features: [
        "Retro aesthetics",
        "Comfortable material",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","sweaters"]
    },
    { id: 9, name: "Bug Sweater", price: "$27.99", image:"/images/clothing/sweaters/bug.png",
       rating: 4.7, reviewCount: 103,
      description: "Performance t-shirt designed for active lifestyles.",
      features: [
        "Moisture-wicking",
        "Quick-dry fabric",
        "Breathable design"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Red"],
      category: ["all","sweaters"]
    },
    { id: 10, name: "Hearts Totebag", price: "$32.99", image:"/images/clothing/accessories/hearts.png",
      originalPrice: "$42.99", rating: 4.6, reviewCount: 88,
      description: "Classic vintage look with premium quality materials.",
      features: [
        "Retro design",
        "Premium materials",
        "Comfortable fit"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy"],
      category: ["all","accessories"]
    },
    { id: 11, name: "Pavlik Pants", price: "$29.99", image:"/images/clothing/pants/pavlik.png",
      originalPrice: "$39.99", rating: 4.5, reviewCount: 79,
      description: "Sleek, modern design for contemporary tastes.",
      features: [
        "Contemporary style",
        "High-quality fabric",
        "Versatile design"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Green"],
      category: ["all","bottoms"]
    },
    { id: 12, name: "I <3 Kapr hoodie", price: "$32.99", image:"/images/clothing/hoodies/Hoodie_mockup_front.png", image2:"/images/clothing/hoodies/Hoodie_mockup_back.png",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "Another vintage option with unique styling elements.",
      features: [
        "Classic vintage look",
        "Soft, comfortable fabric",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Brown"],
      category: ["all","hoodies"]
    },
    { id: 13, name: "Artist Hat", price: "$32.99", image:"/images/clothing/accessories/artist-hat.png", image2:"/images/clothing/hoodies/Hoodie_mockup_back.png",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "Another vintage option with unique styling elements.",
      features: [
        "Classic vintage look",
        "Soft, comfortable fabric",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Brown"],
      category: ["all","accessories"]
    },
    { id: 14, name: "Kapr Pin", price: "$32.99", image:"/images/clothing/accessories/kapr-pin.png", image2:"/images/clothing/hoodies/Hoodie_mockup_back.png",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "Another vintage option with unique styling elements.",
      features: [
        "Classic vintage look",
        "Soft, comfortable fabric",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Brown"],
      category: ["all","accessories"]
    },
    { id: 15, name: "Pivo Socks", price: "$32.99", image:"/images/clothing/accessories/pivo.png", image2:"/images/clothing/hoodies/Hoodie_mockup_back.png",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "Another vintage option with unique styling elements.",
      features: [
        "Classic vintage look",
        "Soft, comfortable fabric",
        "Durable construction"
      ],
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "White", "Navy", "Brown"],
      category: ["all","accessories"]
    }
    
  ];