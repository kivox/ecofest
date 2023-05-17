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

<!-- Initiatives section -->
<section class="m-auto h-full w-full">
    <div class="py-16 m-auto max-w-screen-xl px-6">
        <div class="text-center mb-8 pb-12">
            <h2 class="text-3xl font-semibold">Our Green Initiatives</h2>
            <p class="mx-auto max-w-lg">At Ecofest, we take our commitment to the environment seriously. Discover our
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
