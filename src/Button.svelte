<script>
    import App from "./App.svelte";
    import Choice from "./Choice.svelte";
    import Field from "./Field.svelte";

    export let style = '';
</script>

<style>
    button {
        padding: var(--spacing-unit-s) var(--spacing-unit);
        font-size: 1rem;
        font-family: var(--font-family);
        font-weight: var(--font-weight-bold);

        background-color: var(--blue-600);
        color: #fff;
        border: none;
        border-radius: var(--input-border-radius);
    }

    button:focus {
        outline: none;
        box-shadow: var(--input-shadow-focus)
    }

    .secondary {
        background-color: var(--gray-200);
        color: var(--gray-900);
        font-weight: unset;
    }
</style>

<button class={style} {...$$props} on:click>
    <slot />
</button>