<script>
	import { isPlaying, previewState } from '$lib/stores';
	import { onMount } from 'svelte';

	function playPausePreview() {
		if ($previewState.src === '') return;
		$isPlaying = !$isPlaying;
	}

	function frameNext() {
		if ($previewState.src === '') return;
	}

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Space' && $previewState.src !== '') $isPlaying = !$isPlaying;
		});
	});
</script>

<main class="row fcenter fill">
	<ul class="controls row fcenter">
		<li class="row fcenter">
			<img src="/icons/clip-start.svg" alt="Clip start" title="Clip start" />
		</li>
		<li class="row fcenter">
			<img src="/icons/frame-prev.svg" alt="Previous frame" title="Previous frame" />
		</li>
		<li class="row fcenter" on:click={playPausePreview}>
			<img src="/icons/{$isPlaying ? 'pause' : 'play'}.svg" alt="Play/Pause" title="Play/Pause" />
		</li>
		<li class="row fcenter">
			<img src="/icons/frame-next.svg" alt="Next frame" title="Next frame" />
		</li>
		<li class="row fcenter">
			<img src="/icons/clip-end.svg" alt="Clip end" title="Clip end" />
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
