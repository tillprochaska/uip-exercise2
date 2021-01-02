export function charsValidator({ min, max }) {
    return value => {
        const chars = value.length;
        const message = `Enter between ${min} and ${max} characters.`;
        let type;

        if(chars <= 0) {
            return { type: 'empty', message };
        }

        if(chars < min || chars > max) {
            return { type: 'invalid', message };
        }

        return { type: 'valid', message };
    };
}

export function choicesValidator() {
    return value => {
        const message = 'Please select an option.';

        if(value === '') {
            return { type: 'empty', message };
        }

        return { type: 'valid', message };
    };
}

export function optionalValidator() {
    return value => ({
        type: 'optional',
        message: 'This field is optional.',
    });
}
