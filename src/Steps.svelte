<script>
    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
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

<style>
    .pagination {
        display: flex;
        justify-content: space-between;
    }

    :global([rel="next"]) {
        margin-left: auto;
    }
</style>

<Stack>
    <slot />

    <div class="pagination">
        {#if $currentStep > 0}
            <Button style="secondary" rel="prev" on:click={() => $currentStep--}>
                Previous
            </Button>
        {/if}

        {#if $currentStep  < stepsCount - 1}
            <Button rel="next" on:click={() => $currentStep++}>
                Next
            </Button>
        {/if}
    </div>
</Stack>