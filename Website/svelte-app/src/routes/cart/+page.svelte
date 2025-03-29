<script>
  import { cart } from '$lib';
  
    // Reactive total calculation
    $: total = $cart.reduce(
      (sum, item) => sum + item.quantity * parseFloat(item.price.replace("$", "")),
      0
    );
  
    const removeFromCart = (productId) => {
      cart.update((items) => items.filter((item) => item.id !== productId));
    };
  
    const clearCart = () => {
      cart.set([]);
    };
  </script>
  
  <div>
    <h1>Your Cart</h1>
    {#if $cart.length > 0}
      {#each $cart as item}
        <div>
          <p>{item.name} x {item.quantity} - ${(item.quantity * parseFloat(item.price.replace("$", ""))).toFixed(2)}</p>
          <button on:click={() => removeFromCart(item.id)}>Remove</button>
        </div>
      {/each}
      <p>Total: ${total.toFixed(2)}</p>
      <button on:click={clearCart}>Clear Cart</button>
    {:else}
      <p>Your cart is empty.</p>
    {/if}
  </div>