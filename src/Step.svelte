<script>
    import { getContext, setContext, onMount } from 'svelte';

    // `currentStep` is a store
    let currentStep = getContext('currentStep');

    // `registerStep` returns the index of this step
    let registerStep = getContext('registerStep');
    let step = registerStep();
</script>

{#if $currentStep == step}
    <slot />
{/if}
