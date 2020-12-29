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
        position: sticky;
        bottom: 0;

        display: flex;
        margin-top: var(--spacing-unit-l);
        padding: var(--spacing-unit) 0;
        justify-content: space-between;
        background: #fff;
        border-top: 1px solid var(--gray-300);
    }

    :global([rel="next"]) {
        margin-left: auto;
    }
</style>

<slot />

<div class="pagination hide-print">
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