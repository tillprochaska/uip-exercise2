import { writable } from 'svelte-persistent-store/dist/local';
import { derived } from 'svelte/store';

const textValidator = (min, max) => {
    return $value => {
        const chars = $value.length;
        const message = `Enter between ${min} and ${max} characters.`;

        if(chars <= 0) {
            return { type: 'empty', message };
        }

        if(chars < min || chars > max) {
            return { type: 'invalid', message };
        }

        return {type: 'valid', message };
    };
}

const choiceValidator = value => {
    const message = 'Please select an option';

    if(value === '') {
        return { type: 'empty', message };
    }

    return { type: 'valid', message };
};

const stepState = fieldStates => {
    const types = fieldStates.map(state => state.type);

    if(types.includes('invalid')) {
        return { type: 'invalid' };
    }

    if(types.includes('empty')) {
        return { type: 'empty' };
    }

    return { type: 'valid' };
};

export const currentStep = writable('currentStep', 0);

export const description = writable('description', '');
export const descriptionState = derived(description, textValidator(500, 1000));

export const resubmission = writable('resubmission', '');
export const resubmissionState = derived(resubmission, textValidator(500, 1000));

export const expoClarity = writable('expoClarity', '');
export const expoClarityState = derived(expoClarity, textValidator(500, 1000));

export const refQuality = writable('refQuality', '');
export const refQualityState = derived(refQuality, textValidator(500, 1000));

export const reproducibility = writable('reproducibility', '');
export const reproducibilityState = derived(reproducibility, textValidator(500, 1000));

export const rating = writable('rating', '');
export const ratingState = derived(rating, choiceValidator);

export const explanation = writable('explanation', '');
export const explanationState = derived(explanation, textValidator(500, 1000));

export const expertise = writable('expertise', '');
export const expertiseState = derived(expertise, choiceValidator);

export const comments = writable('comments', '');

export const notes = writable('notes', []);

export const helloStepState = derived([], stepState);

export const descriptionStepState = derived([
    descriptionState,
    resubmissionState,
], stepState);

export const qualityStepState = derived([
    expoClarityState,
    refQualityState,
    reproducibilityState,
], stepState);

export const ratingStepState = derived([
    ratingState,
    explanationState,
], stepState);

export const expertiseStepState = derived([
    expertiseState,
], stepState);

export const summaryStepState = derived([
    descriptionStepState,
    qualityStepState,
    ratingStepState,
    expertiseStepState,
], stepState);
