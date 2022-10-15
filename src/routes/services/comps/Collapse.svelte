<script>
    export let title;
    export let content;
</script>

<div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox"/>
    <div class="collapse-title text-xl font-medium">
        {title}
    </div>
    <div class="collapse-content">
        <div class="py-5">
            {#if content}
                {#each content as part, i}
                    {#if part.title && !part.content}
                        <h3 class="font-bold px-10">{part.title}</h3>
                        {#if i !== content.length - 1}<br><br>{/if}
                    {:else if part.title && part.content}
                        <h3 class="font-bold px-10">{part.title}</h3><br>
                        <p class="inline-block px-10">
                            {#each part.content.split("{nl}") as conPart, ii}
                                {conPart}
                                {#if ii !== part.content.split("{nl}").length - 1}<br>{/if}
                            {/each}
                        </p>
                        {#if i !== content.length - 1}<br><br><br>{/if}
                    {/if}
                {/each}
            {/if}
        </div>
        <slot/>
    </div>
</div>