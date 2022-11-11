<script>
	import { onMount } from "svelte";
	import UserSummary from "$lib/UserSummary.svelte";

	export let data = [];
</script>

<svelte:head>
	<title>Hacker News - Svelte - New</title>
</svelte:head>

<div class="container is-max-desktop">
	<h2 class="is-size-2">Users</h2>

	<div class="columns is-tablet is-flex-wrap-wrap">
		{#if data.users}
			{#each data.users as user}
				<div class="user-item-container">
					<UserSummary {user} />
				</div>
			{/each}
		{/if}
	</div>
</div>

<style>
	.user-item-container {
		padding: 0.5rem;
		width: 20rem;
		max-width: 20rem;
	}

	/*@media screen and (min-width: 660px) {
		.users-container {
			display: flex;
			flex-wrap: wrap;
		}
	}*/
</style>
