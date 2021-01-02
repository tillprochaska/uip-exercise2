<script>
    import Icon from 'svelte-awesome';
    import { trash } from 'svelte-awesome/icons';

    import Stack from './Stack.svelte';
    import Button from './Button.svelte';

    import autoresize from '../actions/autoresize.js';

    export let value;

    function addNote() {
        value = [...value, {
            note: '',
            reference: '',
        }];
    }

    function removeNote(index) {
        value = [
            ...value.slice(0, index),
            ...value.slice(index + 1),
        ];
    }

    function focus(node) {
        node.focus();
    }
</script>

<style>
    .notes {
        --border-radius: 10px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
    }

    th {
        text-align: left;
        padding: var(--spacing-unit-s);
    }

    td {
        border-top: 2px solid white;
        vertical-align: top;
    }

    th,
    td {
        background-color: var(--gray-100);
    }

    th:first-child {
        border-top-left-radius: var(--border-radius);
    }

    th:last-child {
        border-top-right-radius: var(--border-radius);
    }

    tr:last-child td:first-child {
        border-bottom-left-radius: var(--border-radius);
    }

    tr:last-child td:last-child {
        border-bottom-right-radius: var(--border-radius);
    }

    td:not(.actions):focus-within {
        background-color: #fff;
        outline-width: var(--input-border-width-focus);
        outline-style: solid;
        outline-color: var(--input-border-color-focus);
        outline-offset: calc(-1 * var(--input-border-width-focus));
    }

    .actions {
        text-align: center;
        vertical-align: middle;
    }

    textarea {
        width: 100%;
        min-height: 100%;
        padding: var(--spacing-unit-s);

        font-size: var(--font-size-s);
        line-height: var(--line-height);
        font-family: var(--font-family);
        color: var(--color-text);
        resize: none;

        border: none;
        background: none;
    }

    textarea:focus {
        outline: none;
    }

    .empty-state {
        padding: var(--spacing-unit-l);
        background: var(--gray-100);
        text-align: center;
        border-radius: var(--border-radius);
    }

    .empty-state p {
        max-width: 20rem;
        margin: auto;
        font-weight: var(--font-weight-bold);
    }
</style>

<div class="notes">
    {#if value.length <= 0}
        <div class="empty-state">
            <Stack space="small">
                <p>Add notes to your review to give authors feedback on specific parts of their submission.</p>
                <Button on:click={addNote}>Add note</Button>
            </Stack>
        </div>
    {:else}
        <Stack space="small">
            <table>
                <thead>
                    <tr>
                        <th>Note</th>
                        <th>Reference</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {#each value as {note, reference}, index}
                        <tr>
                            <td>
                                <textarea
                                    id={`note-${index}`}
                                    placeholder="e.g. missing reference, spelling mistake, …"
                                    bind:value={note}
                                    use:focus
                                    use:autoresize
                                />
                            </td>
                            <td>
                                <textarea
                                    id={`reference-${index}`}
                                    placeholder="e.g. page 4, paragraph 3"
                                    bind:value={reference}
                                    use:autoresize
                                />
                            </td>
                            <td class="actions">
                                <Button style="plain small danger" on:click={() => removeNote(index)}>
                                    <Icon data={trash} scale={1.25} label="Remove note" />
                                </Button>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>

            <Button style="primary small" on:click={addNote}>Add note</Button>
        </Stack>
    {/if}
</div>
