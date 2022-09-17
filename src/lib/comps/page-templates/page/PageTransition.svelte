<script>
    import { fly } from 'svelte/transition';
</script>

<main in:fly={{ x: -5, duration: 500, delay: 500 }}
     out:fly={{ x: 5, duration: 500 }}>
    <slot/>
</main>