export default function(node) {
    // `offsetHeight` includes the top and bottom borders
    const offset = node.offsetHeight - node.clientHeight;

    function resize() {
        // Briefly reset the height to `auto` in order to
        // to handle cases where textarea content got smaller
        node.style.height = 'auto';

        // Add the height of top and bottom borders as it's
        // not included in `scrollHeight`
        node.style.height = offset + node.scrollHeight + 'px';
    }

    // Call the handler once the textarea is rendered initially
    resize();

    node.addEventListener('input', resize);

    return {
        destroy() {
            node.removeEventListener('input', resize);
        },
    };
}
