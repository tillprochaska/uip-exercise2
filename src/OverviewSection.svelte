<script>
    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import { currentStep } from './stores.js';
import { empty } from 'svelte/internal';

    export let label;
    export let step;
    export let value;
</script>

<style>
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .label h2 {
        margin-right: var(--spacing-unit);
    }

    .empty {
        color: var(--color-text-light);
        font-style: italic;
    }
</style>

<Stack space="xsmall">
    <div class="label">
        <h2 class="gamma">{label}</h2>
        <div class="hide-print">
            <Button style="secondary small" on:click={() => $currentStep = step}>Edit</Button>
        </div>
    </div>

    <p>
        {#if $value}
            {$value}
        {:else}
            <span class="empty">This field is empty.</span>
        {/if}
    </p>
</Stack>