<script>
    export let id;
    export let name;
    export let value;
    export let label;
    export let theme = '';
    export let caption = '';
    export let group = '';
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

    .strong-negative {
        --color-border: var(--red-600);
        --color-border-focus: var(--red-600);
        --color-background: var(--red-50);
    }

    .negative {
        --color-border: var(--orange-600);
        --color-border-focus: var(--orange-600);
        --color-background: var(--orange-50);
    }

    .positive {
        --color-border: var(--lime-600);
        --color-border-focus: var(--lime-600);
        --color-background: var(--lime-50);
    }

    .strong-positive {
        --color-border: var(--green-600);
        --color-border-focus: var(--green-600);
        --color-background: var(--green-50);
    }


    .choice-label {
        display: block;
        font-weight: var(--font-weight-bold);
    }

    .choice-caption {
        color: var(--color-text-light);
    }

    input {
        align-self: center;
    }

    input::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;

        background: var(--color-background);
        opacity: .5;

        border-width: var(--input-border-width);
        border-color: var(--color-border);
        border-style: solid;
        border-radius: var(--input-border-radius);
    }

    input:checked::after {
        border-width: var(--input-border-width-focus);
        opacity: 1;
    }

    input:focus {
        outline: none;
    }

    input:focus::after {
        --input-shadow-color-focus: var(--color-background);

        opacity: 1;
        box-shadow: var(--input-shadow-focus);
        border-color: var(--color-border-focus);
    }
</style>

<label class="choice {theme}">
    <input
        type="radio"
        {name}
        {id}
        {value}
        bind:group
    >
    <div class="choice-info">
        <strong class="choice-label">{label}</strong>
        <span class="choice-caption">{caption}</span>
    </div>
</label>
