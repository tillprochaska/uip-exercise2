<script>
    export let id;

    function autoresize(node) {
        // `offsetHeight` includes the top and bottom borders
        const offset = node.offsetHeight - node.clientHeight;

        function resize() {
            // Briefly reset the height to `auto` in order to
            // to handle cases where textarea content got smaller
            node.style.height = 'auto';

            // Add the height of top and bottom borders as it's
            // not included in `scrollHeight`
            node.style.height = offset + node.scrollHeight + 'px';
        }

        // Call the handler once the textarea is rendered initially
        resize();
        
        node.addEventListener('input', resize);

        return {
            destroy() {
                node.removeEventListener('input', resize)
            },
        };
    }
</script>

<style>
    textarea {
        display: block;
        width: 100%;
        min-height: calc(4 * var(--spacing-unit));
        max-height: calc(12 * var(--spacing-unit));
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

<textarea
    {id}
    name={id}
    aria-describedby="{id}-help"
    use:autoresize
></textarea>
