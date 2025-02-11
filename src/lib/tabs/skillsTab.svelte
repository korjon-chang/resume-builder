<script>
	import { formState } from '$lib/state.svelte';

	function addSkill() {
		formState.skills.push({
			skillCategory: '',
			skillList: []
		});
	}
</script>
