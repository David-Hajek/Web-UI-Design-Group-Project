<script>
	import { goto } from "$app/navigation";

    // Array of products for easy maintenance
    const products = [
        { id: 1, name: "Classic T-Shirt", price: "$29.99", image: "/images/clothing/shirt.png"},
        { id: 2, name: "Casual T-Shirt", price: "$24.99", image: "/images/clothing/richard.webp"},
        { id: 3, name: "Premium T-Shirt", price: "$34.99", image: "/images/clothing/dobik.jfif" },
        { id: 4, name: "Sport T-Shirt", price: "$27.99", image: "/images/clothing/pavel.jfif" },
        { id: 5, name: "Vintage T-Shirt", price: "$32.99", image: "/images/clothing/pavlik.png" },
        { id: 6, name: "Modern T-Shirt", price: "$29.99" },
        { id: 7, name: "Vintage T-Shirt", price: "$32.99" },
        { id: 8, name: "Vintage T-Shirt", price: "$32.99" },
        { id: 9, name: "Sport T-Shirt", price: "$27.99" },
        { id: 10, name: "Vintage T-Shirt", price: "$32.99" },
        { id: 11, name: "Modern T-Shirt", price: "$29.99" },
        { id: 12, name: "Vintage T-Shirt", price: "$32.99" }
    ];

    // Navigation function to product detail page
    function navigateToProduct(id) {
        goto(`/product/${id}`);
    }
</script>
  
  <main>
    <h1>Clothing Collection</h1>
    
    <div class="grid">
      <!-- Use {#each} to iterate through products -->
      {#each products as product}
        <div 
          class="grid-item" 
          on:click={() => navigateToProduct(product.id)} 
          on:keydown={(e) => e.key === 'Enter' && navigateToProduct(product.id)}
          role="button" 
          tabindex="0"
        >
          <div class="image-container">
            <img src={product.image} alt="{product.name}" />
          </div>
          <h3>{product.name}</h3>
          <p class="price">{product.price}</p>
        </div>
      {/each}
    </div>
  </main>
  
  <style>
    main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-weight: 600;
      color: var(--text-color);
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 0.8fr);
      gap: 2rem;
    }
    
    .grid-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
      border-radius: 8px;
      padding: 1rem;
      cursor: pointer;
      background-color: var(--text-color);
    }
    
    .grid-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      background-color: var(--primary-color);
    }

    .grid-item:focus {
      outline: 2px solid var(--text-color);
      background-color: var(--secondary-color);
    }
    
    .image-container {
      position: relative;
      width: 100%;
      overflow: hidden;
      aspect-ratio: 1;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .grid-item:hover img {
      transform: scale(1.05);
    }
    
    h3 {
      color: #000000;
      margin: 0.5rem 0;
      font-weight: 500;
    }
    
    .price {
      color: var(--secondary-color);
      font-weight: 600;
    }
    
    /* Responsive design */
    @media (max-width: 900px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 600px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  </style>