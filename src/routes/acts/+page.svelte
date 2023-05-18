<script>
        import everyonesEnvironment from '$lib/assets/acts/everyones-environment.jpg';
        import solarDrum from '$lib/assets/acts/solar-drum.jpg';
        import greenGizmos from '$lib/assets/acts/green-gizmos.jpg';
        import dj from '$lib/assets/acts/dj-john-alfred.jpg';

    let acts = [
        {
            id: 1,
            name: "Everyone's Environment",
            description: "Everyone's Environment is a rock band with a deep commitment to sustainability. Their music draws attention to environmental issues, and their performances are powered by renewable energy sources.",
            image: everyonesEnvironment,
        },
        {
            id: 2,
            name: "Solar Drum",
            description: "Solar Drum is a that uses is a solo singer and music producer using instruments made from recycled materials. Her lively performances are a testament to the creative possibilities of reusing and repurposing.",
            image: solarDrum,
        },
        {
            id: 3,
            name: "Green Gizmos",
            description: "Green Gizmos is an goofy music act that uses solar-powered synthesizers and other eco-friendly technology, the act is tailored mainly towards children. They prove that high-tech music doesn't have to come at the expense of the planet.",
            image: greenGizmos
        },
        {
            id: 4,
            name: "DJ John Alfred",
            description: "DJ John Alfred is a popular DJ known for his green initiatives. He's committed to using equipment that runs on renewable energy and promoting environmental awareness through his music.",
            image: dj
        }
    ];
</script>

<svelte:head>
    <title>ECOFEST - Acts</title>
</svelte:head>

<section class="m-auto h-full w-full">
    <div class="pb-16 pt-10 m-auto max-w-screen-xl text-center px-6">
        <div class="text-center my-8 pb-12">
            <h2 class="text-3xl font-semibold">Performers</h2>
            <p class="mx-auto">Explore our diverse lineup of performers set to grace the ECOFEST stages.<br/>From established artists to emerging talents, get ready for a captivating musical experience!</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each acts as act}
                <div class="bg-white p-6 rounded-md shadow relative">
                    <img src={act.image} alt={act.name} class="h-96 w-full object-cover rounded-md mb-6">
                    <h3 class="font-semibold text-2xl mb-4 text-emerald-600">{act.name}</h3>
                    <p class="max-w-md mx-auto">{act.description}</p>
                    <!--<div class="flex justify-center items-center">
                        <a href={act.link} class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition">See More</a>
                    </div>-->
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
