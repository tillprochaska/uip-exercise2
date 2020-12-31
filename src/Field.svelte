<script>
    import Icon from 'svelte-awesome';
    import { checkCircle, exclamationCircle } from 'svelte-awesome/icons';

    export let label;
    export let help;
    export let id;
    export let fieldset = false;

    export let message = '';
    export let state;

    $: icon = state === 'valid' ? checkCircle : exclamationCircle;
</script>

<style>
    .field-info {
        margin-bottom: var(--spacing-unit-s);
    }

    fieldset {
        border: none;
    }

    .message {
        padding-top: var(--spacing-unit-xs);
        justify-content: space-between;
        font-size: var(--font-size-s);
        color: var(--color-text-light);
    }

    .invalid:not(.empty) {
        color: var(--red-600);
    }

    .valid:not(.empty) {
        color: var(--green-600);
    }
</style>

<div class="field">
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

    <div class="message {state}">
        <Icon data={icon} />
        {message}
    </div>
</div>
