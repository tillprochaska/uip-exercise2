<script>
    import { 
        description, 
        currentStep,
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
</script>

<style>
    .label {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .label h2 {
        margin-right: var(--spacing-unit);
    }
</style>

<Stack space="large">
    <Stack space="small">
        <div class="label">
            <h2 class="beta">Description</h2>
            <Button style="secondary small" on:click={() => $currentStep = 0}>Edit</Button>
        </div>

        <p>{$description}</p>
    </Stack>
</Stack>

