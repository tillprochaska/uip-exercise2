<script>
    import FieldMessage from './FieldMessage.svelte';
    import Stack from './Stack.svelte';

    export let label;
    export let help;
    export let id;
    export let fieldset = false;

    export let state;
</script>

<style>
    .field-info {
        margin-bottom: var(--spacing-unit-s);
    }

    fieldset {
        border: none;
    }
</style>

<div class="field">
    <Stack space="xsmall">
        {#if !fieldset}
            <div class="field-info">
                <label class="beta" for={id}>
                    {label}
                </label>
                <p id="{id}-help">
                    {help}
                </p>
            </div>
            <slot />
        {/if}

        {#if fieldset}
            <fieldset>
                <div class="field-info">
                    <legend class="beta">{label}</legend>
                    <p>{help}</p>
                </div>
                <slot />
            </fieldset>
        {/if}

        {#if $state}
            <FieldMessage {state} />
        {/if}
    </Stack>
</div>
