<script>
    import Icon from 'svelte-awesome';
    import { checkCircle, exclamationCircle } from 'svelte-awesome/icons';

    export let state;
    $: icon = $state.type === 'valid' ? checkCircle : exclamationCircle;
</script>

<style>
    .message {
        justify-content: space-between;
        font-size: var(--font-size-s);
        color: var(--color-text-light);
    }

    .invalid:not(.empty) {
        color: var(--red-600);
    }

    .valid:not(.empty) {
        color: var(--green-600);
    }
</style>

<div class="message {$state.type}">
    <Icon data={icon} />
    {$state.message}
</div>
