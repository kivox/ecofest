<script>
    import tree from "$lib/assets/tree.svg"
</script>

<footer class="w-full bg-emerald-700 text-white p-6">
    <div class="max-w-screen-xl m-auto flex flex-col lg:flex-row justify-between items-center px-6">
        <!-- Logo and description -->
        <div class="flex flex-col lg:flex-row items-center lg:items-start gap-2 mb-2 lg:mb-0">
            <img src={tree} alt="Logo" class="w-8 h-8"/>
            <div class="text-center lg:text-left">
                <h3 class="font-semibold text-lg">ECOFEST</h3>
                <p class="text-sm">Join us for an unforgettable day of rhythm, fun, and green living.</p>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex flex-row gap-4 pb-2 lg:pb-0">
            <a href="/acts" class="text-sm hover:text-emerald-300 transition">Acts</a>
            <a href="/tickets" class="text-sm hover:text-emerald-300 transition">Tickets</a>
            <a href="/initiatives" class="text-sm hover:text-emerald-300 transition">Initiatives</a>
            <a href="/contact" class="text-sm hover:text-emerald-300 transition">Contact</a>
        </nav>

        <!-- Copyright -->
        <div class="text-sm">
            &copy; {new Date().getFullYear()} Ecofest. All rights reserved.
        </div>
    </div>
</footer>