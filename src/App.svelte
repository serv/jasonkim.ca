<script lang="ts">

	import Photo from './Photo.svelte';

	export let name: string;

</script>

<main>
	<div class='header'>
		<h1>Jason Kim</h1>
		<p>Software engineer working for Coupang in Seattle, WA</p>
	</div>

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

	.header {
		text-align: center;
		margin-bottom: 1em;
	}

	h1 {
		color: #333333;
		font-size: 3em;
		margin-bottom: 0em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>