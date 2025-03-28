<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    onMount(() =>{
        console.log("Contacts loaded");
    });
    function goBack() {
    goto('/');
    }
    </script>

    <div class="product-detail-container">
        <nav class="breadcrumbs">
          <button class="back-button" on:click={goBack}>&lt;&nbsp;&nbsp; Back to Home</button>
          <div class="breadcrumb-path"></div>
        </nav>
    </div>

    <h1>Contact Us</h1>
    <p>get in touch via email at <a href="mailto:example@email.com">info@example.com</a>.</p>
    
    
    <style>
        h1{color: var(--text-color);}
        p{font-size: 28px;}

        button{
        background-color: rgba(0, 0, 0, 0); /*transparency*/
        border-color: rgba(0, 0, 0, 0);
        color: var(--text-color);
        font-family: 'Unbounded', system-ui, sans-serif;
        }
        button:hover{
            color: var(--primary-color);
            cursor: pointer;
        }
    </style>