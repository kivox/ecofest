<script>
    import "@/styles/tailwind.css";

    import Navbar from "@/components/layout/Navbar.svelte";
    import Footer from "@/components/layout/Footer.svelte";
</script>

<svelte:head>
    <title>ECOFEST</title>
</svelte:head>

<div class="flex flex-col max-w-screen min-h-screen">
    <Navbar/>
    <div class="h-full w-full bg-emerald-100 flex-grow">
        <slot/>
    </div>
    <Footer/>
</div>