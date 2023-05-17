<script>
    import {RadioGroup, RadioGroupOption} from "@rgossiaux/svelte-headlessui"
    import {writable} from 'svelte/store';
    import {onMount} from "svelte";

    let tickets = [
        {
            type: "Standing",
            description: "Experience the energy of ECOFEST with a standing ticket.",
            price: 35,
        },
        {
            type: "Seated",
            description: "Enjoy ECOFEST comfortably with a seated ticket.",
            price: 50,
        },
        {
            type: "VIP",
            description: "Experience ECOFEST in luxury with a VIP ticket. Limited availability.",
            price: 100,
        },
    ];

    let selectedTicket = writable("");

    let firstName = ''
    let lastName = ''

    let address1 = ''
    let address2 = ''
    let town = ''
    let county = ''
    let postcode = ''
    let country = ''

    let cardNumber = '';
    let cardExpiry = '';
    let cardCVV = '';

    let error = writable("");

    const luhnCheck = (num) => {
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    };

    const purchaseTicket = () => {
        if (firstName === "" ||
            lastName === ""
        ) {
            error.set("Name cannot be empty")
            return;
        }

        if (
            address1 === "" ||
            town === "" ||
            county === "" ||
            postcode === "" ||
            country === ""
        ) {
            error.set("Address is incomplete")
        }

        if (
            cardNumber === "" ||
            cardExpiry === "" ||
            cardCVV === ""
        ) {
            error.set("Card details are invalid.")
            return;
        }

        if (!luhnCheck(cardNumber)) {
            error.set("Invalid card number.");
            return;
        }

        // Check expiry date
        let expiryDate = cardExpiry.split('/');
        let month = parseInt(expiryDate[0]);
        let year = parseInt(expiryDate[1]);

        let currentYear = new Date().getFullYear() % 100;
        let currentMonth = new Date().getMonth() + 1;

        if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < currentYear || (year === currentYear && month < currentMonth)) {
            error.set("Invalid expiry date.");
            return;
        }

        // Check CVV
        if (cardCVV.length !== 3 || isNaN(cardCVV)) {
            error.set("Invalid CVV.");
            return;
        }

        error.set("");
        selectedTicket.set("");
        cardNumber = '';
        cardExpiry = '';
        cardCVV = '';
    }

    onMount(() => {
        selectedTicket.subscribe((value) => {
            console.log(value)
        })
    })
</script>


<svelte:head>
    <title>ECOFEST - Tickets</title>
</svelte:head>

<section class="m-auto h-full w-full flex-grow">
    <div class="pb-10 md:pb-16 pt-10 m-auto max-w-screen-xl text-center px-6 bg-emerald-100 h-full">
        <h2 class="text-3xl font-semibold mb-9">Select Ticket</h2>
        <RadioGroup bind:value={$selectedTicket} on:change={(e) => selectedTicket.set(e.detail)}
                    class="flex flex-col md:flex-row w-full m-auto gap-2 md:lg-gap-16 lg:gap-16">
            {#each tickets as ticket}
                <RadioGroupOption value={ticket.type}>
                    <div class="cursor-pointer border-2 p-6 rounded-md shadow relative {ticket.type === $selectedTicket ? 'bg-gray-100 border-emerald-500' : 'bg-white border-white'}">
                        <span class="absolute -top-4 -right-4 bg-emerald-300 rounded-full w-20 py-1 text-xl font-semibold text-emerald-700 shadow">£{ticket.price}</span>
                        <h3 class="font-semibold text-2xl mb-4 text-emerald-600">{ticket.type}</h3>
                        <p class="mb-8 max-w-xs mx-auto">{ticket.description}</p>
                    </div>
                </RadioGroupOption>
            {/each}
        </RadioGroup>
    </div>
    {#if $selectedTicket !== ""}
        <div class="m-auto max-w-screen-xl text-center px-6 pb-10">
            <h2 class="text-3xl font-semibold mb-9">Checkout</h2>
            <form on:submit|preventDefault={purchaseTicket} class="max-w-md mx-auto bg-white p-10 rounded shadow-md">
                <div class="mb-4">
                    <input bind:value={firstName} placeholder="First Name"
                           class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>
                <div class="mb-4">
                    <input bind:value={lastName} placeholder="Last Name"
                           class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>
                <br>
                <div class="mb-4">
                    <input bind:value={address1} placeholder="Address 1"
                           class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>
                <div class="mb-4">
                    <input bind:value={address2} placeholder="Address 2"
                           class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>

                <br>
                <div class="mb-4">
                    <input bind:value={cardNumber} placeholder="Card Number"
                           class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>
                <div class="flex gap-2 mb-4">
                    <input bind:value={cardExpiry} placeholder="Expiry Date (MM/YY)"
                           class="appearance-none flex-grow bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                    <input bind:value={cardCVV} placeholder="CVV"
                           class="appearance-none w-20 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:ring-0 focus:bg-white"
                           type="text">
                </div>
                <button class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition mt-4 w-full">
                    Purchase
                </button>
                {#if $error !== ""}
                    <div class="text-red-600 mt-4">{$error}</div>
                {/if}
            </form>
        </div>
    {/if}

</section>
