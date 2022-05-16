import React from "react";
import Person from "./Person";

export default function Persons({
  persons,
  setPersons,
  setErrorMessage,
  setSuccessMessage,
}) {
  // sort persons by name
  function sortByName(a, b) {
    const nameA = a.props.name.toUpperCase();
    const nameB = b.props.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }

  return (
    <div>
      {persons
        .map(({ name, number, id }) => (
          <Person
            setErrorMessage={setErrorMessage}
            setSuccessMessage={setSuccessMessage}
            setPersons={setPersons}
            persons={persons}
            name={name}
            id={id}
            number={number}
            key={id}
          />
        ))
        .sort(sortByName)}
    </div>
  );
}
