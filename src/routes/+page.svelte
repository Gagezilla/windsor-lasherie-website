<script>
    import Page from "$lib/comps/page-templates/page/Page.svelte";
    import FadeIn from "$lib/comps/global/FadeIn.svelte";
</script>

<Page hTitle="Home"
      hContent="If you’ve been searching for a non-basic neighborhood oasis and an amazing team of talented beauty professionals, then our petite spa located in Old Town Windsor is a must try.">

    <div class="relative">
        <FadeIn duration="1.25s">
            <div class="h-[31.25rem] md:h-[40.625rem]">
                <img alt="home" src="/img/home.webp" class="object-cover md:rounded-lg w-full h-full">
            </div>
            <div class="absolute bottom-7 md:bottom-8 right-1/2 translate-x-1/2">
                <a target="_blank"
                   href="https://schedulicity.com/scheduling/wlf7wx/services"
                   class="btn btn-primary btn-outline h-12 px-6 md:h-16 md:px-7">Book Now</a>
            </div>
        </FadeIn>
    </div>

    <FadeIn duration="1.25s">
        <h1 class="text-center my-8 text-[1.7rem]">
            Professional treatments.<br>Real results.
        </h1>
    </FadeIn>

    <div class="grid gap-8 grid-cols-1 md:grid-cols-4 mx-10 md:mx-0 place-items-center">
        <div class="w-full max-w-[24rem] md:max-w-none">
            <FadeIn duration="1.25s">
                <a href="/services"
                   class="pt-[100%] relative block hover:scale-[.99] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
                    <img alt="treatments" src="/img/treatments.webp" class="rounded-xl w-full h-full absolute top-0 object-cover">
                </a>
                Advanced Treatments
            </FadeIn>
        </div>
        <div class="w-full max-w-[24rem] md:max-w-none">
            <FadeIn duration="1.25s" delay=".1s">
                <a href="/products"
                   class="pt-[100%] relative block hover:scale-[.99] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
                    <img alt="products" src="/img/products.png" class="rounded-xl w-full h-full absolute top-0 object-cover">
                </a>
                Professional Products
            </FadeIn>
        </div>
        <div class="w-full max-w-[24rem] md:max-w-none">
            <FadeIn duration="1.25s" delay=".2s">
                <a href="/services"
                   class="pt-[100%] relative block hover:scale-[.99] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
                    <img alt="skin care" src="/img/skin-care.webp" class="rounded-xl w-full h-full absolute top-0 object-cover">
                </a>
                Customized Skin Care
            </FadeIn>
        </div>
        <div class="w-full max-w-[24rem] md:max-w-none">
            <FadeIn duration="1.25s">
                <a href="/skin-care-tips"
                   class="pt-[100%] relative block hover:scale-[.99] duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
                    <img alt="skin care tips" src="/img/tips.jfif" class="rounded-xl w-full h-full absolute top-0 object-cover">
                </a>
                Skin Care Tips
            </FadeIn>
        </div>
    </div>

</Page>