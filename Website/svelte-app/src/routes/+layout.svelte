<script>
    let searchQuery = '';
    import { reveal } from 'svelte-reveal';
    
    function handleSearch(event) {
        if (event.key === 'Enter') {
            // this where we change how the searching works IMPORTANT DO NO FORGET
            console.log('Searching for:', searchQuery);
        }
    }
</script>

<!-- Header -->
<header>
    <div class="logo-container">
    <a href="/">
        <img src="logo.png" alt="Logo" class="logo" />
        <h1 id="title">D.E.T. MERCH</h1>
    </a>
    <div class="cart-container">
        <a href="/cart"><svg class="shopping-cart" xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" width="60">
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg></a>
      </div>
    </div>
    
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer id ="bottom-links">
    <ul>
        <li>
            <a href="/about">ABOUT</a>
        </li>
        <li>
            <a href="/contact">CONTACT</a>
        </li>
    </ul>
</footer>

<style>
    header {
        background-color: var(--backround-color);
        border-bottom: 1px solid var(--backround-color);
        padding: 0;
        width: 100%;
    }

    #title{
        font-size: 300%;
    }

    .logo-container {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--backround-color);
        display: flex;
        align-items: center;
    }

    header a {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--backround-color);
        display: flex;
        align-items: center;
    }

    header a:hover {
        color: var(--text-color);
        font-style: normal;
        text-decoration: none;
    }

    .logo {
        height: 150px;
        width: auto;
        margin-right: 2%;
    }

    .cart-container{
    margin-left: auto; /* Push the cart icon to the far right */

    }

    .shopping-cart{

        color: white;
        fill: currentcolor;
    }

    .shopping-cart:hover{
        color: #ca3bff;
        fill: currentcolor;
        filter: drop-shadow(0 0 10px var(--lighter-primary-color)); /* glow effect */
    }

    footer ul {
        left: 50%;
        list-style: none;
        padding: 1rem 0;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }

    footer ul li{
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        display: block;
        transition: all 0.3s ease;
        
    }
    main {
        padding: 2rem;
        text-align: left;
    }
    
    footer {
        background-color: var(--backround-color);
        color: var(--text-color);
        text-align: center;
        padding: 1rem;
        position: flex;
        bottom: 0;
        width: 100%;
    }
    @media (max-width: 768px){
      
    }

</style>
