import { writable } from 'svelte-persistent-store/dist/local';
import { derived } from 'svelte/store';

const textValidator = (min, max) => {
    return $value => {
        const chars = $value.length;

        if(chars <= 0) {
            return 'empty';
        }

        if(chars < min || chars > max) {
            return 'invalid';
        }

        return 'valid';
    };
}

const choiceValidator = value => {
    if(value === '') {
        return 'empty';
    }

    return 'valid';
};

const stepState = fieldStates => {
    if(fieldStates.includes('invalid')) {
        return 'invalid';
    }

    if(fieldStates.includes('empty')) {
        return 'empty';
    }

    return 'valid';
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
export const commentsState = derived(comments, textValidator(500, 1000));

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

export const commentsStepState = derived([
    commentsState,
], stepState);

export const summaryStepState = derived([], stepState);
