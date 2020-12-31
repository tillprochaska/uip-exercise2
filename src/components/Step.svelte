<script>
    import { getContext } from 'svelte';
    import autofocus from '../actions/autofocus.js';

    // `currentStep` is a store
    let currentStep = getContext('currentStep');

    // `registerStep` returns the index of this step
    let registerStep = getContext('registerStep');
    let step = registerStep();
</script>

{#if $currentStep == step}
    <div use:autofocus>
        <slot />
    </div>
{/if}
