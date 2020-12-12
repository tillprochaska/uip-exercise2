<script>
    export let id;
</script>

<style>
    textarea {
        width: 100%;
        line-height: var(--line-height);
        font-family: var(--font-family);
        font-size: 1rem;
        padding: var(--input-padding);
    }
</style>

<textarea {id} name={id} aria-describedby="{id}-help"></textarea>