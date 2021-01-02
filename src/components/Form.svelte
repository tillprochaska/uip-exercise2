<script>
    import Stack from './Stack.svelte';
    import FormField from './FormField.svelte';

    export let fields;
</script>

<Stack space="large">
    {#each fields as field}
        <FormField {field} />
    {/each}
</Stack>
