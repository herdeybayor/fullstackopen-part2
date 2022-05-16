import React from "react";
import personService from "../services/persons";

export default function PersonForm({
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setPersons,
  onNameChange,
  onNumberChange,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    const find = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    if (!newName) {
      alert("Enter a name");
      return;
    }
    if (!newNumber) {
      alert("Enter a number");
      return;
    }
    if (find) {
      const confirmation = window.confirm(
        `${find.name} is already added to phonebook, replace the old number with a new one?`
      );
      if (confirmation) {
        const changedPerson = { ...find, number: newNumber };
        personService.update(find.id, changedPerson).then((updatedPerson) => {
          setPersons(
            persons
              .filter((person) => person.id !== find.id)
              .concat(updatedPerson)
          );
          setNewName("");
          setNewNumber("");
        });
      } else {
        setNewName("");
        setNewNumber("");
        return;
      }
      return;
    }
    const newPerson = { name: newName, number: newNumber };

    personService
      .create(newPerson)
      .then((newPerson) => setPersons([...persons, newPerson]));

    setNewName("");
    setNewNumber("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={onNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={onNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
