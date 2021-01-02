import { writable } from 'svelte-persistent-store/dist/local';
import { derived } from 'svelte/store';

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

    return writable(`${schemaId}-${field.id}`, defaultValue);
};

function initFieldValidation(schemaId, field) {
    const options = field.validation;

    const validators = {
        chars: charsValidator,
        choices: choicesValidator,
        optional: optionalValidator,
    };

    if(!validators[options.type]) {
        return null;
    }

    const validator = validators[options.type](options);

    return derived(field.store, value => {
        return validator(value)
    });
}
