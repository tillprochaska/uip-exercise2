<script>
    import { title } from './stores.js';
</script>

<style>
    main {
        max-width: 42rem;
    }
</style>

<main class="container py-4">
    <h1>Review a submission</h1>
    <p class="lead">Thanks for taking the time to review this paper submission. This form will guide you through the review process.</p>

    <form>
        <label
            class="form-label"
            for="title"
            aria-describedby="title-help"
        >
            Submission title
        </label>
        <input
            id="title"
            class="form-control"
            type="text"
            required
            bind:value={$title}
        />
        {#if $title}
            <span id="title-help" class="form-text">
                You’re reviewing a submission titled <strong>“{$title}”</strong>.
            </span>
        {/if}
    </form>
</main>
