<script>
    import { onMount } from 'svelte';
    onMount(() =>{
        console.log("Contacts loaded");
    });
    </script>
    
    <h1>Contact Us</h1>
    <p>get in touch via email at <a href="mailto:example@email.com">info@example.com</a>.</p>
    
    <style>
        h1{color: #ffffff;}
        p{font-size: 28px;}
        a{color: #ff0000; filter: blur(2px);}
        a:hover {filter:  blur(0px);}
    </style>