<script>
    import { onMount } from 'svelte';
    import { goto } from "$app/navigation";
    import { reveal } from 'svelte-reveal';
    import { fade, slide} from 'svelte/transition';
    import { base } from '$app/paths';

    onMount(() =>{
        console.log("Contacts loaded");
    });
    function goBack() {
    goto(`${base}/`);
    }

    let status = ""; // Keeps track of the form status

    const handleSubmit = data => {
        status = "Message submitted!"; // Updates status to show the success message
    };

    </script>

    <div class="product-detail-container">
        <nav class="breadcrumbs">
          <button class="back-button" on:click={goBack}>&lt;&nbsp;&nbsp; Back to Home</button>
          <div class="breadcrumb-path"></div>
        </nav>
    </div>

    <div class="content">
    <h1>CONTACT</h1>
    </div>

    <form on:submit|preventDefault={handleSubmit} use:reveal={{preset:"slide"}}>
        <p><label for="name">Name:</label><input id="name" type="text" name="name" required /></p>
        <p><label for="email">Email:</label><input id="email" type="email" name="email" required /></p>
        <p>
            <label for="query">Subject:</label>
            <select id="query" name="query" required>
                <option value="" disabled selected>Select a query subject</option>
                <option value="refund">Returns and Refunds</option>
                <option value="missing-order">Missing Order</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
            </select>
        </p>
        <p><label for="message">Message:</label><textarea id="message" name="message" required rows="3"></textarea></p>
        <input type="submit" value="Submit" />
    </form>
    <p id="feedback">{status}</p>
    
    
    <style>
        h1{color: var(--text-color);}
        p{font-size: 28px;}

        #feedback {
        text-align: center; 
        margin-top: 20px; 
        font-size: 16px; 
        color: var(--primary-color); 
        }

        select{
            width: 100%; /* Inputs take up their column fully */
            height: 100%;
            font-family: var(--font-family);
            background-color: rgba(0, 0, 0, 0);
            border-width: var(--line-width);
            border-color: var(--text-color);
            border-radius: 10px; /*adds rounded corners */
            padding: 10px; /*adds spacing inside the fields */
            color: var(--text-color);
            transition: all 0.2s ease-in-out;
        }
        select:hover{
            border-color: var(--primary-color);
        }


        option{
            background-color: var(--backround-color);
            color: var(--text-color);
        }

        button{
        background-color: rgba(0, 0, 0, 0); /*transparency*/
        border-color: rgba(0, 0, 0, 0);
        color: var(--text-color);
        font-family: 'Unbounded', system-ui, sans-serif;
        font-size: var(--nav-text-size);
        transition: color 0.2s ease;
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

        form {
        display: grid;
        grid-template-columns: 1fr 2fr; 
        gap: 15px; 
        align-items: center; 
        width: 100%; 
        max-width: 500px; 
        margin: 0 auto; 
        }

        form p {
            display: contents; /* Makes the <p> elements transparent for layout */
            font-size: 18px;
        }

        form p > input,
        form p > textarea {
            width: 100%; 
            height: 100%;
            font-family: var(--font-family);
            background-color: rgba(0, 0, 0, 0);
            border-width: var(--line-width);
            border-color: var(--text-color);
            border-radius: 10px; /*adds rounded corners */
            padding: 10px; /*adds spacing inside the fields */
            color: var(--text-color);
            /*remove styling*/
            box-shadow: none; 
            appearance: none;
            -webkit-appearance: none;
            outline: none; 
            caret-color: var(--text-color);
            transition: all 0.2s ease-in-out;
        }

        form p > input:focus,
        form p > textarea:focus {

            outline: none; /* removes the default browser outline */
            border: solid var(--primary-color); 
            border-width: var(--line-width);
            background-color: rgba(0, 0, 0, 0.05); /* changes the background slightly */
            caret-color: var(--text-color); /* stylizes the blinking | cursor */
            color: var(--text-color);
        }

        input[type="submit"] {
            grid-column: span 2; /* Make the submit button span both columns */
            justify-self: center; /* Center the submit button */
            font-family: var(--font-family);
            background-color: var(--text-color);
            transition: background-color 0.3s ease-in-out;
            border-radius: 10px;
            padding: 10px;
            /* remove styling */
            box-shadow: none; 
            border: none; 
            appearance: none; 
            -webkit-appearance: none;
        }
        input[type="submit"]:hover {
            background-color: var(--primary-color);
        }

    </style>