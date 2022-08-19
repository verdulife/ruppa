import { writable } from 'svelte/store';

export const frameRate = writable(24);
export const sourceContent = writable([]);
export const previewState = writable({
	src: '',
	duration: 0,
	paused: true,
	currentTime: 0
});
