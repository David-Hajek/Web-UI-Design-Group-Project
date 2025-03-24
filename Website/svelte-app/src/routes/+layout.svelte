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
    </div>
    <div class="nav-search-container">
        <nav>
            <ul>
                <li><a href="/">section1</a></li>
                <li><a href="/about">section2</a></li>
                <li><a href="/contact">section3</a></li>
                <li><a href="/contact">section4</a></li>
                <li><a href="/contact">section5</a></li>
                <li><a href="/contact">section6</a></li>
                <li><a href="/contact">section7</a></li>
            </ul>
        </nav>
        <div class="search-container">
            <input 
                type="text" 
                placeholder="Search..."
                bind:value={searchQuery} 
                on:keydown={handleSearch}
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
</header>

<!-- Page Content -->
<main>
    <slot />
</main>

<!-- Footer -->
<footer>
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
        background-color:rgb(8, 28, 48);
        border-bottom: 1px solid rgba(219, 233, 245, 0.1);
        padding: 0;
        width: 100%;
    }

    .logo-container {
        padding: 1.5rem 2rem;
        border-bottom: 1px solid rgba(219, 233, 245, 0.1);
    }

    .logo {
        height: 200px;
        width: auto;
    }

    .nav-search-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;
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

    nav ul li a {
        text-decoration: none;
        color: var(--text-color);
        font-weight: 500;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        display: block;
        transition: all 0.3s ease;
    }

    nav ul li a:hover {
        background-color: var(--primary-color);
        color: var(--text-color);
        transform: translateY(-2px);
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
    
    .search-container {
        display: flex;
        align-items: center;
        margin-left: 2rem;
        position: relative;
    }

    .search-container input {
        background-color: rgba(219, 233, 245, 0.1);
        border: 1px solid rgba(219, 233, 245, 0.2);
        border-radius: 6px;
        padding: 0.5rem 2.5rem 0.5rem 1rem;
        color: var(--text-color);
        font-size: 0.9rem;
        width: 200px;
        transition: all 0.3s ease;
    }

    .search-container input:focus {
        outline: none;
        background-color: rgba(219, 233, 245, 0.15);
        border-color: var(--primary-color);
        width: 250px;
    }

    .search-container input::placeholder {
        color: rgba(219, 233, 245, 0.5);
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
    
    footer {
        background-color: #343a40;
        color: white;
        text-align: center;
        padding: 1rem;
        position: flex;
        bottom: 0;
        width: 100%;
    }
</style>
