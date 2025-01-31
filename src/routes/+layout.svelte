<script lang="ts">
	import '../app.css';
	import Nav from '$lib/+nav.svelte';

	let { children } = $props();
</script>

<Nav />
<div class="bg-cream">
	{@render children()}
</div>
