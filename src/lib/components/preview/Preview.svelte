<script>
	import { previewState, isPlaying } from '$lib/stores';

	let videoEl;

	$: if ($previewState.src) $isPlaying = !isPlaying;
	$: if (videoEl) $isPlaying ? videoEl.play() : videoEl.pause();

	$: if ($previewState.duration) console.log($previewState.duration);
</script>

<main class="col fcenter fill">
	<div class="video-wrapper row fcenter fill">
		<video
			bind:this={videoEl}
			bind:duration={$previewState.duration}
			bind:currentTime={$previewState.currentTime}
			bind:paused={$previewState.paused}
			class="contain"
			src={$previewState.src}
		>
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
