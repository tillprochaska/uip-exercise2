// Automatically set focus to first input in active step
export default function(node) {
    const input = node.querySelector('textarea, input');

    if(!input) {
        return;
    }

    input.focus();
}
