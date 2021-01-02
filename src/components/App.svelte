<script>
    import Layout from './Layout.svelte';
    import Stack from './Stack.svelte';
    import Steps from './Steps.svelte';
    import Step from './Step.svelte';
    import StepsNav from './StepsNav.svelte';
    import Form from './Form.svelte';
    import Summary from './Summary.svelte';

    import { setContext, getContext } from 'svelte';
    import { currentStep } from '../stores.js';
    import { initSchema } from '../lib/schema.js';

    import siggraph from '../schemas/siggraph.yml';

    const schema = initSchema(siggraph);
    setContext('schema', schema);
</script>

<Layout>
    <div slot="sidebar">
        <StepsNav />
    </div>

    <Steps {currentStep}>
        {#each schema.steps as step}
            <Step>
                {#if step.type === 'text'}
                    <h1 class="alpha">{step.title}</h1>
                    <p>{step.text}</p>
                {/if}

                {#if step.type === 'form'}
                    <Form fields={step.fields} />
                {/if}

                {#if step.type === 'summary'}
                    <Summary />
                {/if}
            </Step>
        {/each}
    </Steps>
</Layout>
