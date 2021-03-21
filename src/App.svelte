<script lang="ts">

	import Photo from './Photo.svelte';

	export let name: string;

</script>

<main>
	<h1>Jason Kim</h1>

	<Photo />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1em;
		max-width: 640px;
	}

	h1 {
		color: #191919;
		font-size: 3em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>