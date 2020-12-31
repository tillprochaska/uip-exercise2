<script>
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

    import StepsNavItem from './StepsNavItem.svelte';

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
        {#each steps as { title, state }, index}
            <StepsNavItem {index} {title} {state} />
        {/each}
    </ul>
</nav>
