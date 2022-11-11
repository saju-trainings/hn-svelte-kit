<script>
	export let user;
</script>

<div class="card">
	<div class="card-content">
		<div class="content">
			<div>Email: {user.email}</div>
			<div>First Name: {user.first_name}</div>
		</div>
	</div>
	<footer class="card-footer">
		<a href="/users/{user.id}" class="card-footer-item">Details</a>
	</footer>
</div>
