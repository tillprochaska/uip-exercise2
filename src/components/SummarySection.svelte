<script>
    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import FieldMessage from './FieldMessage.svelte';

    import { currentStep } from '../stores.js';
    import { formatNote } from '../lib/formatters.js';

    export let label;
    export let step;
    export let value;
    export let validation;
</script>

<style>
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .action {
        margin-left: var(--spacing-unit);
    }

    .empty {
        color: var(--color-text-light);
        font-style: italic;
    }

    @media print {
        .section {
            break-inside: avoid;
        }
    }

    ul {
        padding-left: 1em;
    }
</style>

<div class="section">
    <Stack space="xsmall">
        <div class="label">
            <div>
                <h2 class="gamma">{label}</h2>

                {#if $validation}
                    <FieldMessage {...$validation} />
                {/if}
            </div>
            <div class="action hide-print">
                <Button style="secondary small" on:click={() => $currentStep = step}>Edit</Button>
            </div>
        </div>

        {#if Array.isArray($value)}
            <ul>
                {#each $value as note}
                    <li>{formatNote(note)}</li>
                {/each}
            </ul>
        {:else}
            <p>{$value}</p>
        {/if}
    </Stack>
</div>
