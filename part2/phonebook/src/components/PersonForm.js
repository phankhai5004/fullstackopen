import { useState } from "react";
import personService from "../services/personService";

const PersonForm = ({ persons, setPersons }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const replaceNumber = (id) => {
		const selectedPerson = persons.find((person) => person.id === id);

		if (selectedPerson) {
			if (
				window.confirm(
					`${selectedPerson.name} is already added to phonebook, replace the old number with a new one`
				)
			) {
				const changedObject = { ...selectedPerson, number: newNumber };
				personService
					.updatePerson(selectedPerson.id, changedObject)
					.then((res) => {
						setPersons(
							persons.map((person) =>
								person.id !== selectedPerson.id ? person : res.data
							)
						);
						setNewName("");
						setNewNumber("");
					})
					.catch((error) => alert(error));
			}
		}
	};

	const addNewPerson = (event) => {
		event.preventDefault();

		const alreadyAddedName = persons.some((person) => person.name === newName);
		const selectedPerson = persons.find((person) => person.name === newName);

		if (alreadyAddedName === true) {
			replaceNumber(selectedPerson.id);
		} else if (alreadyAddedName === false) {
			const personObject = {
				name: newName,
				number: newNumber,
				id: persons.length + 1,
			};

			personService
				.create(personObject)
				.then((res) => {
					setPersons(persons.concat(res.data));
					setNewName("");
					setNewNumber("");
				})
				.catch((rej) => alert(rej));
		}
	};

	const handleNameChange = (event) => {
		setNewName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<form onSubmit={addNewPerson}>
				<div>
					name: <input value={newName} onChange={handleNameChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</div>
	);
};

export default PersonForm;
