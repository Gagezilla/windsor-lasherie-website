<script>
	import '../app.css';
    import Header from "./comps/Header.svelte";
    import {onMount} from "svelte";
    import {fade} from "svelte/transition"

    let showModal = false;

    onMount(() => {
        const fpPromise = import('https://fpcdn.io/v3/I8leoGqfZbUYt40OP1qo')
            .then(FingerprintJS => FingerprintJS.load());

        fpPromise
            .then(fp => fp.get())
            .then(result => {
                if (!result.visitorFound) showModal = true
            });
    })

</script>

{#if showModal}
    <div in:fade={{duration: 500}} class="modal modal-open">
        <div class="modal-box text-center">
            <h1 class="text-[#6c3514] tracking-wide font-medium text-4xl font-gistesy">
                Hi I'm Allison, Skin Care Therapist at the Windsor Lasherie!</h1>
            <p class="py-5 text-[#6c3514]">The Windsor Lasherie is home to several beauty and spa
                professionals who offer a range of services. You can view all available services
                when you click the Book Now button. Thanks for visiting!</p>
            <div class="modal-action">
                <button on:click={() => showModal = false}
                        class="btn btn-primary btn-outline mx-auto">
                    Close</button>
            </div>
        </div>
    </div>
{/if}

<Header />
<slot />