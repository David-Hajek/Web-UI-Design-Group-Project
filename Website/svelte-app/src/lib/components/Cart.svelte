<script>
      import { products, cart } from '$lib';
      import { page } from '$app/state';
      const productId = parseInt(page.params.id);
      // Find the product that matches the ID
  const product = products.find(p => p.id === productId) || {
    id: productId,
    image:"",
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
  console.log(product.name)
  console.log(product.image)
</script>

<section>
    <h2>Shopping Cart</h2>
    <div class="cart">
		{#if $cart.length}
			{#each $cart as item}
				<div class="flexible-grid">
					<p>{product.name}</p>
					<img src= "{product.image}">
					<input min="0" max="99" type="number" bind:value={item.quantity}/>
					<p>${product.price * 5}</p>
				</div>
			{/each}
		{:else}
			<p>Cart is empty. Add items to cart.</p>
		{/if}
	</div>
  </section>