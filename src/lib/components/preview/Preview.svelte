<script>
	import { previewState } from '$lib/stores';
</script>

<main class="col fcenter fill">
	<div class="video-wrapper row fcenter fill">
		<video
			class="contain"
			src={$previewState.src}
			bind:duration={$previewState.duration}
			bind:currentTime={$previewState.currentTime}
			bind:paused={$previewState.paused}
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
