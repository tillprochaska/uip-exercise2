<script>
    import Layout from './Layout.svelte';
    import Stack from './Stack.svelte';
    import Steps from './Steps.svelte';
    import Step from './Step.svelte';
    import StepsNav from './StepsNav.svelte';
    import Form from './Form.svelte';

    import { setContext, getContext } from 'svelte';
    import { currentStep } from '../stores.js';
    import { initSchema } from '../lib/schema.js';

    import schema from '../schema.json';
    setContext('schema', initSchema(schema));
</script>

<Layout>
    <div slot="sidebar">
        <StepsNav />
    </div>

    <Steps {currentStep}>
        {#each getContext('schema').steps as step}
            <Step>
                {#if step.type === 'text'}
                    <h1 class="alpha">{step.title}</h1>
                    <p>{step.text}</p>
                {/if}

                {#if step.type === 'form'}
                    <Form fields={step.fields} />
                {/if}
            </Step>
        {/each}
    </Steps>
</Layout>
