<script>
    import { get } from 'svelte/store';

    import {
        description,
        resubmission,
        clarityOfExposition,
        qualityOfReferences,
        reproducibility,
        explanationOfRating,
        privateComments,
        expertise,
        rating
    } from './stores.js';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import OverviewSection from './OverviewSection.svelte';

    const fields = [
        { label: 'Description', store: description, step: 0, },
        { label: 'Resubmission', store: resubmission, step: 0 },
        { label: 'Clarity Of Exposition', store: clarityOfExposition, step: 1 },
        { label: 'Quality of References', store: qualityOfReferences, step: 1 },
        { label: 'Reproducibility', store: reproducibility, step: 1 },
        { label: 'Rating', store: rating, step: 2 },
        { label: 'Explanation of Rating', store: explanationOfRating, step: 2 },
        { label: 'Reviewer Expertise', store: expertise, step: 3 },
        { label: 'Private Comments', store: privateComments, step: 4 },
    ];

    function generatePlaintext() {
        return fields
            .map(({ label, store }) => `${label.toUpperCase()}\n${get(store)}`)
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

    {#each fields as { label, store, step }}
        <OverviewSection label={label} step={step} value={store} />
    {/each}

    <div class="hide-print">
        <Button style="primary small" on:click={print}>Print</Button>
        <Button style="primary small" on:click={email}>Email</Button>
        <Button style="primary small" on:click={download}>Download</Button>
    </div>
</Stack>
