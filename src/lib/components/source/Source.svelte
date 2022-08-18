<script>
	import Import from './Import.svelte';
	import { sourceContent, previewSrc } from '$lib/stores';
	import { timeFormat } from '$lib/scripts/timeFormat';

	let videoPreviews = [];
	let videoDuration = [];

	function playOnEnter(video) {
		video.play();
	}
	function pauseOnLeave(video) {
		video.pause();
		video.currentTime = 0;
	}

	function selectPreview(src) {
		$previewSrc = src;
	}
</script>

<main class="col fcenter fill">
	<Import />

	<div class="scroll">
		{#if $sourceContent.length > 0}
			<ul class="row xfill">
				{#each $sourceContent as { src, label, size }, i}
					<li class="col">
						<video
							class="cover fill"
							{src}
							title="{label} - {(size / 1024 / 1024).toFixed(2) + 'Mb'}"
							muted
							loop
							bind:this={videoPreviews[i]}
							bind:duration={videoDuration[i]}
							on:mouseenter={() => playOnEnter(videoPreviews[i])}
							on:mouseleave={() => pauseOnLeave(videoPreviews[i])}
							on:click={() => selectPreview(src)}
						/>
						<p>{timeFormat(videoDuration[i])}</p>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</main>

<style lang="scss">
	main {
		width: 15%;
		height: 100%;
		border-right: 1px solid var(--color-border);
	}

	ul {
		gap: 10px;
		padding: 10px;
	}

	li {
		cursor: pointer;
		position: relative;
		width: calc(50% - 5px);

		video {
			aspect-ratio: 4/3;
		}

		p {
			position: absolute;
			bottom: 0;
			right: 0;
			color: #fff;
			font-size: 10px;
			font-weight: bold;
			text-shadow: 0 0 2px rgba(#000, 0.9);
			padding: 4px 6px;
		}
	}
</style>
