<script>
	import Source from '$lib/components/source/Source.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
	import Properties from '$lib/components/Properties.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
	import Audio from '$lib/components/Audio.svelte';
</script>

<main class="viewport row">
	<Source />
	<Preview />
	<Properties />
	<Tools />
	<Timeline />
	<Audio />
</main>

<style lang="scss">
	@import 'https://cdn.jsdelivr.net/gh/verdulife/utility-classes/dist/reset.css';
	@import 'https://cdn.jsdelivr.net/gh/verdulife/utility-classes/dist/utility-classes.css';

	:root {
		--color-pri: #666;
		--color-sec: #1b1b1b;
	}

	.viewport {
		background: var(--color-sec);
		color: var(--color-pri);
	}
</style>
