<script>
	import PInfo from '$lib/tabs/personalInfoTab.svelte';
	import Education from '$lib/tabs/educationTab.svelte';
	import Experience from '$lib/tabs/experienceTab.svelte';
	import Skills from '$lib/tabs/skillsTab.svelte';

	const tabs = ['Personal Info', 'Education', 'Experience', 'Skills'];
</script>

<div class="flex h-screen overflow-hidden bg-cream">
	<!-- Sidebar -->

	<aside class="w-1/2 overflow-y-auto bg-cream">
		<ul class="flex w-full flex-wrap space-x-1 bg-black">
			{#each tabs as tab}
				<li class="flex-1 bg-olive py-3 text-center text-cream">{tab}</li>
			{/each}
		</ul>
		<PInfo />
	</aside>

	<!-- Preview Pane (Optional) -->
	<aside class="w-1/2 border-l bg-gray-100 p-4">
		<h2 class="mb-4 text-lg font-bold">Live Preview</h2>
		<div class="rounded border p-4">
			<!-- Live preview content goes here -->
			<p class="text-lg font-semibold">John Doe</p>
			<p>john.doe@example.com</p>
			<p class="mt-2">A motivated individual with experience in...</p>
		</div>
	</aside>
</div>
