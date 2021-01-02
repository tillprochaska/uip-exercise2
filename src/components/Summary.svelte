<script>
    import formatNote from '../lib/formatNote.js';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import SummarySection from './SummarySection.svelte';

    const fields = [];

    function generatePlaintext() {
        return fields
            .map(({ label, value }) => {
                if(Array.isArray(value)) {
                    value = value
                        .map(formatNote)
                        .map(item => `* ${item}`)
                        .join('\n');
                }

                return { label, value };
            })
            .map(({ label, value }) => {
                return `${label.toUpperCase()}\n${value}`
            })
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

    <div class="hide-print">
        <Button style="primary small" on:click={print}>Print</Button>
        <Button style="primary small" on:click={email}>Email</Button>
        <Button style="primary small" on:click={download}>Download</Button>
    </div>
</Stack>
