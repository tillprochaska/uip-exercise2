import { writable } from 'svelte-persistent-store/dist/local';

export const currentStep = writable('currentStep', 0);
export const description = writable('description', '');
export const resubmission = writable('resubmission', '');
export const clarityOfExposition = writable('clarityOfExposition', '');
export const qualityOfReferences = writable('qualityOfReferences', '');
export const reproducibility = writable('reproducibility', '');
export const explanationOfRating = writable('explanationOfRating', '');
export const privateComments = writable('privateComments', '');
export const rating = writable('rating', '');
export const expertise = writable('expertise', '');
