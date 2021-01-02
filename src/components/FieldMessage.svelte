<script>
    import Icon from 'svelte-awesome';
    import { checkCircle, exclamationCircle, infoCircle } from 'svelte-awesome/icons';

    export let type;
    export let message;

    $: icon = (() => {
        if(type === 'valid') {
            return checkCircle;
        }

        if(type === 'optional') {
            return infoCircle;
        }

        return exclamationCircle;
    })();
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

<div class="message {type}">
    <Icon data={icon} />
    {message}
</div>
