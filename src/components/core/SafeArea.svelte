<div class="safe-area relative flex flex-1">
	<slot />
</div>

<style>
	.safe-area {
		min-height: calc(100vh - (env(safe-area-inset-top) + env(safe-area-inset-bottom)));
		margin: env(safe-area-inset-top) max(12px, env(safe-area-inset-right))
			env(safe-area-inset-bottom) max(12px, env(safe-area-inset-left));
	}
</style>
