<script>
    export let id;
</script>

<style>
    textarea {
        width: 100%;
        padding: var(--input-padding);

        line-height: var(--line-height);
        font-family: var(--font-family);
        font-size: 1rem;

        border-width: var(--input-border-width);
        border-color: var(--input-border-color);
        border-radius: 0;
        resize: none;
    }

    textarea:focus {
        outline: none;
        box-shadow: 0 0 0 3px var(--blue-100);
        border-color: var(--input-border-color-focus);
    }
</style>

<textarea {id} name={id} aria-describedby="{id}-help"></textarea>
