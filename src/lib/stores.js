import { writable } from 'svelte/store';

export const isPlaying = writable(false);
export const previewSrc = writable('');
export const sourceContent = writable([]);
export const previewState = writable({
	element: undefined,
	duration: undefined,
	paused: undefined,
	currentTime: undefined
});
