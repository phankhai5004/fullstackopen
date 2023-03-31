import { useState } from "react";

const Filter = ({ search, setSearch, persons }) => {
	const [newSearch, setNewSearch] = useState("");

	const handleSearch = (event) => {
		event.preventDefault();

		const result = persons.filter((person) => person.name === newSearch);
		setSearch(result);
		setNewSearch("");
	};

	const handleNewSearch = (event) => {
		setNewSearch(event.target.value);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<div>
					filter shown with{" "}
					<input value={newSearch} onChange={handleNewSearch}></input>
				</div>
			</form>
			{search.map((person) => (
				<p key={person.id}>
					{person.name} {person.number}
				</p>
			))}
		</div>
	);
};

export default Filter;
