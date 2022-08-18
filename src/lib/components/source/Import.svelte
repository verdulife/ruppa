<script>
	import { sourceContent } from '$lib/stores';

	let sourceFiles;
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
		try {
			sourceFiles = await window.showOpenFilePicker(options);
		} catch {
			return;
		}

		$sourceContent = [
			...$sourceContent,
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

						if (!$sourceContent.some((content) => content.label === newContent.label))
							return newContent;
					})
				)
			).filter((item) => item)
		];
	}
</script>

<main class="row acenter xfill">
	<button on:click={openFilePicker}>Import</button>
</main>

<style lang="scss">
	main {
		height: 50px;
		border-bottom: 1px solid var(--color-border);
		padding: 10px;
	}

	button {
		background: var(--color-pri);
		color: var(--color-sec);
		font-weight: bold;
		font-size: 12px;
		border-radius: 20px;
		padding: 2px 10px;
	}
</style>
