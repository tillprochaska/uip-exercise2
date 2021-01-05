<script>
    import FieldMessage from './FieldMessage.svelte';
    import Stack from './Stack.svelte';
    import Collapsible from './Collapsible.svelte';

    export let label;
    export let help = '';
    export let id;
    export let fieldset = false;
    export let validation = null;

    $: helpParagraphs = help
        .split('\n')
        .map(text => text.trim())
        .filter(text => text != '');
</script>

<style>
    .field-info {
        margin-bottom: var(--spacing-unit);
    }

    fieldset {
        border: none;
    }
</style>

<div class="field">
    <Stack space="xsmall">
        {#if !fieldset}
            <div class="field-info">
                <Stack space="xsmall">
                    <label class="beta" for={id}>
                        {label}
                    </label>
                    {#if helpParagraphs.length > 0}
                        <div id="{id}-help">
                            <Collapsible>
                                <Stack space="small">
                                    {#each helpParagraphs as paragraph}
                                        <p>{@html paragraph}</p>
                                    {/each}
                                </Stack>
                            </Collapsible>
                        </div>
                    {/if}
                </Stack>
            </div>
            <slot />
        {/if}

        {#if fieldset}
            <fieldset>
                <div class="field-info">
                    <legend class="beta">{label}</legend>
                    <p>{help}</p>
                </div>
                <slot />
            </fieldset>
        {/if}

        {#if validation}
            <FieldMessage {...validation} />
        {/if}
    </Stack>
</div>
