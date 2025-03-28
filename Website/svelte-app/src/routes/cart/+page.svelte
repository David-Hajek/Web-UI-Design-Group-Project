<script>
    import { onMount } from 'svelte';
    import { Cart } from '$lib';  
    onMount(() =>{
        console.log("Cart Page loaded");
    });
    </script>
    
    <h1>This is the cart</h1>
    <p>Your items will be displayed here</p>

    <Cart></Cart>
    
    <style>
        h1{color: #ffffff;}
        p{font-size: 20px;}
    </style>