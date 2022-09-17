<script>
    import { page } from '$app/stores';
    import Page from "$lib/comps/page-templates/page/Page.svelte";

    let status = $page.status;
    let message = $page.error.message;
</script>

<Page hTitle={status} hContent={message}>
    <div class="mx-auto text-center">
        <h1 class="elastic hover:scale-110 text-[10rem] inline-block w-[240px] h-[240px] cursor-crosshair">😾</h1>
        <div class="cursor-crosshair font-medium text-[2rem]">
            <span class="elastic hover:scale-110 inline-block">Error:</span>
            <span class="elastic hover:scale-110 text-red-500 inline-block">{$page.status}</span>
        </div>
    </div>
</Page>

<style>
    .elastic {
        transition: transform .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
</style>