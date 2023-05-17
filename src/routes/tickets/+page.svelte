<script>
    import {RadioGroup, RadioGroupOption} from "@rgossiaux/svelte-headlessui";
    import {writable} from 'svelte/store';

    let tickets = [
        {
            type: "Standing",
            description: "Experience the energy of ECOFEST with a standing ticket.",
            price: 35,
            link: "/tickets?ticket=standing"
        },
        {
            type: "Seated",
            description: "Enjoy ECOFEST comfortably with a seated ticket.",
            price: 50,
            link: "/tickets?ticket=seated"
        },
        {
            type: "VIP",
            description: "Experience ECOFEST in luxury with a VIP ticket. Limited availability.",
            price: 100,
            link: "/tickets?ticket=vip"
        },
    ];

    let selectedTicket = writable("");
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
        let currentYear = new Date().getFullYear() % 100; // We're just interested in the last two digits
        let currentMonth = new Date().getMonth() + 1; // Months are 0-indexed, so we add 1

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
</script>

<section class="m-auto h-full w-full flex-grow">
    <div class="pb-10 md:pb-16 pt-10 m-auto max-w-screen-xl text-center px-6 bg-emerald-100 h-full">
        <h2 class="text-3xl font-semibold mb-9">Select Ticket</h2>
        <RadioGroup bind:value={$selectedTicket} on:change={(e) => selectedTicket.set(e.detail)}
                    class="flex flex-col md:flex-row w-full m-auto gap-2 md:lg-gap-16 lg:gap-16">
            {#each tickets as ticket}
                <RadioGroupOption value={ticket.type} let:checked>
                    <div class="cursor-pointer bg-white p-6 rounded-md shadow relative {checked ? 'bg-gray-200':'bg-white'}">
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
            <form on:submit|preventDefault={purchaseTicket} class="max-w-xs mx-auto">
                <input bind:value={cardNumber} placeholder="Card Number"
                       class="w-full mb-4 p-2 border rounded text-emerald-700 focus:outline-none focus:ring-0"
                       type="text">
                <div class="flex gap-2 mb-4">
                    <input bind:value={cardExpiry} placeholder="Expiry Date (MM/YY)"
                           class="flex-grow p-2 border rounded text-emerald-700 focus:outline-none focus:ring-0"
                           type="text">
                    <input bind:value={cardCVV} placeholder="CVV"
                           class="w-20 p-2 border rounded text-emerald-700 focus:outline-none focus:ring-0"
                           type="text">
                </div>
                <button class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition mt-4">
                    Purchase
                </button>
            </form>
            {#if $error !== ""}
                <div class="text-red-600 mt-4">{$error}</div>
            {/if}
        </div>
    {/if}
</section>
