<script lang="ts">
	import '../app.css';
	import Nav from '$lib/nav.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen flex-col overflow-hidden">
	<Nav />
	{@render children()}
</div>
