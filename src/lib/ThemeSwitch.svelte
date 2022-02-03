<script lang="ts">
	import { mdiGithub, mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
	import Icon from 'mdi-svelte';
	import { onMount } from 'svelte';

	let isDarkTheme = false;
	let color = 'black';

	onMount(() => {
		const dark = localStorage.getItem('dark');

		if (!dark || dark === 'true') {
			isDarkTheme = true;
			color = 'white';
			document.documentElement.classList.toggle('dark');
		}
	});

	function setTheme(): void {
		isDarkTheme = !isDarkTheme;
		document.documentElement.classList.toggle('dark');

		if (!isDarkTheme) {
			color = 'black';
			localStorage.setItem('dark', 'false');
		} else {
			localStorage.setItem('dark', 'true');
			color = 'white';
		}
	}
</script>

<a
	class="mx-5"
	href="https://github.com/flameapp-io/svelte-capacitor-tailwind-starter"
	target="_blank"
	rel="noopener"
>
	<Icon path={mdiGithub} {color} />
</a>

<button class="mx-5" on:click={setTheme}>
	{#if !isDarkTheme}
		<Icon path={mdiWeatherNight} {color} />
	{/if}

	{#if isDarkTheme}
		<Icon path={mdiWeatherSunny} {color} />
	{/if}
</button>
