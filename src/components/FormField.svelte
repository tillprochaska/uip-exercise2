<script>
    import Field from './Field.svelte';
    import Textarea from './Textarea.svelte';
    import Choices from './Choices.svelte';

    export let field;

    const { store, validation, ...props } = field;

    const components = {
        "textarea": Textarea,
        "choices": Choices,
    };

    $: component = components[field.type];
</script>

<Field validation={$validation} {...props}>
    <svelte:component
        this={component}
        bind:value={$store}
        {...props}
    />
</Field>
