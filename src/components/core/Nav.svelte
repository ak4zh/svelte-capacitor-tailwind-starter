<script lang="ts">
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	import { Link } from 'svelte-routing';

	type NavLink = {
		name: string;
		url: string;
	};

	const navLinks: Array<NavLink> = [
		{
			name: 'Home',
			url: '/'
		},
		{
			name: 'Example',
			url: 'example'
		}
	];
</script>

<nav class="flex items-center">
	{#each navLinks as link}
		<Link to={link.url} class="mx-5">{link.name}</Link>
	{/each}

	<ThemeSwitch />
</nav>
