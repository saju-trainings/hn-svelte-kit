<script>
	export let data;
	
	$: user = data?.user;
</script>

<h1 class="is-size-1">User</h1>

{#if user}
	<div>id: {user.id}</div>
	<div>email: {user.email}</div>
	<div>first name: {user.first_name}</div>
	<div>last name: {user.last_name}</div>
	<img src={user.avatar} alt="avatar"/>
{/if}