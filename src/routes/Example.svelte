<script>
import Geolocation from "$lib/Geolocation.svelte";
import { fly } from 'svelte/transition';
</script>

<article class="text-center" in:fly="{{ y: 200, duration: 350 }}">
	<section>
		<h1 class="text-4xl sm:text-5xl md:text-6xl">Geolocation</h1>
	</section>

	<div class="my-3" />

	<section>
		<Geolocation />
	</section>
</article>
