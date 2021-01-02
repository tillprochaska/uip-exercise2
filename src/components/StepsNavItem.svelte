<script>
    import Icon from 'svelte-awesome';
    import { check } from 'svelte-awesome/icons';

    import { currentStep } from '../stores.js';

    export let index;
    export let title;
    export let state;

    $: isVisited = index < $currentStep;
    $: isCurrent = index === $currentStep;
    $: isValid = state && $state.type === 'valid' || !state && isVisited;

    $: style = state ? $state.type : 'optional';

    $: classNames = [
        style,
        isVisited ? 'visited' : '',
        isCurrent ? 'current' : '',
    ].join(' ');

    function goToStep() {
        $currentStep = index;
    }
</script>

<style>
    li {
        --bullet-color: var(--gray-400);
        --bullet-color-completed: var(--blue-600);
        --bullet-color-valid: var(--green-600);
        --bullet-color-invalid: var(--red-600);
        --bullet-size: 1.5rem;
        --bullet-border-width: 2px;

        position: relative;
        padding: var(--spacing-unit-xs) 0;
        font-size: .85rem;
    }

    .title {
        color: var(--color-text-light);
    }

    a:hover .title,
    .current .title {
        color: var(--color-text);
    }

    a:hover .title {
        text-decoration: underline var(--gray-300) 2px;
    }

    .current {
        font-weight: var(--font-weight-bold);
    }

    a {
        display: flex;
        align-items: center;
        gap: var(--spacing-unit-s);
        color: inherit;

        text-decoration: none;
    }

    .bullet {
        display: flex;
        width: var(--bullet-size);
        height: var(--bullet-size);
        flex-shrink: 0;
        justify-content: space-around;
        align-items: center;

        border: var(--bullet-border-width) solid var(--bullet-color);
        border-radius: 50%;
        font-size: .9em;
        font-weight: var(--font-weight-bold);
    }

    .visited .bullet {
        background-color: var(--bullet-color);
        color: #fff;
    }

    .valid .bullet,
    .optional.visited .bullet {
        background-color: var(--bullet-color-valid);
        border-color: var(--bullet-color-valid);
        color: #fff;
    }

    .current .bullet {
        background-color: var(--bullet-color-completed);
        border-color: var(--bullet-color-completed);
        color: #fff;
    }

    li::before {
        content: '';

        position: absolute;
        top: calc(-1 * var(--spacing-unit));
        left: calc(.5 * var(--bullet-size) - .5 * var(--bullet-border-width));

        width: var(--bullet-border-width);
        height: var(--spacing-unit);
        border-right: var(--bullet-border-width) dashed var(--bullet-color);
    }

    li:first-child::before {
        content: none;
    }

    .visited::before,
    .current::before {
        border-right-style: solid;
    }
</style>

<li class={classNames}>
    <a role="button" href="#" on:click={goToStep}>
        <div class="bullet">
            {#if isValid && !isCurrent}
                <Icon data={check} />
            {:else}
                {index + 1}
            {/if}
        </div>

        <div class="title">{title}</div>
    </a>
</li>
