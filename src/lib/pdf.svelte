<script lang="ts">
	import { formState } from '$lib/state.svelte';
</script>

<div class="flex h-full w-full overflow-auto">
	<div class="m-auto h-[1123px] w-[793px] bg-white p-2">
		<h1 class="text-3xl font-bold">{formState.personalInfo.firstName}</h1>
		<p class="text-lg">Web Developer | john.doe@example.com</p>

		<h2 class="mt-6 text-xl font-semibold">Experience</h2>
		<p class="text-md">Software Engineer at XYZ Corp</p>

		<h2 class="mt-6 text-xl font-semibold">Skills</h2>
		<ul class="list-disc pl-5">
			<li>JavaScript</li>
			<li>CSS</li>
			<li>React</li>
		</ul>
	</div>
</div>
