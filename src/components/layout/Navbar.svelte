<script>
    import Icon from "@iconify/svelte";
    import {page} from '$app/stores';
    import {onMount} from 'svelte';
    import {writable} from 'svelte/store';
    import tree from "$lib/assets/tree.svg";

    let scrollY = writable(0);
    let navClass = writable(false);
    let menuOpen = writable(false);

    onMount(() => {
        if (window.scrollY > 50) {
            navClass.set(true);
        }

        const unsubscribe = scrollY.subscribe(value => {
            if (value > 50) {
                navClass.set(true);
            } else {
                navClass.set(false);
            }
        });

        window.onscroll = () => {
            scrollY.set(window.scrollY);
        };

        return () => {
            unsubscribe();
            window.onscroll = null;
        };
    });

    let links = [
        {
            name: "Acts",
            url: "/acts"
        },
        {
            name: "Tickets",
            url: "/tickets"
        },
        {
            name: "Initiatives",
            url: "/initiatives"
        },
        {
            name: "Contact",
            url: "/contact"
        },
    ];
</script>

{#if $page.url.pathname !== "/tickets"}
    <div class="w-full bg-emerald-500 text-white text-center py-2">
        <p>Tickets are running out! <a href="/tickets" class="underline text-white">Book now</a></p>
    </div>
{/if}

<div class="w-full h-16 z-10 sticky top-0 shadow transition-all duration-300 {$navClass ? 'bg-opacity-75 backdrop-blur bg-emerald-50' : 'bg-emerald-50'}">
    <div class="max-w-screen-xl w-full flex flex-row h-full justify-center items-center m-auto pr-6">
        <!--Logo-->
        <a class="flex flex-row gap-2 justify-center items-center px-4" href="/">
            <img src={tree} alt="" class="w-10 h-10">
            <span class="font-semibold text-emerald-800 text-2xl">ECOFEST</span>
        </a>

        <div class="flex-grow"></div>

        <!--Navigation-->
        <nav class="gap-2 flex-row md:flex hidden">
            {#each links as link}
                <a href={link.url}
                   class="w-24 py-1 text-center text-sm font-semibold border transition rounded-md {$page.url.pathname === link.url ? 'bg-emerald-500 text-white border-emerald-600 ' : 'text-emerald-800 hover:bg-emerald-300 bg-white bg-opacity-50 border-emerald-500 hover:border-emerald-600'}">{link.name}</a>
            {/each}
        </nav>

        <!--Mobile Navigation-->
        <div class="flex flex-row gap-2 md:hidden">
            <button class="w-10 h-10 flex flex-row justify-center items-center rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 text-2xl" on:click={() => menuOpen.update(v => !v)}>
                <Icon icon="material-symbols:menu"></Icon>
            </button>
            {#if $menuOpen}
                <div class="absolute top-full right-0 w-full bg-emerald-100 shadow-lg z-50 border-t border-emerald-200">
                    {#each links as link}
                        <a href={link.url}
                           on:click={() => menuOpen.set(false)}
                           class="block px-4 py-2 text-gray-700 hover:bg-emerald-500 hover:text-white transition-colors duration-200 ease-in-out border-b border-emerald-200">
                            {link.name}
                        </a>
                    {/each}
                </div>
            {/if}
        </div>
    </div>

</div>
