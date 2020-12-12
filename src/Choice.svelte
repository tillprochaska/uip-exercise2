<script>
    export let id;
    export let value;
    export let label;
    export let caption;
</script>

<style>
    .choice {
        display: flex;
        gap: var(--spacing-unit-s);
    }

    .choice > input {
        margin-top: var(--spacing-unit-xs);
    }

    .choice-label {
        display: block;
        font-weight: var(--font-weight-bold);
    }
</style>

<label class="choice">
    <input type="radio" name={id} value={value}>
    <div class="choice-info">
        <strong class="choice-label">{label}</strong>
        {caption}
    </div>
</label>