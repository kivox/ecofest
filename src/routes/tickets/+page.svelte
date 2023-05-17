<script>
    import {RadioGroup, RadioGroupOption} from "@rgossiaux/svelte-headlessui";
    import {page} from "$app/stores"
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

    let selectedTicket = writable($page.params.ticket ? $page.params.ticket.charAt(0).toUpperCase() + $page.params.ticket.slice(1) : "");

    let firstName = ''
    let lastName = ''

    let addy1 = ''
    let addy2 = ''
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
        selectedTicket.subscribe((val) => {
            console.log(val)
        })
    })
</script>

<section class="m-auto h-full w-full flex-grow">
    <div class="pb-10 md:pb-16 pt-10 m-auto max-w-screen-xl text-center px-6 bg-emerald-100 h-full">
        <h2 class="text-3xl font-semibold mb-9">Select Ticket</h2>
        <RadioGroup bind:value={$selectedTicket} on:change={(e) => selectedTicket.set(e.detail)}
                    class="flex flex-col md:flex-row w-full m-auto gap-2 md:lg-gap-16 lg:gap-16">
            {#each tickets as ticket}
                <RadioGroupOption value={ticket.type} let:checked>
                    <div class="cursor-pointer  border-2 p-6 rounded-md shadow relative {checked ? 'bg-gray-100 border-emerald-500' : 'bg-white border-white'}">
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
            <form on:submit|preventDefault={purchaseTicket} class="mx-auto max-w-lg bg-white p-10 rounded shadow-md">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input bind:value={firstName} placeholder="First Name"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={lastName} placeholder="Last Name"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={addy1} placeholder="Address Line 1"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={addy2} placeholder="Address Line 2"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={town} placeholder="Town / City"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={county} placeholder="County/State"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={postcode} placeholder="Post/ZIP-code"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                    <input bind:value={country} placeholder="Country"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text"/>
                </div>
                <div class="mt-6">
                    <input bind:value={cardNumber} placeholder="Card Number"
                           class="w-full p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text">
                </div>
                <div class="mt-6 grid grid-cols-2 gap-6">
                    <input bind:value={cardExpiry} placeholder="Expiry Date (MM/YY)"
                           class="p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text">
                    <input bind:value={cardCVV} placeholder="CVV"
                           class="p-2 border border-emerald-300 rounded text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                           type="text">
                </div>
                <button class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition mt-6 w-full">
                    Purchase
                </button>
                {#if $error !== ""}
                    <div class="text-red-600 mt-4">{$error}</div>
                {/if}
            </form>
        </div>
    {/if}
</section>
