<script>
    export let title;
    export let content;
</script>

<div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    <input type="checkbox" />
    <div class="collapse-title text-xl font-medium">
        {title}
    </div>
    <div class="collapse-content">
        <div class="pt-5"></div>
        {#if content}
            {#each content as part, i}
                {#if part.title && !part.content}
                    <span class="font-bold px-10">{part.title}</span>
                    {#if i !== content.length-1}<br><br>{/if}
                {:else if part.title && part.content}
                    <span class="font-bold px-10">{part.title}</span><br><br>
                    <p class="inline-block px-10">{part.content}</p>
                    {#if i !== content.length-1}<br><br>{/if}
                {/if}
            {/each}
        {/if}
        <slot/>
    </div>
</div>