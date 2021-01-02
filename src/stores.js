import { writable } from 'svelte-persistent-store/dist/local';

export const currentStep = writable('currentStep', 0);
