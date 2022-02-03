<script>
	import { Route } from 'svelte-routing';
	import Example from './Example.svelte';
	import Home from './Home.svelte';
</script>

<Route path="/" component={Home} />
<Route path="example" component={Example} />
