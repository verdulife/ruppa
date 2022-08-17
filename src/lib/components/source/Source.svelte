<script>
	import { previewSrc } from '$lib/stores';
	import { getVideoCover } from './getThumbnail';

	let sourceFiles, allContent;

	const options = {
		multiple: true,
		types: [
			{
				description: 'Images & Videos',
				accept: {
					'image/jpg': '.jpg',
					'video/mp4': '.mp4'
				}
			}
		],
		excludeAcceptAllOption: true
	};

	async function openFilePicker() {
		sourceFiles = await window.showOpenFilePicker(options);

		allContent = await Promise.all(
			sourceFiles.map(async (fileHandle) => {
				const file = await fileHandle.getFile();
				const src = URL.createObjectURL(file);
				const thumbnail = await getVideoCover(file, 0);

				return {
					src,
					label: file.name,
					size: file.size,
					thumbnail
				};
			})
		);

		$previewSrc = allContent[0];
	}
</script>

<main class="col fcenter fill">
	{#if allContent}
		<ul>
			{#each allContent as content}
				<li class="col">
					<img src={content.thumbnail} alt={content.label} />
					<p>{content.label}</p>
				</li>
			{/each}
		</ul>
	{/if}
	<button on:click={openFilePicker}>ADD CONTENT</button>
</main>

<style lang="scss">
	main {
		width: 25%;
		height: 60%;
		box-shadow: inset 0 0 0 1px #000;
	}

	button {
		color: var(--color-pri);
		font-weight: bold;
		font-size: 12px;
		box-shadow: inset 0 0 0 1px var(--color-pri);
	}
</style>
