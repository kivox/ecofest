<script>
    let acts = [
        {
            name: "Act One",
            description: "Description for Act One",
            imageUrl: "https://placekitten.com/200/300",
            link: "/acts/1"
        },
        {
            name: "Act Two",
            description: "Description for Act Two",
            imageUrl: "https://placekitten.com/200/300",
            link: "/acts/"
        },
    ];
</script>

<section class="m-auto h-full w-full px-6">
    <div class="pb-16 pt-10 m-auto max-w-screen-xl text-center px-6">
        <h2 class="text-3xl font-semibold mb-9">Acts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {#each acts as act}
                <div class="bg-white p-6 rounded-md shadow relative">
                    <img src={act.imageUrl} alt={act.name} class="h-64 w-full object-cover rounded-md mb-6">
                    <h3 class="font-semibold text-2xl mb-4 text-emerald-600">{act.name}</h3>
                    <p class="mb-8 max-w-xs mx-auto">{act.description}</p>
                    <div class="flex justify-center items-center">
                        <a href={act.link} class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition">See More</a>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
