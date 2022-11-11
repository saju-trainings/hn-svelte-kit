export async function load({ params }) {
	const url = "https://reqres.in/api/users";
	const response = await fetch(url);

	if (response.ok) {
		const json = await response.json();
		const users = json.data;
		return {
			users
		};
	} else {
		// alert("HTTP-Error: " + response.status);
		throw error(500, "something went wrong")
	}
}
