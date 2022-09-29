<script>
    import PageTransition from "./PageTransition.svelte";
    import PageSEO from "./PageSEO.svelte";
    import Footer from "./Footer.svelte";

    export let title = undefined;
    export let content = undefined;

    export let hTitle = undefined;
    export let hContent = undefined;

    export let pad = undefined;
</script>

<PageSEO title={hTitle ? hTitle : title} content={hContent ? hContent : content}/>

<PageTransition>
    <div class="main-container">
        {#if title}
            <div class="mx-6 md:mx-0">
                <h1 class="font-medium text-[1.5rem] mb-2">{title}</h1>
                {#if content}<p>{content}</p>{/if}
                <div class="divider"></div>
                <slot/>
            </div>
        {:else if pad}
            <div class="mx-6 md:mx-0">
                <slot/>
            </div>
        {:else}
            <slot/>
        {/if}
    </div>
    <Footer/>
</PageTransition>
