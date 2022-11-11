export async function load({ params }) {
	const id = params.id;
	const url = `https://reqres.in/api/users/${id}`;
	const response = await fetch(url);

	if (response.ok) {
		const json = await response.json();
		const user = json.data;
		return {
			user
		};
	} else {
		throw error(500, "something went wrong");
	}
}
