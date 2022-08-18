<script>
	import Source from '$lib/components/source/Source.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
	import Properties from '$lib/components/Properties.svelte';
	import Tools from '$lib/components/Tools.svelte';
	import Timeline from '$lib/components/Timeline.svelte';
</script>

<main class="viewport row">
	<Source />
	<aside class="row">
		<article class="col">
			<Preview />
			<Tools />
		</article>
		<Properties />
		<Timeline />
	</aside>
</main>

<style lang="scss">
	@import 'https://cdn.jsdelivr.net/gh/verdulife/utility-classes/dist/reset.css';
	@import 'https://cdn.jsdelivr.net/gh/verdulife/utility-classes/dist/utility-classes.css';

	:root {
		--color-pri: #a4a4a4;
		--color-sec: #1b1b1b;
		--color-border: #333;
	}

	.viewport {
		background: var(--color-sec);
		color: var(--color-pri);
	}

	aside {
		width: 85%;
		height: 100%;
	}

	article {
		width: 82.35%;
		height: 75%;
	}
</style>
