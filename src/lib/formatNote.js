export default function({ note, reference }) {
    if(!reference) {
        return note;
    }

    return `${note} [${reference}]`;
}
