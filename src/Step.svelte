<script>
    import { getContext } from 'svelte';

    // `currentStep` is a store
    let currentStep = getContext('currentStep');

    // `registerStep` returns the index of this step
    let registerStep = getContext('registerStep');
    let step = registerStep();

    // Automatically set focus to first input in active step
    function focus(node) {
        node.querySelector('textarea, input').focus();
    }
</script>

{#if $currentStep == step}
    <div use:focus>
        <slot />
    </div>
{/if}
