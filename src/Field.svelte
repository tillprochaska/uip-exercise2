<script>
    export let label;
    export let help;
    export let id;
    export let fieldset = false;
</script>

<style>
    .field-info {
        margin-bottom: var(--spacing-unit-s);
    }

    .field-label {
        font-weight: var(--font-weight-bold);
        font-size: 1.25rem;
    }

    fieldset {
        border: none;
    }
</style>

<div class="field">
    {#if !fieldset}
        <div class="field-info">
            <label class="field-label" for={id}>
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
                <legend class="field-label">{label}</legend>
                <p>{help}</p>
            </div>
            <slot />
        </fieldset>
    {/if}
</div>
