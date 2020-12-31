<script>
    import autoresize from './autoresize.js';
    import Icon from 'svelte-awesome';
    import { checkCircle, exclamationCircle } from 'svelte-awesome/icons';

    export let id;
    export let value = '';

    export let minChars = 500;
    export let maxChars = 1000;

    $: chars = value.length;
    $: inBounds = (chars >= minChars && chars <= maxChars);
    $: messageClass = inBounds ? 'success' : 'error';
    $: icon = inBounds ? checkCircle : exclamationCircle;
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

    .stats {
        display: flex;
        width: 100%;
        padding-top: var(--spacing-unit-xs);
        justify-content: space-between;
        font-size: .85rem;
        color: var(--color-text-light);
    }

    .error:not(.empty) {
        color: var(--red-600);
    }

    .success:not(.empty) {
        color: var(--green-600);
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

    <div class="stats">
        <span class="message {messageClass}" class:empty={chars == 0}>
            <Icon data={icon} />
            Enter between {minChars} and {maxChars} characters.
        </span>
        <span class="count">{chars}</span>
    </div>
</div>
