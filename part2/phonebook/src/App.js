import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/personService";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [search, setSearch] = useState([]);

	useEffect(() => {
		personService
			.getAll()
			.then((res) => setPersons(res.data))
			.catch((rej) => alert(rej));
	}, []);

	const deletePerson = (id) => {
		const selectedPerson = persons.find((person) => person.id === id);
		if (window.confirm(`Are you sure want to delete ${selectedPerson.name}`)) {
			personService
				.deletePerson(id)
				.then(() => {
					setPersons(persons.filter((person) => person.id !== id));
				})
				.catch((error) => alert(error));
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter search={search} setSearch={setSearch} persons={persons} />

			<h2>add a new</h2>
			<PersonForm persons={persons} setPersons={setPersons} />

			<h2>Numbers</h2>
			<Persons persons={persons} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
