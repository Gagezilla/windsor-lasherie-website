<script>
    import Page from "$lib/comps/page-templates/page/Page.svelte";
    import FadeIn from "$lib/comps/global/FadeIn.svelte";
</script>

<Page title="Products"
      hContent="We are proud to provide bespoke skin treatments with high-quality, professional grade skincare products.">

    <div class="mx-auto max-w-[30rem]">
        <FadeIn duration="1.25s">
            <h2 class="font-medium text-[1.75rem] text-center">Powered by<br>Dermalogica</h2>
        </FadeIn>
        <FadeIn duration="1.25s" delay=".1s">
            <img alt="dermalogica products" src="/img/dermalogica-products.webp" class="px-8" width="600" height="451">
        </FadeIn>
        <FadeIn duration="1.25s" delay=".2s">
            <p>We are proud to provide bespoke skin treatments with high-quality,
                professional grade skincare products. Dermalogica products are
                certified vegan, cruelty-free, and gluten-free. All formulas are
                free of artificial colors and fragrances, mineral oil, lanolin,
                S.D. alcohol, parabens and microplastics. All paper and cartons
                are FSC certified to be sustainable for forests.
            </p>
        </FadeIn>

        <FadeIn duration="1.25s">
            <img alt="face reality" src="/img/face-reality.webp" class="px-16 py-12 md:py-16" width="480" height="156">
        </FadeIn>

        <FadeIn duration="1.25s">
            <div class="px-16">
                <img alt="face reality products" src="/img/face-reality-products.webp" class="rounded-lg" width="350" height="350">
            </div>
        </FadeIn>

    </div>
</Page>