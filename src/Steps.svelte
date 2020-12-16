<script>
    import { setContext } from 'svelte';

    // `currentStep` is a store
    export let currentStep;
    setContext('currentStep', currentStep);

    let stepsCount = 0;

    // `registerStep` is passed down to `Step` components.
    // It allows the individual `Step` components to register
    // themselves and returns an index for the respective step.
    setContext('registerStep', () => {
        stepsCount++;
        return stepsCount - 1;
    });
</script>

<slot />

{#if $currentStep > 0}
    <button on:click={() => $currentStep--}>Previous</button>
{/if}

{#if $currentStep  < stepsCount - 1}
    <button on:click={() => $currentStep++}>Next</button>
{/if}