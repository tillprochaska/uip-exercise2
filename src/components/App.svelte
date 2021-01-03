<script>
    import { style } from '../stores.js';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';
    import Review from './Review.svelte';
</script>

<style>
    .wrapper {
        display: flex;
        width: 100%;
        min-height: 100vh;
        padding: var(--spacing-unit);
    }

    .content {
        max-width: 20rem;
        margin: auto;
        text-align: center;
    }
</style>

{#if !$style}
    <div class="wrapper">
        <main class="content">
            <Stack>
                <header>
                    <Stack space="small">
                        <h1 class="beta">Thank you for taking the time to review a submission!</h1>
                        <p>To get started, please select one of the following review templates:</p>
                    </Stack>
                </header>

                <Stack space="small">
                    <Button style="primary block" on:click={() => $style = 'siggraph'}>SIGGRAPH</Button>
                    <Button style="primary block" on:click={() => $style = 'demo'}>Demo</Button>
                </Stack>
            </Stack>
        </main>
    </div>
{:else}
    <Review />
{/if}
