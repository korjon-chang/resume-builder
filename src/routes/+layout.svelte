<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class=" bg-olive py-3">
	<nav class="flex justify-end text-white">
		<ul class="flex flex-row gap-2">
			<li>Home</li>
			<li class="mr-2">Login</li>
		</ul>
	</nav>
</div>
{@render children()}
