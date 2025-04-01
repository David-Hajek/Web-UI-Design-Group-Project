<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { fade, slide} from 'svelte/transition';
    import { reveal } from 'svelte-reveal';

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

    <div class="content">
    <h1>ABOUT</h1>
    <p use:reveal={{ preset: "slide"}}>We love making websites, it is our passion and we love making websites really, we do</p>
    </div>
    
    <style>
        h1{color: var(--text-color);}
        p{font-size: 18px;}
        button{
        background-color: rgba(0, 0, 0, 0); /*transparency*/
        border-color: rgba(0, 0, 0, 0);
        color: var(--text-color);
        font-family: 'Unbounded', system-ui, sans-serif;
        font-size: var(--nav-text-size);
        }

        button:hover{
        color: var(--primary-color);
        cursor: pointer;
        font-size: var(--nav-text-size);
        }

        .content{
        display: flex;
        flex-direction: column; /* Stack items vertically */
        align-items: center; /* Center horizontally */
        justify-content: center; /* Center vertically */
        text-align: center; /* Center the text */
        padding: 20px;
        }
    </style>