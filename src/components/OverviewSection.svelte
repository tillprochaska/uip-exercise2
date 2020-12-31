<script>
    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import FieldMessage from './FieldMessage.svelte';

    import { currentStep } from '../stores.js';

    export let label;
    export let step;
    export let value;
    export let state;
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
</style>

<div class="section">
    <Stack space="xsmall">
        <div class="label">
            <div>
                <h2 class="gamma">{label}</h2>
                <FieldMessage {state} message="Hello hello" />
            </div>
            <div class="action hide-print">
                <Button style="secondary small" on:click={() => $currentStep = step}>Edit</Button>
            </div>
        </div>

        <p>{$value}</p>
    </Stack>
</div>
