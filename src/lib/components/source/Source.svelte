<script>
	import { previewSrc } from '$lib/stores';
	import { timeFormat } from '$lib/scripts/timeFormat';

	let sourceFiles;
	let allContent = [];
	let videoPreviews = [];
	let videoDuration = [];

	const options = {
		multiple: true,
		types: [
			{
				description: 'Videos',
				accept: {
					'video/mp4': '.mp4'
				}
			}
		],
		excludeAcceptAllOption: true
	};

	async function openFilePicker() {
		sourceFiles = await window.showOpenFilePicker(options);

		allContent = [
			...allContent,
			...(
				await Promise.all(
					sourceFiles.map(async (fileHandle) => {
						const file = await fileHandle.getFile();
						const src = URL.createObjectURL(file);

						const newContent = {
							src,
							label: file.name,
							size: file.size
						};

						if (!allContent.some((content) => content.label === newContent.label))
							return newContent;
					})
				)
			).filter((item) => item)
		];
	}

	function playOnEnter(video) {
		video.play();
	}
	function pauseOnLeave(video) {
		video.pause();
		video.currentTime = 0;
	}

	function selectPreview(src) {
		$previewSrc = src;
		console.log($previewSrc);
	}
</script>

<main class="col fcenter fill">
	{#if allContent.length > 0}
		<div class="scroll">
			<ul class="row xfill">
				{#each allContent as { src, label, size }, i}
					<li class="col grow3">
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
						<p class="tright xfill">{timeFormat(videoDuration[i])}</p>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
	<button on:click={openFilePicker}>ADD CONTENT</button>
</main>

<style lang="scss">
	main {
		width: 25%;
		height: 60%;
		box-shadow: inset 0 0 0 1px #000;
	}

	ul {
		gap: 10px;
		padding: 20px;
	}

	li {
		position: relative;
		aspect-ratio: 4/3;

		p {
			position: absolute;
			bottom: 0;
			left: 0;
			color: #fff;
			font-size: 12px;
			font-weight: bold;
			text-shadow: 0 0 2px rgba(#000, 0.9);
			padding: 4px 6px;
		}
	}

	button {
		color: var(--color-pri);
		font-weight: bold;
		font-size: 12px;
		box-shadow: inset 0 0 0 1px var(--color-pri);
	}
</style>
