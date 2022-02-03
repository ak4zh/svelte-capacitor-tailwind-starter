<script>
	import SafeArea from '$components/core/SafeArea.svelte';
	import { Capacitor } from '@capacitor/core';
	import { onMount } from 'svelte';
	import { Router } from 'svelte-routing';

	export let url = '';

	let isMobile = false;

	onMount(() => {
		if (Capacitor.getPlatform() !== 'web') isMobile = true;
	});
</script>

<Router {url}>
	<SafeArea>
		<header class="absolute {isMobile ? 'top-0' : 'top-5'} left-0 right-0 flex centered-flex">
			<slot name="header" />
		</header>

		<main class="min-w-full min-h-full px-4 centered-flex">
			<slot name="main" />
		</main>

		<footer class="absolute {isMobile ? 'bottom-2' : 'bottom-5'} left-0 right-0 flex centered-flex">
			<slot name="footer" />
		</footer>
	</SafeArea>
</Router>
