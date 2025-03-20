<script lang="ts">
	import { formState } from '$lib/state.svelte';

	function addEducation() {
		formState.education.push({
			school: '',
			degree: '',
			graduationDate: ''
		});
	}
	console.log(formState.education);

	function removeEducation(index: number) {
		formState.education.splice(index, 1);
	}
</script>

<form>
	{#if formState.education.length === 0}
		{addEducation()}
	{/if}
	{#each formState.education as _, index}
		<div class="mb-4 overflow-x-auto rounded border border-black p-4">
			<div>
				<label for="School-{index}" class="block font-semibold">School</label>
				<input
					type="text"
					id="School-{index}"
					bind:value={formState.education[index].school}
					placeholder="Enter the school name"
					class="w-full rounded"
				/>
			</div>
			<div>
				<label for="Degree-{index}" class="block font-semibold">Degree</label>
				<input
					type="text"
					id="Degree-{index}"
					bind:value={formState.education[index].degree}
					placeholder="Enter the degree"
					class="w-full rounded"
				/>
			</div>
			<div>
				<label for="GraduationDate-{index}" class="block font-semibold">Graduation Date</label>
				<input
					type="month"
					id="GraduationDate-{index}"
					bind:value={formState.education[index].graduationDate}
					class="w-full rounded"
				/>
			</div>
			{#if index != 0}
				<button
					type="button"
					onclick={() => removeEducation(index)}
					class=" mt-3 rounded-xl bg-red-600 p-3 text-white hover:bg-red-700"
					>Remove Education
				</button>
			{/if}
		</div>
	{/each}
	<button
		type="button"
		onclick={addEducation}
		class="rounded-full bg-olive p-3 text-white hover:bg-forest">Add Education</button
	>
</form>
