<script>
    import { getContext } from 'svelte';
    import { get } from 'svelte/store';
    import { getFields } from '../lib/schema.js';
    import { fieldsAsPlaintext } from '../lib/formatters.js';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import SummarySection from './SummarySection.svelte';

    const schema = getContext('schema');
    const fields = getFields(schema);
    const plaintext = fieldsAsPlaintext(fields);

    function print() {
        window.print();
    }

    function email() {
        const subject = 'Review';
        const body = encodeURIComponent(plaintext);
        const url = `mailto:reviews@example.org?subject=${subject}&body=${body}`;

        window.open(url);
    }

    function download() {
        const data = encodeURIComponent(plaintext);
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

    {#each getContext('schema').steps as step, index}
        {#if step.type === 'form'}
            {#each step.fields as field}
                <SummarySection
                    step={index}
                    value={field.store}
                    validation={field.validation}
                    label={field.label}
                />
            {/each}
        {/if}
    {/each}

    <div class="hide-print">
        <Button style="primary small" on:click={print}>Print</Button>
        <Button style="primary small" on:click={email}>Email</Button>
        <Button style="primary small" on:click={download}>Download</Button>
    </div>
</Stack>
