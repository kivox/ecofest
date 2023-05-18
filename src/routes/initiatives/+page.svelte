<script>
    import recycling from '$lib/assets/initiatives/recycling.jpg';
    import solar from '$lib/assets/initiatives/solar.jpg';
    import tree from '$lib/assets/initiatives/tree.jpg';
    import compostable from '$lib/assets/initiatives/compostable.jpg';

    let initiatives = [
        {
            title: "Recycling",
            description: "Bins are provided to separate rubbish into paper, plastic, glass, and general waste, promoting responsible waste management.",
            image: recycling
        },
        {
            title: "Solar Power",
            description: "Solar panels are utilized to power all aspects of the festival, reducing reliance on fossil fuels.",
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
</script>


<svelte:head>
    <title>ECOFEST - Initiatives</title>
</svelte:head>

<!-- Initiatives section -->
<section class="m-auto h-full w-full">
    <div class="pb-16 pt-10 m-auto max-w-screen-xl text-center px-6">
        <div class="text-center my-8 pb-12">
            <h2 class="text-3xl font-semibold">Our Green Initiatives</h2>
            <p class="mx-auto max-w-lg">At Ecofest, we take our commitment to the environment seriously. Discover our
                green initiatives making a difference.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each initiatives as init}
                <div class="bg-white p-6 rounded-md shadow relative">
                    <img src={init.image} alt={init.title} class="h-96 w-full object-cover rounded-md mb-6">
                    <h3 class="font-semibold text-2xl mb-4 text-emerald-600">{init.title}</h3>
                    <p class="max-w-md mx-auto">{init.description}</p>
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
