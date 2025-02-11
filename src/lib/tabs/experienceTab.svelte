<script lang="ts">
	import { formState } from '$lib/state.svelte';

	function addExperience() {
		formState.experience.push({
			company: '',
			position: '',
			startDate: '',
			endDate: '',
			country: '',
			city: '',
			description: ['']
		});
	}
	function addDescription(experienceIndex: number) {
		formState.experience[experienceIndex].description.push('');
	}
	function removeExperience(index: number) {
		formState.experience.splice(index, 1);
	}
	function removeDescription(experienceIndex: number, descriptionIndex: number) {
		formState.experience[experienceIndex].description.splice(descriptionIndex, 1);
	}
</script>

<form>
	{#if formState.experience.length === 0}
		{addExperience()}
	{/if}
	{#each formState.experience as experience, index}
		<div class="mb-4 overflow-x-auto rounded border border-black p-4">
			<div>
				<label for="company-{index}" class="block font-semibold">Company</label>
				<input
					class="w-full rounded"
					type="text"
					id="company-{index}"
					bind:value={experience.company}
					placeholder="Enter the company name"
				/>
			</div>
			<div>
				<label for="position-{index}" class="block font-semibold">Position</label>
				<input
					class="w-full rounded"
					type="text"
					id="position-{index}"
					bind:value={experience.position}
					placeholder="Enter your position"
				/>
			</div>
			<div class="flex space-x-4">
				<div>
					<label for="start-date-{index}" class="block font-semibold">Start Date</label>
					<input
						class="w-full rounded"
						type="date"
						id="start-date-{index}"
						bind:value={experience.startDate}
					/>
				</div>
				<div>
					<label for="end-date-{index}" class="block font-semibold">End Date</label>
					<input
						class="w-full rounded"
						type="date"
						id="end-date-{index}"
						bind:value={experience.endDate}
					/>
				</div>
			</div>

			<div>
				<h3 class="font-semibold">Description</h3>
				<div class="space-y-2">
					{#each experience.description as _, descriptionIndex}
						<div class="flex space-x-4">
							<input
								class="w-full rounded"
								type="text"
								bind:value={experience.description[descriptionIndex]}
								placeholder="Enter a description"
							/>
							{#if descriptionIndex != 0}
								<button
									type="button"
									onclick={() => removeDescription(index, descriptionIndex)}
									class="text-red-500">Remove</button
								>
							{/if}
						</div>
					{/each}
				</div>
				<button
					type="button"
					class="mt-3 rounded-xl bg-olive p-2 text-white"
					onclick={() => {
						addDescription(index);
					}}>Add Description</button
				>
				<!-- Add more fields as needed -->
				{#if index != 0}
					<button
						type="button"
						onclick={() => removeExperience(index)}
						class=" mt-3 rounded-xl bg-red-600 p-3 text-white hover:bg-red-700"
						>Remove Experience</button
					>
				{/if}
			</div>
		</div>
	{/each}
	<button type="button" onclick={addExperience} class="mt-4 rounded bg-olive p-2 text-white"
		>Add Experience</button
	>
</form>
