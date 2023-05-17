<svelte:head>
    <title>ECOFEST - Contact</title>
</svelte:head>

<!-- Contact Page -->
<section class="m-auto h-full w-full">
    <div class="m-auto max-w-screen-xl text-center px-6 py-16">
        <div class="text-center pb-12">
            <h2 class="text-3xl font-semibold">Contact Us</h2>
            <p class="mx-auto">Get in touch with us!</p>
        </div>
        <form  class="mx-auto max-w-2xl bg-white p-10 rounded shadow-md">
            <div class="flex flex-wrap mb-6">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">
                    Name:
                </label>
                <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-0 focus:bg-white" id="name" type="text" placeholder="Your Name">
            </div>

            <div class="flex flex-wrap mb-6">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                    Email:
                </label>
                <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-0 focus:bg-white" id="email" type="email" placeholder="Your Email">
            </div>

            <div class="flex flex-wrap mb-6">
                <label for="subject" class="block text-gray-700 text-sm font-bold mb-2">
                    Subject:
                </label>
                <input class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-0 focus:bg-white" id="subject" type="text" placeholder="Subject">
            </div>

            <div class="flex flex-wrap mb-6">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">
                    Message:
                </label>
                <textarea class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring-0 focus:bg-white" id="message" placeholder="Your message..." rows="5"></textarea>
            </div>

            <div class="flex justify-center items-center">
                <button class="bg-emerald-400 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 transition" type="submit">Send</button>
            </div>
        </form>
    </div>
</section>
