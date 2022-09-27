<script>
    import {fly} from 'svelte/transition';
    import {afterNavigate} from '$app/navigation';

    let duration = 500
    afterNavigate(({from}) => {
        setTimeout(() => {
            loaded = true
        }, from !== null ? duration : 0);
    });
    let loaded;
</script>

{#if loaded}
    <main in:fly={{ x: -5, duration: duration }}
          out:fly={{ x: 5, duration: duration }}>
        <slot/>
    </main>
{/if}