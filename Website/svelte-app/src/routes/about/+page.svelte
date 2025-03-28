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

    <div class="content">
    <h1>About us</h1>
    <p>We love making websites, it is our passion and we love making websites really, we do</p>
    </div>
    
    <style>
        h1{color: var(--text-color);}
        p{font-size: 18px;}
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