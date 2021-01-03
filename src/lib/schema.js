import { writable, derived, get } from 'svelte/store';

import {
    charsValidator,
    choicesValidator,
    optionalValidator,
} from './validators.js';

export function initSchema(schema) {
    return {
        ...schema,
        steps: schema.steps.map(step => initStep(schema.id, step)),
    };
}

export function getFields(schema) {
    return schema.steps
        .map(step => {
            if(!step.fields) {
                return [];
            }

            return step.fields;
        })
        .flat();
}

export function getStepState(step) {
    if(!step.fields) {
        return derived([], () => 'optional');
    }

    const validations = step.fields.map(field => field.validation);

    const store = derived(validations, validations => {
        const types = validations.map(validation => validation.type);

        if(types.includes('invalid')) {
            return 'invalid';
        }

        if(types.includes('empty')) {
            return 'empty';
        }

        if(types.every(item => item === 'optional')) {
            return 'optional';
        }

        return 'valid';
    });

    debugger;

    return store;
}

function initStep(schemaId, step) {
    if(step.type !== 'form') {
        return step;
    }

    return {
        ...step,
        fields: step.fields.map(field => initField(schemaId, field)),
    };
}

function initField(schemaId, field) {
    field.store = initFieldStore(schemaId, field);
    field.validation = initFieldValidation(schemaId, field);

    return field;
}

function initFieldStore(schemaId, field) {
    let defaultValue;

    if(field.type === 'textarea' || field.type === 'choices') {
        defaultValue = '';
    }

    if(field.type === 'notes') {
        defaultValue = [];
    }

    return writable(defaultValue);
};

function initFieldValidation(schemaId, field) {
    const options = field.validation || { type: 'optional' };

    const validators = {
        chars: charsValidator,
        choices: choicesValidator,
        optional: optionalValidator,
    };

    const validator = validators[options.type](options);

    return derived(field.store, value => {
        return validator(value)
    });
}
