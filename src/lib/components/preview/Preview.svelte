<script>
	import { previewSrc, isPlaying } from '$lib/stores';

	let videoEl;

	$: if ($previewSrc) $isPlaying = !isPlaying;
	$: if (videoEl) $isPlaying ? videoEl.play() : videoEl.pause();
</script>

<main class="col fcenter fill">
	<div class="video-wrapper row fcenter fill">
		<video bind:this={videoEl} class="contain" src={$previewSrc}>
			<track kind="captions" />
		</video>
	</div>
</main>

<style lang="scss">
	main {
		height: calc(100% - 50px);
	}

	.video-wrapper {
		background: var(--color-pri);
		padding: 20px;

		video {
			width: 60%;
			aspect-ratio: 16/9;
		}
	}

	video {
		background: #000;
	}
</style>
