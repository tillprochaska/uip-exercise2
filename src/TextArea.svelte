<script>
    import autoresize from './autoresize.js';

    export let id;
    export let value = '';

    $: chars = value.length;
</script>

<style>
    div {
        position: relative;
    }

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

    .counter {
        position: absolute;
        bottom: calc(-1 * var(--spacing-unit-xs));
        right: 0;
        transform: translateY(100%);
        color: var(--color-text-light);
        font-size: var(--font-size-s);
    }
</style>

<div>
    <textarea
        {id}
        name={id}
        aria-describedby="{id}-help"
        use:autoresize
        bind:value
    ></textarea>

    <span class="counter">{chars}</span>
</div>
