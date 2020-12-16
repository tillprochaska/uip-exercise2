<script>
    export let id;
    export let value;
    export let label;
    export let theme = '';
    export let caption = '';
</script>

<style>
    .choice {
        --color-border: var(--input-border-color);
        --color-border-focus: var(--input-border-color-focus);
        --color-background: var(--gray-100);

        position: relative;
        display: flex;
        gap: var(--spacing-unit-s);
        padding: var(--spacing-unit-s);
    }

    .choice > input {
        align-self: center;
    }

    .choice-label {
        display: block;
        font-weight: var(--font-weight-bold);
    }

    .choice-caption {
        color: var(--color-text-light);
    }

    input::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 100%;

        border-width: var(--input-border-width);
        border-color: var(--color-border);
        border-style: solid;
        border-radius: var(--input-border-radius);
    }

    input:checked::after {
        background: var(--color-background);
        border-width: var(--input-border-width-focus);
    }

    input:focus {
        outline: none;
    }

    input:focus::after {
        box-shadow: var(--input-shadow-focus);
        border-color: var(--color-border-focus);
    }
</style>

<label class="choice {theme}">
    <input type="radio" name={id} value={value}>
    <div class="choice-info">
        <strong class="choice-label">{label}</strong>
        <span class="choice-caption">{caption}</span>
    </div>
</label>
