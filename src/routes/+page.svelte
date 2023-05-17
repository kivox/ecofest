<script>
    import Icon from '@iconify/svelte';

    import Carousel from 'svelte-carousel';
    import {browser} from '$app/environment';
    import theBoys from '$lib/assets/carousel/the-boys.jpg';
    import camp from '$lib/assets/carousel/camp.jpg';
    import crowdVibe from '$lib/assets/carousel/crowd-vibe.jpg';
    import festival from '$lib/assets/carousel/festival.jpg';
    import manbunCrowd from '$lib/assets/carousel/manbun-crowd.jpg';
    import mother from '$lib/assets/carousel/mother.jpg';
    import sitting from '$lib/assets/carousel/sitting.jpg';
    import everyonesEnvironment from '$lib/assets/acts/everyones-environment.jpg';
    import solarDrum from '$lib/assets/acts/solar-drum.jpg';
    import greenGizmos from '$lib/assets/acts/green-gizmos.jpg';
    import dj from '$lib/assets/acts/dj-john-alfred.jpg';
    import recycling from '$lib/assets/initiatives/recycling.jpg';
    import solar from '$lib/assets/initiatives/solar.jpg';
    import tree from '$lib/assets/initiatives/tree.jpg';
    import compostable from '$lib/assets/initiatives/compostable.jpg';

    let carousel;

    let images = [
        festival,
        theBoys,
        mother,
        camp,
        crowdVibe,
        manbunCrowd,
        sitting
    ]

    let acts = [
        {
            name: "Everyone’s Environment",
            description: "A local four-piece indie band passionate about saving the environment.",
            image: everyonesEnvironment
        },
        {
            name: "Solar Drum",
            description: "A singer that harmonizes her tunes with her love for sustainability.",
            image: solarDrum
        },
        {
            name: "Green Gizmos",
            description: "A children's act that uses puppets and songs to engage and educate about the environment.",
            image: greenGizmos
        },
        {
            name: "DJ John Alfred",
            description: "Mixing beats with a strong dedication to green living.",
            image: dj
        }
    ];

    let initiatives = [
        {
            title: "Recycling",
            description: "Bins are provided to separate rubbish into paper, plastic, glass, and general waste, promoting responsible waste management.",
            image: recycling
        },
        {
            title: "Solar Power",
            description: "Solar panels are utilised to power all aspects of the festival, reducing reliance on fossil fuels.",
            image: solar
        },
        {
            title: "Tree Planting",
            description: "We're committed to offsetting our carbon emissions through tree-planting initiatives.",
            image: tree
        },
        {
            title: "Compostable Materials",
            description: "We use compostable cups, plates, and cutlery at all our food and drink stations, reducing our plastic waste and supporting the soil health.",
            image: compostable
        }
    ];

    let tickets = [
        {
            type: "Standing Ticket",
            description: "Experience the energy of ECOFEST with a standing ticket.",
            price: 35,
            link: "/tickets?ticket=standing"
        },
        {
            type: "Seated Ticket",
            description: "Enjoy ECOFEST comfortably with a seated ticket.",
            price: 50,
            link: "/tickets?ticket=seated"
        },
        {
            type: "VIP Ticket",
            description: "Experience ECOFEST in luxury with a VIP ticket. Limited availability.",
            price: 100,
            link: "/tickets?ticket=vip"
        }
    ];
</script>

<section class="m-auto h-full w-full max-w-screen-xl px-6">
    <div class="p-0 lg:py-16">
        <div class="grid grid-cols-1 grid-rows-2 grid-flow-rows lg:grid-cols-2 lg:grid-flow-cols lg:grid-rows-1 w-full">
            <div class="flex flex-col gap-2 max-w-2xl m-auto py-12">
                <h1 class="text-3xl font-semibold">Welcome to <span class="text-emerald-400">ECOFEST</span></h1>
                <p>
                    Unite your love for music and the environment at Ecofest! This family-friendly festival, on
                    the third Saturday in July, showcases eco-conscious acts like Everyone's Environment, Solar Drum,
                    Green Gizmos, and DJ John Alfred. But we're more than great music. With recycling initiatives,
                    solar-powered stages, and carbon offsetting, we're a celebration that truly respects our planet.
                    Join us for an unforgettable day of rhythm, fun, and green living. Grab your tickets now, and let's
                    make ECOFEST a festival to remember!
                </p>
            </div>
            <div class="pl-0 lg:pl-32 h-full w-full ">
                {#if browser}
                    <Carousel
                            autoplay
                            autoplayDuration={5000}
                            pauseOnFocus
                            dots={false}
                            bind:this={carousel}
                            let:showPrevPage
                            let:showNextPage
                    >
                        <div slot="prev" on:click={showPrevPage}
                             class="absolute left-0 top-0 h-full z-10 flex justify-center items-center">
                            <button class="text-4xl text-emerald-100 opacity-50 hover:opacity-100 transition">
                                <Icon icon="material-symbols:navigate-before"/>
                            </button>
                        </div>

                        {#each images as image}
                            <img src={image} alt="carousel image"
                                 class="w-full h-full object-cover object-top rounded-md"/>
                        {/each}

                        <div slot="next" on:click={showNextPage}
                             class="absolute right-0 top-0 h-full z-10 flex justify-center items-center">
                            <button class="text-4xl text-emerald-100 opacity-50 hover:opacity-100 transition">
                                <Icon icon="material-symbols:navigate-next"/>
                            </button>
                        </div>
                    </Carousel>
                {/if}
            </div>
        </div>
    </div>
</section>

<section class="m-auto bg-emerald-50 h-full w-full">
    <div class="py-16 m-auto max-w-screen-xl px-6">
        <div class="text-center my-8 pb-16">
            <h2 class="text-3xl font-semibold mb-2">Our Performers</h2>
            <p class="mx-auto">Meet the incredible, eco-conscious acts set to light up the stage at <span
                    class="font-semibold text-emerald-900">ECOFEST</span>.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {#each acts as act}
                <div class="flex flex-col items-center text-center">
                    <img src={act.image} alt={act.name} class="w-full h-96 object-cover rounded-md mb-4"/>
                    <h3 class="text-2xl font-semibold mb-2">{act.name}</h3>
                    <p class="max-w-sm">{act.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<section class="m-auto bg-emerald-100 h-full w-full px-6">
    <div class="pb-16 pt-10 m-auto max-w-screen-xl text-center px-6">
        <h2 class="text-3xl font-semibold mb-9">Tickets</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each tickets as ticket}
                <div class="bg-white p-6 rounded-md shadow relative">
                    <span class="absolute -top-4 -right-4 z-10 bg-emerald-300 rounded-full w-20 py-1 text-xl font-semibold text-emerald-700 shadow">£{ticket.price}</span>
                    <h3 class="font-semibold text-2xl mb-4 text-emerald-600">{ticket.type}</h3>
                    <p class="mb-8 max-w-xs mx-auto">{ticket.description}</p>
                    <div class="flex justify-center items-center">
                        <a href={ticket.link} class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition">Book Now</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Initiatives section -->
<section class="m-auto bg-emerald-50 h-full w-full">
    <div class="py-16 m-auto max-w-screen-xl px-6">
        <div class="text-center my-8 pb-16">
            <h2 class="text-3xl font-semibold mb-2">Our Green Initiatives</h2>
            <p class="mx-auto">At Ecofest, we take our commitment to the environment seriously. Discover our
                green initiatives making a difference.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
            {#each initiatives as initiative}
                <div class="flex flex-col items-center text-center">
                    <img src={initiative.image} alt={initiative.title}
                         class="w-full h-96 object-cover rounded-md mb-4"/>
                    <h3 class="text-2xl font-semibold mb-2">{initiative.title}</h3>
                    <p class="max-w-sm">{initiative.description}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Call to action section -->
<section class="py-16 bg-emerald-400 text-white text-center">
    <h2 class="text-3xl font-semibold mb-4">Join the Fun at Ecofest</h2>
    <p class="mx-auto max-w-lg mb-8">Experience incredible music, engage in eco-friendly initiatives, and have an
        unforgettable day of rhythm, fun, and green living.</p>
    <a href="/tickets" class="px-8 py-3 bg-white text-emerald-900 font-semibold rounded-md hover:bg-emerald-100 transition">Buy Tickets Now</a>
</section>
