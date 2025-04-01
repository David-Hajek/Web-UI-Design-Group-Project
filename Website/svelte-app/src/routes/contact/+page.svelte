<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { reveal } from 'svelte-reveal';
    import { fade, slide} from 'svelte/transition';

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

    <div class="content" transition:fade>
    <h1>Contact Us</h1>
    <p>get in touch via email at <a href="mailto:example@email.com">info@example.com</a>.</p>
    </div>
    
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

        .content{
        display: flex;
        flex-direction: column; /* Stack items vertically */
        align-items: center; /* Center horizontally */
        justify-content: center; /* Center vertically */
        text-align: center; /* Center the text */
        padding: 20px;
        }
    </style>