<script>
import { cart, decreaseItemQuantity, increaseItemQuantity, removeFromCart, clearCart } from '$lib';
import { goto } from '$app/navigation';
import { base } from "$app/paths";

    // Reactive total calculation
    $: total = $cart.reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
      0
    );

    let isCheckoutMsgVisible = false;

    function checkoutPressed()
    {
      console.log("checkout button pressed")
      isCheckoutMsgVisible = true;
      setTimeout(() => {
        isCheckoutMsgVisible = false;
      }, 3000);
    }

    function goBack() {
    goto(`${base}/`);
  }


  </script>
  
  <nav class="breadcrumbs">
    <button class="back-button" on:click={goBack}>&lt;&nbsp;&nbsp;Back to Homepage</button>
  </nav>

  {#if isCheckoutMsgVisible}
  <div class="checkout-popup">
    <p>Checkout functionality is currently unavailable</p>
  </div>
{/if}

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
                <button class="remove-button"on:click={() => removeFromCart(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="remove-icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" fill="none"/>
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg></button>
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

  </div>
  <div>
   <button class="clear-cart" on:click={clearCart}>Clear Cart</button>
   <button class="checkout-button" on:click={checkoutPressed}>Checkout</button>
  </div>

<style>

.checkout-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 1rem 2rem;
    z-index: 2;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.quantity-selector {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 4px;
    width: fit-content;
    border: 1px solid #e0e0e0;
    font-family: 'Unbounded', system-ui, sans-serif;
    margin-left: 1.25rem;
  }
  
  .quantity-button, .remove-button {
    background: none;
    border: none;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: #444;
    transition: all 0.2s ease;
    font-family: 'Unbounded', system-ui, sans-serif;
  }
  
  .quantity-button:hover{
    background-color: #e0e0e0;
  }
  
  .remove-button:hover{
    background-color: var(--primary-color);
  }

  .remove-button:hover .remove-icon {
    color: white;
    fill: currentColor;
}

  .quantity-value {
    width: 2.5rem;
    text-align: center;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--backround-color);
  }
  
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
.cart-page p {
  margin-left: 1.75rem;
}

.cart-page h4 {
  margin-left: 2.5rem;
}

  .clear-cart, .checkout-button {
    margin-top: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    background-color: var(--text-color);
    color: var(black);
    font-family: 'Unbounded', system-ui, sans-serif;
  }
  
  .clear-cart:hover, .checkout-button:hover{
    background-color: var(--primary-color);
    color: white;
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

.back-button {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: var(--nav-text-size);
    cursor: pointer;
    padding: 0.5rem 0;
    transition: color 0.2s ease;
    font-family: var(--font-family);

  }
  
  .back-button:hover {
    color: var(--primary-color);
  }

  .breadcrumb-path {
    font-size: var(--nav-text-size);
    color: var(--text-color);
  }

  .breadcrumbs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: solid var(--text-color);
    border-bottom-width: var(--line-width);
    padding-bottom: 1rem;
  }
  @media (max-width: 768px) {

    .back-button {
      font-size: 2vh;
    }
  }
  </style>