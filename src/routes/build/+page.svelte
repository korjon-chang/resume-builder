<script>
	const tabs = ['Personal Info', 'Education', 'Experience', 'Skills'];
</script>

<div class="flex h-screen bg-cream">
	<!-- Sidebar -->

	<aside class="w-1/2 bg-cream">
		<ul class="flex w-full space-x-1 bg-black">
			{#each tabs as tab}
				<div class="h-full">
					<li class="w-full bg-olive py-3 text-center text-cream">{tab}</li>
				</div>
			{/each}
		</ul>
		<div class="p-6">
			<form class="space-y-6">
				<div class="flex w-full space-x-4">
					<div>
						<label for="fname" class=" block font-semibold">First Name</label>
						<input
							class="w-full rounded"
							type="text"
							id="fname"
							placeholder="Enter your first name"
						/>
					</div>
					<div>
						<label for="lname" class="block font-semibold">Last Name</label>
						<input
							class="w-full rounded"
							type="text"
							id="lname"
							placeholder="Enter your first name"
						/>
					</div>
				</div>
				<div>
					<label for="summary" class="block font-semibold">Summary (optional)</label>
					<textarea
						class="w-full rounded"
						rows="4"
						id="summary"
						placeholder="A brief summary about yourself"
					></textarea>
				</div>
				<div>
					<label for="" class="block font-semibold"></label>
					<input
						class="w-full rounded"
						type="text"
						id="fname"
						placeholder="Enter your first name"
					/>
				</div>
			</form>
		</div>
	</aside>

	<!-- Preview Pane (Optional) -->
	<aside class="flex-1 border-l bg-white p-4">
		<h2 class="mb-4 text-lg font-bold">Live Preview</h2>
		<div class="rounded border p-4">
			<!-- Live preview content goes here -->
			<p class="text-lg font-semibold">John Doe</p>
			<p>john.doe@example.com</p>
			<p class="mt-2">A motivated individual with experience in...</p>
		</div>
	</aside>
</div>
