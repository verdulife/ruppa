<script>
	import { previewState, frameRate } from '$lib/stores';
	import { onMount } from 'svelte';

	function playPausePreview() {
		if ($previewState.src === '') return;
		$previewState.paused = !$previewState.paused;
	}

	function frameNext() {
		if ($previewState.src === '') return;
		$previewState.paused = true;
		$previewState.currentTime += 1 / $frameRate;
	}

	function framePrev() {
		if ($previewState.src === '') return;
		$previewState.paused = true;
		$previewState.currentTime -= 1 / $frameRate;
	}

	function clipStart() {
		if ($previewState.src === '') return;
		$previewState.paused = true;
		$previewState.currentTime = 0;
	}

	function clipEnd() {
		if ($previewState.src === '') return;
		$previewState.paused = true;
		$previewState.currentTime = $previewState.duration;
	}

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Space') playPausePreview();
			if (e.code === 'ArrowRight') frameNext();
			if (e.code === 'ArrowLeft') framePrev();
			if (e.ctrlKey && e.code === 'ArrowRight') clipEnd();
			if (e.ctrlKey && e.code === 'ArrowLeft') clipStart();
		});
	});
</script>

<main class="row fcenter fill">
	<ul class="controls row fcenter">
		<li class="row fcenter" on:click={clipStart}>
			<img src="/icons/clip-start.svg" alt="Clip start" title="Clip start (Ctrl + Left arrow)" />
		</li>
		<li class="row fcenter" on:click={framePrev}>
			<img src="/icons/frame-prev.svg" alt="Previous frame" title="Previous frame (Left arrow)" />
		</li>
		<li class="row fcenter" on:click={playPausePreview}>
			<img
				src="/icons/{$previewState.paused ? 'play' : 'pause'}.svg"
				alt="Play/Pause"
				title="Play/Pause (Space)"
			/>
		</li>
		<li class="row fcenter" on:click={frameNext}>
			<img src="/icons/frame-next.svg" alt="Next frame" title="Next frame (Right arrow)" />
		</li>
		<li class="row fcenter" on:click={clipEnd}>
			<img src="/icons/clip-end.svg" alt="Clip end" title="Clip end (Ctrl + Right arrow)" />
		</li>
	</ul>
</main>

<style lang="scss">
	main {
		height: 50px;
		border-top: 1px solid var(--color-border);
		padding: 0 10px;
	}

	.controls {
		gap: 10px;

		img {
			cursor: pointer;
			width: 25px;
			opacity: 0.6;
			transition: 200ms;

			&:hover {
				transform: scale(0.95);
			}
		}
	}
</style>
