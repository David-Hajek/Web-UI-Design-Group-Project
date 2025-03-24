<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  // Get the product id from the route parameters
  const productId = $page.params.id;

  const product = {
    id: productId,
    name: `Product ${productId}`,
    price: "$99.99",
    originalPrice: "$129.99",
    rating: 50000.8,
    reviewCount: 12400000000,
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
    colors: ["Black", "White", "Navy"]
  };

  // State variables for product interactions
  let selectedSize = "M";
  let quantity = 1;
  let isAddedToCart = false;
  let isInWishlist = false;

  // Function to go back to the products page
  function goBack() {
    goto('/');
  }

  // Function to handle adding to cart
  function addToCart() {
    isAddedToCart = true;
    setTimeout(() => {
      isAddedToCart = false;
    }, 2000);
  }

  // Function to toggle wishlist
  function toggleWishlist() {
    isInWishlist = !isInWishlist;
  }

  // Handle quantity changes
  function decreaseQuantity() {
    if (quantity > 1) quantity -= 1;
  }

  function increaseQuantity() {
    quantity += 1;
  }


</script>

<div class="product-detail-container">
  <nav class="breadcrumbs">
    <button class="back-button" on:click={goBack}>← Back to Products</button>
    <div class="breadcrumb-path">Home / Products / {product.name}</div>
  </nav>

  <div class="product-content">
    <div class="product-image-section">
      <div 
        class="product-image-container" 
      >
        <img 
          src="/images/clothing/shirt.png" 
          alt={product.name} 
          class="product-image"  
        />
      </div>
      <div class="thumbnail-gallery">
        <div class="thumbnail-item active">
          <img src="/images/clothing/shirt.png" alt="Thumbnail 1" />
        </div>
        <div class="thumbnail-item">
          <img src="/images/clothing/shirt.png" alt="Thumbnail 2" />
        </div>
        <div class="thumbnail-item">
          <img src="/images/clothing/shirt.png" alt="Thumbnail 3" />
        </div>
      </div>
    </div>
    
    <div class="product-info">
      <h1>{product.name}</h1>
      
      <div class="product-meta">
        <div class="price-container">
          <span class="price">{product.price}</span>
          {#if product.originalPrice}
            <span class="original-price">{product.originalPrice}</span>
          {/if}
        </div>
        
        <div class="rating">
          <div class="stars">
            {#each Array(5) as _, i}
              <span class="star">{i < Math.floor(product.rating) ? '★' : (i < product.rating ? '★' : '☆')}</span>
            {/each}
          </div>
          <span class="review-count">{product.rating} ({product.reviewCount} reviews)</span>
        </div>
      </div>
      
      <div class="description">
        <p>{product.description}</p>
      </div>
      
      <div class="product-options">
        <div class="option-section">
          <h3>Size</h3>
          <div class="option-buttons">
            {#each product.sizes as size}
              <button 
                class="option-button {selectedSize === size ? 'selected' : ''}" 
                on:click={() => selectedSize = size}
              >
                {size}
              </button>
            {/each}
          </div>
        </div>
        
      
        <div class="option-section">
          <h3>Quantity</h3>
          <div class="quantity-selector">
            <button class="quantity-button" on:click={decreaseQuantity}>-</button>
            <span class="quantity-value">{quantity}</span>
            <button class="quantity-button" on:click={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
      
      <div class="features">
        <h3>Features</h3>
        <ul>
          {#each product.features as feature}
            <li>{feature}</li>
          {/each}
        </ul>
      </div>
      
      <div class="actions">
        <button 
          class="add-to-cart {isAddedToCart ? 'added' : ''}" 
          on:click={addToCart}
        >
          {isAddedToCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
        <button 
          class="add-to-wishlist {isInWishlist ? 'in-wishlist' : ''}" 
          on:click={toggleWishlist}
        >
          {isInWishlist ? '❤ In Wishlist' : 'Add to Wishlist'}
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  /* Main Layout */
  .product-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #333;
  }
  
  .breadcrumbs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }
  
  .back-button {
    background: none;
    border: none;
    color: #555;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
  }
  
  .back-button:hover {
    color: #000;
  }
  
  .breadcrumb-path {
    font-size: 0.85rem;
    color: #777;
  }
  
  .product-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  /* Product Images and Gallery */
  .product-image-section {
    display: flex;
    flex-direction: column;
  }
  
  .product-image-container {
    position: relative;
    background-color: #f9f9f9;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .product-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.4s ease;
  }
  
 
  
  .thumbnail-gallery {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
  }
  
  .thumbnail-item {
    flex: 1;
    border-radius: 6px;
    overflow: hidden;
    border: 2px solid transparent;
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  
  .thumbnail-item:hover {
    opacity: 0.9;
  }
  
  .thumbnail-item.active {
    opacity: 1;
    border-color: #3d81ee;
  }
  
  .thumbnail-item img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* Product Info */
  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .product-info h1 {
    font-size: 1.8rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
    color: #222;
  }
  
  .product-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  /* Price Display */
  .price-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #222;
  }
  
  .original-price {
    font-size: 1rem;
    color: #999;
    text-decoration: line-through;
  }
  
  /* Rating Stars */
  .rating {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .stars {
    display: flex;
    gap: 0.1rem;
  }
  
  .star {
    color: #ffb700;
    font-size: 1.2rem;
    line-height: 1;
  }
  
  .review-count {
    font-size: 0.85rem;
    color: #666;
    margin-top: 0.25rem;
  }
  
  /* Product Description */
  .description p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    color: #555;
  }
  
  /* Product Options */
  .product-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .option-section h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
  }
  
  .option-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  /* Size Selector */
  .option-button {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    color: #444;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  .option-button:hover {
    background-color: #eaeaea;
  }
  
  .option-button.selected {
    background-color: #222;
    color: white;
    border-color: #222;
  }
  
  
  /* Quantity Selector */
  .quantity-selector {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    width: fit-content;
    border: 1px solid #e0e0e0;
  }
  
  .quantity-button {
    background: none;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: #444;
    transition: all 0.2s ease;
  }
  
  .quantity-button:hover {
    background-color: #e0e0e0;
  }
  
  .quantity-value {
    width: 2.5rem;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
  }
  
  /* Features List */
  .features h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 0 0 0.75rem 0;
  }
  
  .features ul {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }
  
  .features li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: #555;
  }
  
  .features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4caf50;
    font-weight: bold;
  }
  
  /* Action Buttons */
  .actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .add-to-cart, .add-to-wishlist {
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
  }
  
  .add-to-cart {
    background-color: #4caf50;
    color: white;
    flex: 2;
  }
  
  .add-to-cart:hover {
    background-color: #43a047;
  }
  
  .add-to-cart.added {
    background-color: #388e3c;
  }
  
  .add-to-wishlist {
    background-color: #f5f5f5;
    color: #666;
    flex: 1;
    border: 1px solid #e0e0e0;
  }
  
  .add-to-wishlist:hover {
    background-color: #eaeaea;
  }
  
  .add-to-wishlist.in-wishlist {
    background-color: #ffebee;
    color: #e53935;
    border-color: #ffcdd2;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .product-content {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    
    .product-meta {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
    
    .rating {
      align-items: flex-start;
    }
    
    .actions {
      flex-direction: column;
    }
  }
  
  @media (max-width: 480px) {
    .product-detail-container {
      padding: 1.25rem 1rem;
    }
    
    .breadcrumbs {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    
    .option-buttons {
      gap: 0.25rem;
    }
    
    .product-image-container {
      margin-bottom: 0.5rem;
    }
    
    .thumbnail-gallery {
      gap: 0.5rem;
    }
    
    .product-info h1 {
      font-size: 1.5rem;
    }
    
    .price {
      font-size: 1.25rem;
    }
  }
</style>
