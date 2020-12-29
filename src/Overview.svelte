<script>
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
    import OverviewSection from './OverviewSection.svelte';
</script>

<Stack>
    <Stack space="small">
        <h1 class="alpha">Summary</h1>
        <p>Below you can find a summary of your review. Once finished, you can print, download or submit your review via email.</p>
    </Stack>

    <OverviewSection label="Description" step={0} value={description} />
    <OverviewSection label="Resubmission" step={0} value={resubmission} />
    <OverviewSection label="Clarity of Exposition" step={1} value={clarityOfExposition} />
    <OverviewSection label="Quality of References" step={1} value={qualityOfReferences} />
    <OverviewSection label="Reproducibility" step={1} value={reproducibility} />
    <OverviewSection label="Rating" step={2} value={rating} />
    <OverviewSection label="Explanation of Rating" step={2} value={explanationOfRating} />
    <OverviewSection label="Reviewer Expertise" step={3} value={expertise} />
    <OverviewSection label="Private Comments" step={4} value={privateComments} />
</Stack>
