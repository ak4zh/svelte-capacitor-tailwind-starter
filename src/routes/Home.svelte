<script>
	  import capacitorLogo from '$assets/images/capacitor-logo.png';
	  import flameAppLogo from '$assets/images/flame-app-logo-light.png';
	  import svelteLogo from '$assets/images/svelte.png';
	  import { fly } from 'svelte/transition';
</script>

<article in:fly="{{ y: 200, duration: 350 }}" class="-mt-10">
	<section class="centered-flex">
		<img src={flameAppLogo} alt="Capacitor logo" class="w-14 bg-black" />

		<div class="mx-3" />

		<img src={svelteLogo} alt="Svelte Logo" class="w-20 animate-bounce" />

		<div class="mx-3" />

		<img src={capacitorLogo} alt="Capacitor logo" class="w-14" />
	</section>

	<div class="my-3" />

	<section class="centered-flex flex-col text-center">
		<h1 class="text-4xl sm:text-5xl md:text-6xl">Svelte Capacitor Starter</h1>

		<div class="my-2" />

		<h2 class="text-lg sm:text-xl text-gray-600">Create lightning fast cross-platform apps !</h2>
	</section>
</article>
