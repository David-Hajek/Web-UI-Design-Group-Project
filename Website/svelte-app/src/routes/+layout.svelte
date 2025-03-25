<script>
    let searchQuery = '';
    
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
        <img src="logo.png" alt="Logo" class="logo" />
        <h1 id="title">Merchandise Website</h1>
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

    .logo {
        height: 150px;
        width: auto;
        margin-right: 2%;
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


</style>
