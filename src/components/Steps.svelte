<script>
    import { setContext } from 'svelte';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';

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

        margin-bottom: calc(-1 * var(--spacing-unit));
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
            Back
        </Button>
    {/if}

    {#if $currentStep  < stepsCount - 1}
        <Button rel="next" on:click={() => $currentStep++}>
            Continue
        </Button>
    {/if}
</div>
