<script>
	import { formState } from '$lib/state.svelte';
</script>

<form class="space-y-6">
	<div class="flex w-full space-x-4">
		<!-- First Name -->
		<div>
			<label for="fname" class="block font-semibold">First Name</label>
			<input
				class="w-full rounded"
				type="text"
				id="fname"
				bind:value={formState.personalInfo.firstName}
				placeholder="Enter your first name"
			/>
		</div>

		<!-- Last Name -->
		<div>
			<label for="lname" class="block font-semibold">Last Name</label>
			<input
				class="w-full rounded"
				type="text"
				id="lname"
				bind:value={formState.personalInfo.lastName}
				placeholder="Enter your last name"
			/>
		</div>
	</div>

	<!-- Summary -->
	<div>
		<label for="summary" class="block font-semibold">Summary (optional)</label>
		<textarea
			class="w-full rounded"
			rows="4"
			id="summary"
			bind:value={formState.personalInfo.summary}
			placeholder="A brief summary about yourself"
		></textarea>
	</div>

	<!-- Email Address -->
	<div>
		<label for="email" class="block font-semibold">Email Address</label>
		<input
			class="w-full rounded"
			type="email"
			id="email"
			bind:value={formState.personalInfo.email}
			placeholder="Enter your email address"
		/>
	</div>

	<!-- Phone Number -->
	<div>
		<label for="phone_number" class="block font-semibold">Phone Number</label>
		<input
			class="w-full rounded"
			type="tel"
			id="phone_number"
			bind:value={formState.personalInfo.phoneNumber}
			placeholder="Ex: 123-456-7890"
		/>
	</div>

	<!-- LinkedIn -->
	<div>
		<label for="linkedin" class="block font-semibold">LinkedIn (optional)</label>
		<input
			class="w-full rounded"
			type="text"
			id="linkedin"
			bind:value={formState.personalInfo.linkedin}
			placeholder="LinkedIn Url"
		/>
	</div>

	<!-- Portfolio -->
	<div>
		<label for="portfolio" class="block font-semibold">Portfolio (optional)</label>
		<input
			class="w-full rounded"
			type="text"
			id="portfolio"
			bind:value={formState.personalInfo.portfolio}
			placeholder="Enter Url"
		/>
	</div>
</form>
