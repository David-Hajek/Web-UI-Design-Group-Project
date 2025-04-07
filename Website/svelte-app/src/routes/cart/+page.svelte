<script>
import { cart, decreaseItemQuantity, increaseItemQuantity, removeFromCart, clearCart } from '$lib';
  
    // Reactive total calculation
    $: total = $cart.reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
      0
    );
  </script>
  
  <h1>Your Cart</h1>
  <div class="cart-page">
    {#if $cart.length > 0}
      {#each $cart as item}
        <div class ="cart-item">
          <div>
            <p>{item.name} x {item.quantity} - ${(item.quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}</p>
            <div>
              <h4>Quantity:</h4>
                <div class="quantity-selector">
                  <button class="quantity-button" on:click={decreaseItemQuantity(item.id)}>-</button>
                  <span class="quantity-value">{item.quantity}</span>
                  <button class="quantity-button" on:click={increaseItemQuantity(item.id)}>+</button>
                  <button on:click={() => removeFromCart(item.id)}>X</button>
                </div>
            </div>
          </div>
          <div>
            <img class="cart-item-image" 
            src={item.image} 
            alt={item.name}/>
          </div>
        </div>
        <hr class="cart-divider-line" />
      {/each}
      <p>Total: ${total.toFixed(2)}</p>

    {:else}
      <p>Your cart is empty.</p>
    {/if}
    <button class="clear-cart" on:click={clearCart}>Clear Cart</button>
  </div>

  <style>

  .cart-page {
  color:#000;
  background-color: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.2);
  transition: right 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
}

  .cart-tab.open {
  right: 0; 
}

 .cart-tab-content {
  flex: 1; 
  overflow-y: auto; 
  padding: 1rem; 
}

  .view-cart, .close-cart, .clear-cart {
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

  .close-cart{
    float: right;
  }
  
  .view-cart:hover, .close-cart:hover, .clear-cart:hover{
    background-color: var(--primary-color);
  }

  .cart-item {
  display: flex;
  margin-top: 10px;
  justify-content: space-between; /* Space between text and image */
  align-items: center; /* Vertically center items */
}

.cart-item-details {
  flex: 1;
}

.cart-divider-line {
  width: 100%;
  border: none;
  border-top: 3px solid #ccc;
  margin: 10px 0;
}

.cart-tab p {
  margin-left: 0.5rem;
}

.cart-item-image {
  width: 200px;
  height: 200px;
  object-fit: fill; /* Prevent distortion of images */
  margin-left: 10px; /* Add some space between the text and the image */

}

.cart-tab h2 {
    font-weight: 600;
    margin-left: 2rem;
    margin-top: 0.5rem;
}

.cart-tab h4 {
    font-weight: 600;
    margin-left: 1rem;
}

  </style>