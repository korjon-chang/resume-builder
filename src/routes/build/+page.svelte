<script lang="ts">
	import PInfo from '$lib/tabs/personalInfoTab.svelte';
	import Education from '$lib/tabs/educationTab.svelte';
	import Experience from '$lib/tabs/experienceTab.svelte';
	import Skills from '$lib/tabs/skillsTab.svelte';
	import Preview from '$lib/preview.svelte';

	import clsx from 'clsx';

	// Tabs array and corresponding components
	const tabs = [
		{ name: 'Personal Info', component: PInfo },
		{ name: 'Education', component: Education },
		{ name: 'Experience', component: Experience },
		{ name: 'Skills', component: Skills }
	];

	let Tab = $state(tabs[0].component);
	// Track the current tab index
	let currentTabIndex = $state(0);

	function nextTab() {
		// Move to the next tab, but prevent overflow
		if (currentTabIndex < tabs.length - 1) {
			currentTabIndex++;
			//saveAndNext(formState);
			Tab = tabs[currentTabIndex].component;
		}
	}

	function prevTab() {
		// Move to the previous tab, but prevent underflow
		if (currentTabIndex > 0) {
			currentTabIndex--;
			Tab = tabs[currentTabIndex].component;
		}
	}

	function goToTab(index: number) {
		// Set the current tab index directly
		currentTabIndex = index;
		Tab = tabs[currentTabIndex].component;
	}
</script>

<div class="flex h-full overflow-hidden bg-cream">
	<!-- Sidebar -->

	<aside class="w-1/2 overflow-y-auto bg-cream">
		<ul class="flex w-full flex-wrap space-x-1 bg-black">
			{#each tabs as tab, i}
				<li
					class={clsx('flex-1 bg-olive py-3 text-center text-cream hover:bg-forest', {
						'bg-forest font-bold': i === currentTabIndex
					})}
				>
					<button onclick={() => goToTab(i)}>{tab.name}</button>
				</li>
			{/each}
		</ul>

		<div class="p-6">
			<!-- Tab content goes here -->
			<Tab />

			<div class="mr-6 mt-6 flex justify-end space-x-2">
				<button
					class="rounded-full bg-peach p-3 text-white hover:bg-rust"
					type="button"
					onclick={prevTab}>Back</button
				>
				<button
					class="rounded-full bg-olive p-3 text-white hover:bg-forest"
					type="button"
					onclick={nextTab}>Next</button
				>
			</div>
		</div>
	</aside>

	<!-- Preview Pane -->
	<aside class="w-1/2 overflow-auto bg-gray-100">
		<Preview />
	</aside>
</div>
