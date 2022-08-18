import { writable } from 'svelte/store';

export const isPlaying = writable(false);
export const previewSrc = writable('');
export const sourceContent = writable([]);
export const previewState = writable({
	src: '',
	duration: 0,
	paused: true,
	currentTime: 0
});
