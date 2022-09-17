<script>
    import Saos from "saos";

    export let duration = "0s";
    export let delay = "0s"
</script>

<Saos once animation="fade-in {duration} cubic-bezier(0.35, 0.5, 0.65, 0.95) both"
      css_animation="animation-delay: {delay};">
    <slot/>
</Saos>

<style>
    @keyframes -global-fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>