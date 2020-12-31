<script>
    import { derived } from 'svelte/store';
    import Icon from 'svelte-awesome';
    import { check } from 'svelte-awesome/icons';

    import {
        currentStep,
        descriptionState,
        resubmissionState,
        expoClarityState,
        refQualityState,
        reproducibilityState,
        ratingState,
        explanationState,
        expertiseState,
        commentsState,

        helloStepState,
        descriptionStepState,
        qualityStepState,
        ratingStepState,
        expertiseStepState,
        commentsStepState,
        summaryStepState,
    } from './stores.js';

    $: steps = [
        {
            title: 'Hello Hello',
            state: $helloStepState,
        },
        {
            title: 'Description & Resubmission',
            state: $descriptionStepState,
        },
        {
            title: 'Quality',
            state: $qualityStepState,
        },
        {
            title: 'Rating',
            state: $ratingStepState,
        },
        {
            title: 'Reviewer Expertise',
            state: $expertiseStepState,
        },
        {
            title: 'Private Comments',
            state: $commentsStepState,
        },
        {
            title: 'Summary',
            state: $summaryStepState,
        },
    ];
</script>

<style>
    nav {
        --bullet-color: var(--gray-400);
        --bullet-color-completed: var(--blue-600);
        --bullet-color-valid: var(--green-600);
        --bullet-color-invalid: var(--red-600);
        --bullet-size: 1.5rem;
        --bullet-border-width: 2px;
    }

    ul {
        list-style: none;
        counter-reset: step;
    }

    li {
        position: relative;
        padding: var(--spacing-unit-xs) 0;
        font-size: .85rem;
    }

    .current {
        font-weight: var(--font-weight-bold);
    }

    li + li {
        margin-top: var(--spacing-unit);
    }

    a {
        display: flex;
        align-items: center;
        gap: var(--spacing-unit-s);
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

    .valid .bullet {
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

    .visited::before {
        border-right-style: solid;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>

<nav>
    <ul>
        {#each steps as { title, state }, index}
            <li class={`
                ${state}
                ${index <= $currentStep ? 'visited' : ''}
                ${index == $currentStep ? 'current' : ''}
            `}>
                <a role="button" href="#" on:click={() => $currentStep = index}>
                    <div class="bullet">
                        {#if state === 'valid' && $currentStep !== index}
                            <Icon data={check} />
                        {:else}
                            {index + 1}
                        {/if}
                    </div>

                    {title}
                </a>
            </li>
        {/each}
    </ul>
</nav>
