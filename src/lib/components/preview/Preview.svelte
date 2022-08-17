<script>
	import { previewSrc } from '$lib/stores';
	import Controls from './Controls.svelte';
</script>

<main class="col fcenter fill">
	<div class="video-wrapper fill">
		<video class="fill contain" src={$previewSrc.src} autoplay>
			<track kind="captions" />
		</video>
	</div>

	<Controls />
</main>

<style lang="scss">
	main {
		width: 50%;
		height: 60%;
		box-shadow: inset 0 0 0 1px #000;
	}

	.video-wrapper {
		padding: 20px;
	}

	video {
		background: #000;
	}
</style>
