<script>
    import Stack from './Stack.svelte';
    import Choice from './Choice.svelte';

    export let id;
    export let value;
    export let choices;
</script>

<Stack space="small">
    {#each choices as choice}
        <Choice
            id={`${id}-${choice.id}`}
            value={choice.value}
            label={choice.label}
            description={choice.description}
            bind:group={value}
        />
    {/each}
</Stack>
