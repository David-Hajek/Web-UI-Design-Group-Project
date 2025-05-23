import { writable } from "svelte/store";

 export let product = writable(null);

// Array of products (same as in the main page)
export const products = [
    { id: 1, name: "I survived T-Shirt", price: "$29.99", image: "/images/clothing/shirts/fluid.png", image2: "/images/clothing/shirts/fluid2.png", image3: "/images/clothing/shirts/fluid3.png", 
      originalPrice: "$290.99", rating: 4.8, reviewCount: 124,
      description: "This is a high-quality product made with premium materials. Perfect for everyday use, this product combines style and function in a seamless design. The attention to detail is evident in every aspect, from the stitching to the finish. This product can only be purchased for a normal price, if the user has survived the dream ending without the use of Fluid Sac.",
      features: [
        "100% cotton",
        "Short-sleeved",
        "Uni-sex",
        "Eco-friendly production"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","shirts"],
    },
    { id: 2, name: "Havel T-Shirt", price: "1989,- CZK", image: "/images/clothing/shirts/havel.png", image2: "/images/clothing/shirts/havel2.png", image3: "/images/clothing/shirts/havel3.png",
      originalPrice: "", rating: 4.5, reviewCount: 98,
      description: "This is a high-quality product made with premium materials. Suited for people of all ages, genders and body-types.",
      features: [
        "100% velvet",
        "Short-sleeved",
        "Uni-sex",
        "Eco-friendly production"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","shirts"]
    },
    { id: 3, name: "Split Cargo Sweatpants", price: "$34.99", image: "/images/clothing/pants/black_and_white.png", image2: "/images/clothing/pants/black_and_white2.png", image3: "/images/clothing/pants/black_and_white3.png",
      rating: 4.9, reviewCount: 156,
      description: "Stylish sweats. Simple but interesting. And very comfortable - perfect for everyday use.",
      features: [
        "Breathable material",
        "Unique design",
        "Washing machine-friendly",
        "Eco-friendly production"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","bottoms"]
    },
    { id: 4, name: "Trusty Boots", price: "$3.33", image: "/images/clothing/boots/trusty.png", image2: "/images/clothing/boots/trusty2.png", image3: "/images/clothing/boots/trusty3.png",
      originalPrice: "$33.33", rating: 4.6, reviewCount: 112,
      description: "These boots have seen a lot, yet they are still standing. What might they be hiding for their next owner?",
      features: [
        "Undestructable",
        "Real leather",
        "Special abilities",
      ],
      sizes: ["36", "38", "40", "42", "44"],
      category: ["all","boots"]
    },
    { id: 5, name: "Platform Boots", price: "$119.99", image: "/images/clothing/boots/tall.png", image2: "/images/clothing/boots/tall2.png", image3: "/images/clothing/boots/tall3.png",
      rating: 4.7, reviewCount: 89,
      description: "These platform black boots feature a chunky sole and a simple, versatile design. Made with durable materials, they offer comfort and support for everyday wear. The sleek black color makes them easy to pair with various outfits, from jeans to skirts.",
      features: [
        "Real Leather",
        "Durable platform",
        "Eco-friendly production",
        "Alternative"
      ],
      sizes: ["36", "38", "40", "42", "44"],
      category: ["all","boots"]
    },
    { id: 6, name: "Daily Boots", price: "$109.99", image:"/images/clothing/boots/daily.png", image2:"/images/clothing/boots/daily2.png", image3:"/images/clothing/boots/daily3.png",
      rating: 4.4, reviewCount: 76,
      description: "These brown daily boots are designed for comfort and practicality. With a sturdy construction and a classic look, they’re perfect for everyday wear. The neutral brown color pairs easily with a variety of outfits, offering both style and durability for your daily routine.",
      features: [
        "Real Leather",
        "Free returns",
        "Eco-friendly production",
        "Daily wear"
      ],
      sizes: ["36", "38", "40", "42", "44"],
      category: ["all","boots"]
    },
    { id: 7, name: "Cat Stare Hoodie", price: "$32.99", image:"/images/clothing/hoodies/cat_stare.png", image2:"/images/clothing/hoodies/cat_stare2.png", image3:"/images/clothing/hoodies/cat_stare3.png",
      rating: 4.5, reviewCount: 92,
      description: "This hoodie features a printed image of a cat staring directly at you, adding a fun and quirky touch to your wardrobe. Made from soft, comfortable fabric, it’s perfect for casual wear. The relaxed fit and cozy material make it ideal for staying warm and stylish..",
      features: [
        "Cat",
        "100% cotton",
        "Cat"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","hoodies"]
    },
    { id: 8, name: "Swept Sweater", price: "$39.99", image:"/images/clothing/sweaters/swept.png", image2:"/images/clothing/sweaters/swept2.png", image3:"/images/clothing/sweaters/swept3.png",
      originalPrice: "$49.99", rating: 4.3, reviewCount: 67,
      description: "This sweater features a unique graphic of a tymek on the floor being swept by a brush. The design adds a playful and quirky touch to your wardrobe. Made from soft, cozy fabric, it’s perfect for casual wear and staying comfortable while making a statement.",
      features: [
        "100% cotton",
        "Breathable material",
        "Unsweepable"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","sweaters"]
    },
    { id: 9, name: "Bug Sweater", price: "$27.99", image:"/images/clothing/sweaters/bug.png", image2:"/images/clothing/sweaters/bug2.png", image3:"/images/clothing/sweaters/bug3.png",
       rating: 4.7, reviewCount: 103,
      description: "This sweater features a bold graphic of cockroaches inspired by Gregor Samsa, adding a literary and edgy touch to your style. Made from soft, comfortable fabric, it’s perfect for casual wear with a unique twist. A great conversation piece for fans of classic literature and quirky designs..",
      features: [
        "100% cotton",
        "Eco-friendly",
        "Washing machine-friendly"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","sweaters"]
    },
    { id: 10, name: "Hearts Totebag", price: "$22.99", image:"/images/clothing/accessories/hearts.png", image2:"/images/clothing/accessories/hearts2.png", image3:"/images/clothing/accessories/hearts3.png",
      rating: 4.6, reviewCount: 88,
      description: "This tote bag features pixelated game-like hearts, adding a retro, fun vibe to your style. The red handle provides a bold contrast, making it both eye-catching and practical. Perfect for carrying your essentials, this bag combines playful design with everyday functionality.",
      features: [
        "Retro",
        "Gamer",
        "Durable material"
      ],
      sizes: ["One Size"],
      category: ["all","accessories"]
    },
    { id: 11, name: "Pavlik Pants", price: "$29.99", image:"/images/clothing/pants/pavlik.png", image2:"/images/clothing/pants/pavlik2.png", image3:"/images/clothing/pants/pavlik3.png",
      rating: 4.5, reviewCount: 79,
      description: "PAVLIK! A must-have piece for all wardrobes. Perfect for sports, outside and indoor wear. Adjustable waist size.",
      features: [
        "100% cotton",
        "Pockets",
        "Versatile design",
        "Unisex"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","bottoms"]
    },
    { id: 12, name: "I <3 Kapr hoodie", price: "$32.99", image:"/images/clothing/hoodies/Hoodie_mockup_front.png", image2:"/images/clothing/hoodies/Hoodie_mockup_back.png", image3:"/images/clothing/hoodies/Hoodie_mockup_closeup.png",
      originalPrice: "$42.99", rating: 4.4, reviewCount: 71,
      description: "This black hoodie features a bold white fish graphic, adding a minimalist yet striking design to your wardrobe. Made from soft, comfortable fabric, it’s perfect for casual wear while keeping you warm. The simple yet eye-catching design pairs easily with a variety of outfits.",
      features: [
        "100% cotton",
        "Enviroment-friendly production",
        "Uni-sex"
      ],
      sizes: ["S", "M", "L", "XL"],
      category: ["all","hoodies"]
    },
    { id: 13, name: "Artist Hat", price: "$32.99", image:"/images/clothing/accessories/artist-hat.png", image2:"/images/clothing/accessories/artist-hat2.png", image3:"/images/clothing/accessories/artist-hat3.png",
      rating: 4.4, reviewCount: 71,
      description: "A hat for all artists. Let yourself cook.",
      features: [
        "Uni-sex",
        "Breathable material",
        "Enviromental-friendly production"
      ],
      sizes: ["One Size"],
      category: ["all","accessories"]
    },
    { id: 14, name: "Kapr Pin", price: "$12.99", image:"/images/clothing/accessories/kapr-pin.png", image2:"/images/clothing/accessories/kapr-pin2.png", image3:"/images/clothing/accessories/kapr-pin3.png",
      rating: 4.4, reviewCount: 71,
      description: "Add a subtle touch of personality to your accessories with this fish-shaped pin. Crafted with fine details and a sleek finish, it’s the perfect way to elevate your jacket, bag, or hat. A simple yet stylish addition for anyone who appreciates unique, minimalist designs..",
      features: [
        "Unique",
        "Durable construction",
        "Tight hold"
      ],
      sizes: ["One Size"],
      category: ["all","accessories"]
    },
    { id: 15, name: "Pivo Socks", price: "$22.99", image:"/images/clothing/accessories/pivo.png", image2:"/images/clothing/accessories/pivo2.png", image3:"/images/clothing/accessories/pivo3.png",
      originalPrice: "$32.99", rating: 4.4, reviewCount: 71,
      description: "These socks feature a playful beer print, bringing a lighthearted touch to your everyday style. Made from soft, breathable fabric, they offer comfort and a bit of humor with each step. Perfect for relaxing or adding some fun to your casual look. For all beer lovers.",
      features: [
        "100% cotton",
        "Enviromental-friendly production",
        "Uni-sex"
      ],
      sizes: ["36", "38", "40", "42", "44"],
      category: ["all","accessories"]
    }
    
  ];