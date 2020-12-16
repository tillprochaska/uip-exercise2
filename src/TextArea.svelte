<script>
    export let id;
</script>

<style>
    textarea {
        width: 100%;
        height: calc(4 * var(--spacing-unit));
        padding: var(--input-padding);

        line-height: var(--line-height);
        font-family: var(--font-family);
        font-size: 1rem;

        border-width: var(--input-border-width);
        border-color: var(--input-border-color);
        border-radius: var(--input-border-radius);
        resize: none;
    }

    textarea:focus {
        outline: none;
        box-shadow: var(--input-shadow-focus);
        border-color: var(--input-border-color-focus);
        border-width: var(--input-border-width-focus);
    }
</style>

<textarea {id} name={id} aria-describedby="{id}-help"></textarea>
