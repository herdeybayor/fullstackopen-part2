import React from "react";
import personService from "../services/persons";

export default function Person({
  name,
  number,
  id,
  persons,
  setPersons,
  setErrorMessage,
  setSuccessMessage,
}) {
  const handleDelete = (e) => {
    e.preventDefault();
    const confirmation = window.confirm(`Delete ${name}?`);
    if (confirmation) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setSuccessMessage(`${name} deleted`);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(
            `Information of ${name} has already been removed from server`
          );
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  return (
    <>
      <p>
        {name} {number} <button onClick={(e) => handleDelete(e)}>delete</button>
      </p>
    </>
  );
}
