<script>
    import Button from './Button.svelte';
    import Icon from 'svelte-awesome';
    import { chevronRight, chevronUp } from 'svelte-awesome/icons';

    let hasOverflow = false;
    let isExpanded = false;

    function collapsible(node) {
        hasOverflow = node.clientHeight < node.scrollHeight;
    }
</script>

<style>
    .collapsible {
        position: relative;
    }

    .toggle > :global(*) {
        font-weight: var(--font-weight-bold);
    }

    .text:not(.expanded) {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
    }

    .text.expanded + .toggle {
        margin-top: var(--spacing-unit-s);
    }

    .text:not(.expanded) + .toggle {
        position: absolute;
        bottom: calc(-.125 * var(--spacing-unit));
        right: 0;

        padding-left: var(--spacing-unit);
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) var(--spacing-unit));
    }
</style>

<div class="collapsible">
    <div
        class:text={true}
        class:expanded={isExpanded}
        use:collapsible
    >
        <slot />
    </div>

    <div class="toggle">
        {#if hasOverflow}
            <Button
                style={`small ${isExpanded ? 'secondary' : 'plain'}`}
                on:click={() => isExpanded = !isExpanded}
            >
                {#if !isExpanded}
                    Continue reading
                    <Icon data={chevronRight} />
                {:else}
                    <Icon data={chevronUp} />
                    Collapse
                {/if}
            </Button>
        {/if}
    </div>
</div>
