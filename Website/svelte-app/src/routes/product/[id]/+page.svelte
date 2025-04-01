<script>
  import { page } from '$app/state';
  import { goto } from '$app/navigation';
  import { products} from '$lib';
  import { cart, removeFromCart, clearCart, addToCart } from '$lib';
  import { onMount } from 'svelte';

  // Get the product ID from the URL parameters
  const productId = parseInt(page.params.id);
  
  let reviewSurname = ["Dite", "Ruzicka", "Hajek", "Walichnowski", "Sykorova", "Dobias", "Dohnal", "Klos"]
  let reviewFirstName = ["David", "Tomas", "Daniel", "Tymek", "Elisabeth", "Pavel", "Jarda", "Miroslav"]
  let reviewRatingLowest = 0;
  let reviewRatingHighest = 5;

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function getRandomName() {
    const firstName = reviewFirstName[Math.floor(Math.random() * reviewFirstName.length)];
    const surname = reviewSurname[Math.floor(Math.random() * reviewSurname.length)];
    return `${firstName} ${surname}`;
  }

  // Create an array of reviews with random names and ratings
  let reviews = [
    {
      name: getRandomName(),
      text: "I HATE THIS SO MUCH",
      rating: getRandomArbitrary(reviewRatingLowest, reviewRatingHighest)
    },
    {
      name: getRandomName(),
      text: "This product exceeded my expectations!",
      rating: getRandomArbitrary(reviewRatingLowest, reviewRatingHighest)
    },
    {
      name: getRandomName(),
      text: "Not worth the price, quite disappointed",
      rating: getRandomArbitrary(reviewRatingLowest, reviewRatingHighest)
    },
    {
      name: getRandomName(),
      text: "Good quality but delivery took too long",
      rating: getRandomArbitrary(reviewRatingLowest, reviewRatingHighest)
    },
    {
      name: getRandomName(),
      text: "Perfect fit and comfortable to wear",
      rating: getRandomArbitrary(reviewRatingLowest, reviewRatingHighest)
    }
  ];


  let images = [1,2,3];
  let chosenImage = 1;

  // Find the product that matches the ID
  const product = products.find(p => p.id === productId) || {
    id: productId,
    name: ``,
    price: "",
    originalPrice: "",
    rating: 4.8,
    reviewCount: 124,
    description: "",
    features: [
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Navy"]
  };

  // State variables for product interactions
  let selectedSize = "M";
  let quantity = 1;
  let isAddedToCart = false;
  let isInWishlist = false;
  let isCartTabShown = false;

  // Function to go back to the products page
  function goBack() {
    goto('/');
  }

  // Function to handle adding to cart
  const handleAddToCart = () => {
    // Tymek Code
    addToCart(product, quantity);

    // David Code
    isAddedToCart = true;
    setTimeout(() => {
      isAddedToCart = false;
    }, 2000);

    isCartTabShown = true;
    console.log("Current cart:", $cart);
  };

  // Handle updating cart
  let total = 0;
  $: total = $cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")), 0);  // Calculate total whenever cart updates
  
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

<div class="cart-tab {isCartTabShown ? 'open' : ''}">
  <h2>Your Cart</h2>
  {#if $cart.length > 0}
    {#each $cart as item}
      <div class ="cart-item">
        <p>{item.name} x {item.quantity} - ${(item.quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}</p>
        <p><img class="cart-item-image" 
        src={item.image} 
        alt={item.name} />
        <button on:click={() => removeFromCart(item.id)}>Remove</button></p>
      </div>
      <hr class="cart-divider-line" />
    {/each}
    <p>Total: ${total.toFixed(2)}</p>
    <button on:click={clearCart}>Clear Cart</button>
  {:else}
    <p>Your cart is empty.</p>
  {/if}
  <button class="view-cart" on:click={() => goto('/cart')}>View Cart</button>
  <button class="close-cart" on:click={() => isCartTabShown = false}>Close Cart</button>
</div>

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
      {#if chosenImage === 1}
        <img 
          src="{product.image}" 
          alt={product.name} 
          class="product-image"  
        />
        {/if}
        {#if chosenImage === 2}
        <img 
          src="{product.image2}" 
          alt={product.name} 
          class="product-image"  
        />
        {/if}
        {#if chosenImage === 3}
        <img 
          src="{product.image3}" 
          alt={product.name} 
          class="product-image"  
        />
        {/if}
      </div>
      <div class="thumbnail-gallery">
        <div 
            class="thumbnail-item {chosenImage === 1 ? 'active' : ''}"
            on:click={() => chosenImage = 1}
        >
          <img src="{product.image}" alt="Thumbnail 1" />
        </div>
        <div 
            class="thumbnail-item {chosenImage === 2 ? 'active' : ''}"
            on:click={() => chosenImage = 2}
        >
          <img src="{product.image2}" alt="Thumbnail 2" />
        </div>
        <div 
            class="thumbnail-item {chosenImage === 3 ? 'active' : ''}"
            on:click={() => chosenImage = 3}
        >
          <img src="{product.image3}" alt="Thumbnail 3" />
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
          on:click={handleAddToCart}
        >
          {isAddedToCart ? '✓ Added to Cart' : 'Add to Cart'}
        </button>

        <!-- Need to add way to view cart after adding item -Tymek -->
        <!-- <button 
          class="add-to-wishlist {isInWishlist ? 'in-wishlist' : ''}" 
          on:click={toggleWishlist}
        >
          {isInWishlist ? '❤ In Wishlist' : 'Add to Wishlist'}
        </button> -->

      </div>
    </div>
  </div>
</div>

<h1 class = "reviews">Customer Reviews</h1>
<div class="review-container">
  {#each reviews as review}
    <div class="review-bubble">
      <h2 class="review-name">
        {review.name.toUpperCase()}
      </h2>
      <p class="review-text">{review.text}</p>
      <div class="stars-review">
        {#each Array(5) as _, i}
          <span class="review-stars-individual">{i < review.rating ? '★' : '☆'}</span>
        {/each}
      </div>
    </div>
  {/each}
</div>
<style>
  /* Main Layout */
  .product-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
   
    color: var(--text-color);
  }
  
  .reviews{
    text-align: center;
  }
  .review-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto, auto, auto;
    gap: 3rem;
    padding: 2rem 5.5rem;
    margin: 0 auto;
  }
  .review-bubble{
    background-color: rgb(54, 36, 58);
    border-radius: 20px;
  }
  .review-name{
    text-align: center;
    padding: 1rem;
  }
  .review-text{
    text-align: center;
  }
  .stars-review{

  margin: auto;
  padding: 1rem;
  }

  .review-stars-individual{
    color: var(--primary-color);
    font-size: 5rem;
    line-height: 1;
  }
  .breadcrumbs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--text-color);
    padding-bottom: 1rem;
  }
  
  .back-button {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
    --font-family: 'Unbounded', system-ui, sans-serif;
  }
  
  .back-button:hover {
    color: #000;
  }
  
  .breadcrumb-path {
    font-size: 0.85rem;
    color: var(--text-color);
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
    background-color: rgba(245, 245, 245, 0.055);
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
    border-color: var(--primary-color);
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
    color: var(--text-color);
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
    color: var(--text-color);
  }
  
  .original-price {
    font-size: 1rem;
    color: var(--text-color);
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
    color: var(--primary-color);
    font-size: 1.2rem;
    line-height: 1;
  }
  
  .review-count {
    font-size: 0.85rem;
    color: var(--secondary-color);
    margin-top: 0.25rem;
  }
  
  /* Product Description */
  .description p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    color: var(--secondary-color);
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
    color: var(--backround-color);
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Unbounded', system-ui, sans-serif;
  }
  
  .option-button:hover {
    background-color: #eaeaea;
  }
  
  .option-button.selected {
    background-color: var(--primary-color);
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
    color: var(--backround-color);
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
    color: var(--secondary-color);
  }
  
  .features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--primary-color);
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
    background-color: var(--text-color);
    color: var(--backround-color);
    flex: 2;
  }
  
  .add-to-cart:hover {
    background-color: var(--primary-color);
  }
  
  .add-to-cart.added {
    background-color: var(--primary-color);
    color: var(--text-color);
  }
  
  /* .add-to-wishlist {
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
    color: var(--primary-color);
    border-color: #ffcdd2;
  } */
  
  /* Cart tab */
  .cart-tab {
  color:#000;
  position: fixed;
  top: 0;
  right: -600px; /* Initially hidden off-screen */
  width: 600px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);
  transition: right 0.3s ease-in-out;
  z-index: 2;
}

  .cart-tab.open {
  right: 0; 
}

  .view-cart, .close-cart{
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background-color: var(--text-color);
    color: var(--background-color);

  }
  
  .view-cart:hover, .close-cart:hover{
    background-color: var(--primary-color);
  }

  .cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.cart-item-image {
  width: 200px;
  height: 200px;
  object-fit: fill;
  margin-right: 10px;
}

.cart-item-details {
  flex: 1;
}

.cart-divider-line {
  width: 100%;
  border: none;
  border-top: 3px solid #ccc; /* Divider styling */
  margin: 10px 0; /* Space above and below the line */
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
