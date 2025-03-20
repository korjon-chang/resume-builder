<script lang="ts">
	import { formState } from '$lib/state.svelte';

	function addSkill() {
		formState.skills.push({
			skillCategory: '',
			skillList: ['']
		});
	}

	function deleteSkill(index: number) {
		formState.skills.splice(index, 1);
	}

	function addSkillItem(skillIndex: number) {
		formState.skills[skillIndex].skillList.push('');
	}

	function deleteSkillItem(skillIndex: number, itemIndex: number) {
		formState.skills[skillIndex].skillList.splice(itemIndex, 1);
	}
</script>

<form>
	{#if formState.skills.length === 0}
		{addSkill()}
	{/if}
	{#each formState.skills as skill, index}
		<div class="mb-4 overflow-x-auto rounded border border-black p-4">
			<div>
				<label for="skill-category-{index}" class="block font-semibold">Skill Category</label>
				<input
					class="w-1/2 rounded"
					type="text"
					id="skill-category-{index}"
					bind:value={skill.skillCategory}
					placeholder="Enter the skill category"
				/>
			</div>
			<h3 class="font-semibold">Skills</h3>
			<div class="space-y-2">
				{#each skill.skillList as _, itemIndex}
					<div class="flex space-x-4">
						<input
							class="w-1/2 rounded"
							type="text"
							id="skill-{index}-{itemIndex}"
							bind:value={skill.skillList[itemIndex]}
							placeholder="Enter Skill"
						/>
						{#if itemIndex != 0}
							<button
								type="button"
								onclick={() => deleteSkillItem(index, itemIndex)}
								class="rounded-xl bg-red-600 p-3 text-white hover:bg-red-700"
								>Delete Skill
							</button>
						{/if}
					</div>
				{/each}
			</div>
			<button
				type="button"
				onclick={() => addSkillItem(index)}
				class="mt-3 rounded-xl bg-olive p-3 text-white hover:bg-forest"
				>Add Skill
			</button>
			{#if index != 0}
				<button
					type="button"
					onclick={() => deleteSkill(index)}
					class="mt-3 rounded-xl bg-red-600 p-3 text-white hover:bg-red-700"
					>Delete Skill Category
				</button>
			{/if}
		</div>
	{/each}
	<button
		type="button"
		onclick={addSkill}
		class="rounded-full bg-olive p-3 text-white hover:bg-forest">Add Skill Category</button
	>
</form>
