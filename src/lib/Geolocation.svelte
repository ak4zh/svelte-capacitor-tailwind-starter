<script lang="ts">
	import Button from '$components/inputs/Button.svelte';
	import { Geolocation } from '@capacitor/geolocation';

	let loc = null;
	let loading = false;
	let error = false;

	async function getCurrentPosition(): Promise<void> {
		try {
			loading = true;
			const res = await Geolocation.getCurrentPosition();
			loc = res;
		} catch (error) {
			error = true;
			console.log(error);
		} finally {
			loading = false;
		}
	}

	function resetLocation(): void {
		loc = null;
	}
</script>

<div class="my-10">
	{#if loc}
		<h3 class="mb-2 sm:text-2xl">Your location is :</h3>
		<p>Latitude: {loc?.coords.latitude}</p>
		<p>Longitude: {loc?.coords.longitude}</p>
	{/if}

	{#if loading}
		<i class="animate-pulse">Loading ...</i>
	{/if}

	{#if error}
		<i class="text-red-500">Location error, please retry later</i>
	{/if}
</div>

<div class="flex flex-col justify-center">
	{#if error || loc}
		<Button text="Reset" on:click={resetLocation} />
	{:else}
		<Button text="Get Current Location" on:click={getCurrentPosition} />
	{/if}
</div>
