<script>
    export let style = 'primary';
</script>

<style>
    button {
        font-size: 1rem;
        font-family: var(--font-family);
        background: none;
        border: none;
    }

    button:focus {
        outline: none;
        box-shadow: var(--input-shadow-focus)
    }

    .primary,
    .secondary {
        padding: var(--spacing-unit-s) var(--spacing-unit);
        border-radius: var(--input-border-radius);
        border-radius: 9999px;
    }

    .primary {
        background-color: var(--blue-600);
        color: #fff;
        font-weight: var(--font-weight-bold);
        -webkit-font-smoothing: antialiased;
    }

    .secondary {
        background-color: var(--gray-200);
        color: var(--gray-900);
    }

    .small {
        padding: var(--spacing-unit-xs) var(--spacing-unit-s);
        font-size: .85rem;
    }
</style>

<button class={style} {...$$props} on:click>
    <slot />
</button>