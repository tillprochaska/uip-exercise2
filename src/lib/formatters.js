import { get } from 'svelte/store';

export function fieldsAsPlaintext(fields) {
    return fields
        .map(({ label, store }) => {
            let value = get(store);

            if(Array.isArray(value)) {
                value = value
                    .map(formatNote)
                    .map(item => `* ${item}`)
                    .join('\n');
            }

            if(value === '') {
                value = 'This field is empty.';
            }

            return { label, value };
        })
        .map(({ label, value }) => {
            return `${label.toUpperCase()}\n${value}`
        })
        .join('\n\n');
}

export function formatNote({ note, reference }) {
    if(!reference) {
        return note;
    }

    return `${note} [${reference}]`;
}
