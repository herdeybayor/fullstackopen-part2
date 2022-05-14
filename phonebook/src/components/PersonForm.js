import React from "react";

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
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons((prevValue) => {
      return [...prevValue, { name: newName, number: newNumber }];
    });
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
