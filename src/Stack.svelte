<script>
    export let space = null;
    $: modifier = space ? `stack-${space}` : '';
</script>

<style>
    :global(.stack > * + *) {
        margin-top: var(--spacing-unit);
    }

    :global(.stack-small > * + *) {
        margin-top: var(--spacing-unit-s);
    }
</style>

<div class="stack {modifier}">
    <slot />
</div>
