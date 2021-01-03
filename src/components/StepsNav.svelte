<script>
    import { getContext } from 'svelte';
    import StepsNavItem from './StepsNavItem.svelte';

    const schema = getContext('schema');
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
