<script>
    import { currentStep } from './stores.js';

    const steps = [
        'Hello Hello',
        'Description & Resubmission',
        'Quality',
        'Rating',
        'Reviewer Expertise',
        'Private Comments',
        'Summary',
    ];
</script>

<style>
    nav {
        --bullet-color: var(--gray-600);
        --bullet-color-completed: var(--blue-600);
        --bullet-size: 1.5rem;
        --bullet-border-width: 2px;
    }

    ul {
        list-style: none;
        counter-reset: step;
    }

    li {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--spacing-unit-s);
        font-size: .85rem;
    }

    li + li {
        margin-top: var(--spacing-unit);
    }

    li::before {
        counter-increment: step;
        content: counter(step);

        display: block;
        width: var(--bullet-size);
        height: var(--bullet-size);
        flex-shrink: 0;
        text-align: center;
        line-height: 1.5rem;

        border: var(--bullet-border-width) solid var(--bullet-color);
        border-radius: 50%;
        font-size: .9em;
        font-weight: var(--font-weight-bold);
    }

    .completed::before {
        background-color: var(--bullet-color-completed);
        border-color: var(--bullet-color-completed);
        color: #fff;
    }

    li::after {
        content: '';

        position: absolute;
        top: calc(-1 * var(--spacing-unit));
        left: calc(.5 * var(--bullet-size) + .5 * var(--bullet-border-width));

        width: var(--bullet-border-width);
        height: var(--spacing-unit);
        background-color: var(--bullet-color);
    }

    li:first-child::after {
        content: none;
    }

    .completed::after {
        background-color: var(--bullet-color-completed);
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>

<nav>
    <ul>
        {#each steps as step, index}
            <li class:completed={index <= $currentStep}>
                <a role="button" href="#" on:click={() => $currentStep = index}>
                    {step}
                </a>
            </li>
        {/each}
    </ul>
</nav>
