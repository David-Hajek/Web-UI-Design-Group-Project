<script>
	import { goto } from "$app/navigation";
  import { products } from '$lib';
  import { reveal } from 'svelte-reveal';
    
    // Navigation function to product detail page
    function navigateToProduct(id) {
        goto(`/product/${id}`);
    }

    let chosenCategory = "all";
    let searchText = "";
    let categoryDelay = 60;

</script>
<div class="nav-search-container">
  <nav>
      <ul>
          <li use:reveal={{ preset: "slide", delay: categoryDelay }}><button on:click={() => chosenCategory ="all"}  >ALL</button></li> <!-- set chosenCategory based on which button is clicked -->
          <li use:reveal={{ preset: "slide", delay: categoryDelay*2}}><button on:click={() => chosenCategory ="shirts"}>SHIRTS</button></li>
          <li use:reveal={{ preset: "slide", delay: categoryDelay*3 }}><button on:click={() => chosenCategory ="hoodies"}>HOODIES</button></li>
          <li use:reveal={{ preset: "slide", delay: categoryDelay *4 }}><button on:click={() => chosenCategory ="sweaters"}>SWEATERS</button></li>
          <li use:reveal={{ preset: "slide", delay: categoryDelay *5 }}><button on:click={() => chosenCategory ="bottoms"}>BOTTOMS</button></li>
          <li use:reveal={{ preset: "slide", delay: categoryDelay*6 }}><button on:click={() => chosenCategory ="boots"}>BOOTS</button></li>
          <li use:reveal={{ preset: "slide", delay: categoryDelay*7 }}><button on:click={() => chosenCategory ="accessories"}>ACCESSORIES</button></li>
      </ul>
  </nav>

  <div class="search-container" use:reveal={{ preset: "slide", delay: categoryDelay*8}}>
  <div class="cart-container">
    <a href="/cart">CART</a>
  </div>
  <div class="search-container">
      <input 
          type="search" bind:value={searchText}
          placeholder="Search..."
      />
      <!--I can explain this in class for you guys if it looks confusing-->
      <button class="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <!-- we can eventually replace this with an icon-->
      </button>
  </div>
</div>
</div>
  <main>
    
    <h1>{chosenCategory.toUpperCase()}</h1> <!--use:reveal={{ preset: "slide" }}-->
    
    <div class="grid" use:reveal={{ preset: "slide", threshold: 0.1}}>
      <!-- Use {#each} to iterate through products -->
      {#each products as product}
        {#each product.category as category} <!-- go through the list of categories for each item, and if the category is equal to the one that has been selected, show those items -->
          {#if category === chosenCategory}
              {#if !searchText || product.name.toLowerCase().includes(searchText.toLowerCase())} <!-- if searching, check for similarity and only show items that include the search string -->
                
              <div 
                  class="grid-item" 
                  on:click={() => navigateToProduct(product.id)} 
                  on:keydown={(e) => e.key === 'Enter' && navigateToProduct(product.id)}
                  role="button" 
                  tabindex="0"
                >
                  <div class="image-container" >
                    <img src={product.image} alt="{product.name}" />
                  </div>
                  <h3>{product.name}</h3>
                  <p class="price">{product.price}</p>
                </div>
                {/if}
              {/if}
        {/each}
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
      height: 450px;
    }
    
    .grid-item:hover {
      transform: translateY(-5px);
      background-color: var(--primary-color);
    }

    .grid-item:focus {
      background-color: var(--secondary-color);
    }
    
    .image-container {
    position: relative;
    overflow: visible; /* Ensure the blur is not cut off */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 350px;
}

    .image-container img {
    transition: transform 0.3s ease, filter 0.3s ease; 
    filter: drop-shadow(0 0 50px rgba(144,144,144,0.35)); /* could be removed, but it might cause it to be unreadable */
    }

    .image-container img:hover {
    transform: scale(1.1); 
    filter: drop-shadow(0 0 10px var(--lighter-primary-color)); /* glow effect */
    }
    
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .grid-item:hover {
    background: radial-gradient(circle, var(--lighter-primary-color) 0%, var(--backround-color) 0%);
    border: none; /* Remove solid borders */
    }
    
    h3 {
      color: var(--text-color);
      margin: 0.5rem 0;
      font-weight: 500;
    }
    
    .price {
      color: var(--secondary-color);
      font-weight: 600;
    }
    
    .search-container {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        position: relative;
        font-size: var(--nav-text-size);
    }

    .search-container input {
        background-color: var(--backround-color);
        border: 2px solid var(--secondary-color);
        border-width: var(--line-width);
        border-radius: 6px;
        padding: 0.5rem 2.5rem 0.5rem 1rem;
        color: var(--text-color);
        font-size: var(--nav-text-size);
        width: 200px;
        transition: all 0.3s ease;
        font-family: 'Unbounded', system-ui, sans-serif;
    }

    .search-container input:focus {
        outline: none;
        background-color: var(--primary-color);
        border-color: var(--secondary-color);
        width: 250px;
    }

    .search-container input::placeholder {
        color: var(--text-color);
    }

    .search-button {
        position: absolute;
        right: 8px;
        background: none;
        border: none;
        color: var(--text-color);
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }

    .search-button:hover {
        opacity: 1;
    }

    .nav-search-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
       
    }

    input[type="search"]::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    nav {
        padding: 0;
        flex-grow: 1;
    }

    nav ul {
        list-style: none;
        padding: 1rem 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    nav ul li {
        margin: 0;
        flex-shrink: 0;
    }

    nav ul li button {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        display: block;
        transition: all 0.3s ease;
    }

    nav ul li button:hover {
        background-color: var(--primary-color);
        color: var(--text-color);
        transform: translateY(-2px);
        cursor: pointer;
    }
    button{
      background-color: rgba(0, 0, 0, 0); /*transparency*/
      border-color: rgba(0, 0, 0, 0);
      font-family: 'Unbounded', system-ui, sans-serif;
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