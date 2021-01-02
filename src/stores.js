import { writable } from 'svelte-persistent-store/dist/local';
import { derived } from 'svelte/store';

export const currentStep = writable('currentStep', 0);
