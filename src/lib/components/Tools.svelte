<script>
	import { isPlaying, previewSrc } from '$lib/stores';
	import { onMount } from 'svelte';

	function playPausePreview() {
		if ($previewSrc === '') return;
		$isPlaying = !$isPlaying;
	}

	function frameNext() {
		if ($previewSrc === '') return;
	}

	onMount(() => {
		window.addEventListener('keydown', (e) => {
			if (e.code === 'Space' && $previewSrc !== '') $isPlaying = !$isPlaying;
		});
	});
</script>

<main class="row jbetween acenter fill">
	<ul class="tools row fcenter">
		<li class="row fcenter">
			<h6>Tools</h6>
		</li>
	</ul>

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

	<ul class="tools row fcenter">
		<li class="row fcenter">
			<h6>Tools</h6>
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
