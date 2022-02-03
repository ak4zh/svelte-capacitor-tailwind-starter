<script lang="ts">
	export let text: string;
</script>

<button
	on:click
	class="bg-gray-900 text-gray-200 rounded-3xl py-3 my-2 outline-none border-none focus:outline-none hover:transition-all duration-200 ease-in-out hover:scale-105"
>
	{text}
</button>
