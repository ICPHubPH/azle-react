import type React from "react";
import { useState } from "react";

function App() {
	const [greeting, setGreeting] = useState("");

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const target = event.target as HTMLFormElement;
		const name = (target.elements.namedItem('name') as HTMLInputElement).value;
		
		fetch(`${import.meta.env.VITE_CANISTER_URL}/greet?name=${name}`)
			.then((response) => response.json())
			.then((json) => {
				setGreeting(json.greeting);
			});
	}

	return (
		<main>
			<img src="/logo2.svg" alt="DFINITY logo" />
			<br />
			<div>
				<p> hello world</p>
			</div>
			<form action="#" onSubmit={handleSubmit}>
				<label htmlFor="name">Enter your name: &nbsp;</label>
				<input id="name" alt="Name" type="text" />
				<button type="submit">Hey hey!</button>
			</form>
			<section id="greeting">{greeting}</section>
		</main>
	);
}

export default App;
