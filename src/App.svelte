<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Photo from './Photo.svelte';
	import Projects from './Projects.svelte'

	export let url = "";

</script>

<main>
	<div class='header'>
		<h1>Jason Kim</h1>
		<p>Software engineer working for Coupang in Seattle, WA</p>
	</div>


	<Router url="{url}">
		<Route path="/"><Photo /></Route>
		<Route path="/projects"><Projects /></Route>


		<div class='footer'>
			<div class="footer-link">
				<Link to="/">Home</Link>
			</div>
			<div class="footer-link">
				<Link to="projects" >Projects</Link>
			</div>
			<a href="http://blog.jasonkim.ca/" class="footer-link">Blog</a>
			<a href="https://github.com/serv/" class="footer-link">Github</a>
			<a href="https://ruby.social/web/accounts/128814" class="footer-link">Mastadon</a>
			<a href="https://docs.google.com/document/d/1J7Cs9EtZ2SE18aZmGHgIfL2Iqx7Hi7mwroXgGvmbiqw/edit" class="footer-link">
				Resume
			</a>
			<a href="mailto:me@jasonkim.ca">Email</a>
		</div>
	</Router>


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

	.footer {
		display: flex;
		max-width: 420px;
		justify-content: space-between;
		margin-top: 2em;
	}

	h1 {
		color: #333333;
		font-size: 3em;
		margin-bottom: 0em;
	}

	.footer-link {
		margin-right: 1em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>