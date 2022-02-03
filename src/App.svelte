<script>
	import '$assets/styles/global.css';
	import '$assets/styles/tailwind.css';
	import Copyright from '$components/core/Copyright.svelte';
	import Nav from '$components/core/Nav.svelte';
	import DefaultLayout from '$layouts/DefaultLayout.svelte';
	import Routes from '$routes/Routes.svelte';
</script>

<DefaultLayout>
	<svelte:fragment slot="header">
		<Nav />
	</svelte:fragment>

	<svelte:fragment slot="main">
		<Routes />
	</svelte:fragment>

	<svelte:fragment slot="footer">
		<Copyright />
	</svelte:fragment>
</DefaultLayout>
