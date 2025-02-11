<script>
	import { formState } from '$lib/state.svelte';

	function addEducation() {
		formState.education.push({
			school: '',
			degree: '',
			graduationDate: ''
		});
	}
	console.log(formState.education);
</script>

<form>
	{#if formState.education.length === 0}
		{addEducation()}
	{/if}
	{#each formState.education as _, index}
		<div class="mb-4 overflow-x-auto rounded border border-black p-4">
			<label for="School-{index}" class="block font-semibold">School</label>

			<input
				type="text"
				id="School-{index}"
				bind:value={formState.education[index].school}
				placeholder="Enter the school name"
				class="w-full rounded"
			/>
			<label for="Degree-{index}" class="block font-semibold">Degree</label>
			<input
				type="text"
				id="Degree-{index}"
				bind:value={formState.education[index].degree}
				placeholder="Enter the degree"
				class="w-full rounded"
			/>

			<label for="GraduationDate-{index}" class="block font-semibold">Graduation Date</label>
			<input
				type="month"
				id="GraduationDate-{index}"
				bind:value={formState.education[index].graduationDate}
				class="w-full rounded"
			/>
		</div>
	{/each}
	<button
		type="button"
		on:click={addEducation}
		class="rounded-full bg-olive p-3 text-white hover:bg-forest">Add Education</button
	>
</form>
