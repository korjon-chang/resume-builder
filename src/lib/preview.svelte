<script lang="ts">
	import { formState } from '$lib/state.svelte';

	const PAGE_WIDTH = 794; // Width of the page in pixels
	const PAGE_HEIGHT = 1123; // Height of the page in pixels
	let scale = $state(1); // Scale factor for the page

	let wrapper: HTMLDivElement | null = null; // Reference to the wrapper element

	function updateScale() {
		if (wrapper) {
			scale = Math.min(wrapper.offsetWidth / 793, 1);
		}
	}

	$effect(() => {
		// Update the scale when the window is resized
		window.addEventListener('resize', updateScale);
		return () => {
			window.removeEventListener('resize', updateScale);
		};
	});
</script>

<div bind:this={wrapper} class="flex h-full w-full justify-center overflow-auto px-8 pt-5">
	<div style="transform: scale({scale}); transform-origin: top center;" class="w-fit">
		<div
			id="content"
			style="
	width: {PAGE_WIDTH}px;
	height: {PAGE_HEIGHT}px;
	"
			class=" bg-white"
		>
			<h1 class="text-3xl font-bold">{formState.personalInfo.firstName}</h1>
			<p class="text-lg">Web Developer | john.doe@example.com</p>

			<h2 class="mt-6 text-xl font-semibold">Experience</h2>
			<p class="text-md">Software Engineer at XYZ Corp</p>

			<h2 class="mt-6 text-xl font-semibold">Skills</h2>
			<ul class="list-disc pl-5">
				<li>JavaScript</li>
				<li>CSS</li>
				<li>React</li>
			</ul>
		</div>
	</div>
</div>
