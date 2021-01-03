<script>
    import { writable } from 'svelte/store';

    import Layout from './Layout.svelte';
    import Stack from './Stack.svelte';
    import Steps from './Steps.svelte';
    import Step from './Step.svelte';
    import StepsNav from './StepsNav.svelte';
    import Form from './Form.svelte';
    import Summary from './Summary.svelte';

    import { currentStep, style } from '../stores.js';
    import { initSchema } from '../lib/schema.js';

    import siggraph from '../schemas/siggraph.yml';
    import demo from '../schemas/demo.yml';

    const schemas = {
        siggraph,
        demo,
    };

    const schema = initSchema(schemas[$style]);
</script>

<Layout>
    <div slot="sidebar">
        <StepsNav {schema} />
    </div>

    <Steps {currentStep}>
        {#each schema.steps as step}
            <Step>
                {#if step.type === 'text'}
                    <h1 class="alpha">{step.title}</h1>
                    <p>{@html step.text}</p>
                {/if}

                {#if step.type === 'form'}
                    <Form fields={step.fields} />
                {/if}

                {#if step.type === 'summary'}
                    <Summary {schema} />
                {/if}
            </Step>
        {/each}
    </Steps>
</Layout>
