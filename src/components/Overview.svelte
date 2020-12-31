<script>
    import { get } from 'svelte/store';

    import {
        description,
        descriptionState,

        resubmission,
        resubmissionState,

        expoClarity,
        expoClarityState,

        refQuality,
        refQualityState,

        reproducibility,
        reproducibilityState,

        explanation,
        explanationState,

        comments,
        commentsState,

        expertise,
        expertiseState,

        rating,
        ratingState,
    } from '../stores.js';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import OverviewSection from './OverviewSection.svelte';

    const fields = [
        {
            label: 'Description',
            value: description,
            state: descriptionState,
            step: 1,
        },
        {
            label: 'Resubmission',
            value: resubmission,
            state: resubmissionState,
            step: 1
        },
        {
            label: 'Clarity Of Exposition',
            value: expoClarity,
            state: expoClarityState,
            step: 2
        },
        {
            label: 'Quality of References',
            value: refQuality,
            state: refQualityState,
            step: 2
        },
        {
            label: 'Reproducibility',
            value: reproducibility,
            state: refQualityState,
            step: 2
        },
        {
            label: 'Rating',
            value: rating,
            state: ratingState,
            step: 3
        },
        {
            label: 'Explanation of Rating',
            value: explanation,
            state: explanationState,
            step: 3
        },
        {
            label: 'Reviewer Expertise',
            value: expertise,
            state: expertiseState,
            step: 4
        },
        {
            label: 'Private Comments',
            value: comments,
            state: expertiseState,
            step: 5
        },
    ];

    function generatePlaintext() {
        return fields
            .map(({ label, value }) => `${label.toUpperCase()}\n${get(value)}`)
            .join('\n\n');
    }

    function print() {
        window.print();
    }

    function email() {
        const subject = 'Review';
        const body = encodeURIComponent(generatePlaintext());
        const url = `mailto:reviews@example.org?subject=${subject}&body=${body}`;

        window.open(url);
    }

    function download() {
        const data = encodeURIComponent(generatePlaintext());
        const url = `data:text/plain,${data}`;

        const tag = document.createElement('a');
        tag.setAttribute('href', url);
        tag.setAttribute('download', 'review.txt');
        tag.click();
    }
</script>

<Stack>
    <Stack space="small">
        <h1 class="alpha">Summary</h1>
        <p class="hide-print">Below you can find a summary of your review. Once finished, you can print, download or submit your review via email.</p>
    </Stack>

    <div class="hide-print">
        <Button style="primary small" on:click={print}>Print</Button>
        <Button style="primary small" on:click={email}>Email</Button>
        <Button style="primary small" on:click={download}>Download</Button>
    </div>

    {#each fields as { label, value, state, step }}
        <OverviewSection
            label={label}
            step={step}
            {value}
            {state}
        />
    {/each}

    <div class="hide-print">
        <Button style="primary small" on:click={print}>Print</Button>
        <Button style="primary small" on:click={email}>Email</Button>
        <Button style="primary small" on:click={download}>Download</Button>
    </div>
</Stack>
