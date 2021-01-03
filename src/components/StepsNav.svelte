<script>
    import StepsNavItem from './StepsNavItem.svelte';

    export let schema;
</script>

<style>
    ul {
        list-style: none;
        counter-reset: step;
    }

    ul > :global(* + *) {
        margin-top: var(--spacing-unit);
    }
</style>

<nav>
    <ul>
        {#each schema.steps as step, index}
            <StepsNavItem {index} {step} />
        {/each}
    </ul>
</nav>
