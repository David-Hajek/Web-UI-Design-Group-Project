<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { fade, slide} from 'svelte/transition';
    import { reveal } from 'svelte-reveal';
    import { base } from '$app/paths';

    onMount(() =>{
        console.log("Contacts loaded");
    });
    function goBack() {
    goto(`${base}/`);
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
    <p use:reveal={{ preset: "slide"}}>Welcome to D.E.T. – your ultimate destination for unique and high-quality merchandise! Whether you're a pop culture fanatic, a gaming enthusiast, or someone who loves expressing themselves through fashion, we’ve got something special for you.

        <br><br>At D.E.T., we believe that merchandise is more than just clothing and accessories – it's a way to showcase your personality, passions, and interests. Our team is dedicated to bringing you the trendiest and most creative designs, all while ensuring top-notch quality and comfort.
        
        <br><br>Our collection features a diverse range of apparel, accessories, and collectibles inspired by the latest trends, iconic franchises, and timeless classics. We work with talented artists and designers to curate exclusive pieces that you won’t find anywhere else.
        
       <br><br> Customer satisfaction is at the heart of everything we do. We are committed to providing a seamless shopping experience, from browsing our collections to receiving your order. If you ever have any questions or need assistance, our friendly support team is always here to help.
        
        <br><br>Thank you for choosing D.E.T. </p>
    </div>
    
    <style>
        h1{color: var(--text-color);}
        p{font-size: 1.75vh;
        margin-left: 30%;
        margin-right: 30%;
        align-content: left;
        text-align: left;
        margin-top: 20px;
        }

        @media (max-width: 768px) {
        p {
           margin-left: auto;
           margin-right: auto; 
        }
        }
        button{
        background-color: rgba(0, 0, 0, 0); /*transparency*/
        border-color: rgba(0, 0, 0, 0);
        color: var(--text-color);
        font-family: 'Unbounded', system-ui, sans-serif;
        font-size: var(--nav-text-size);
        }

        @media (max-width: 768px) {
        button {
            font-size: 2.2vh;
            }
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