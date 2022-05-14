import React from "react";
import Person from "./Person";

export default function Persons({ persons }) {
  // sort persons by name
  function sortByName(a, b) {
    const nameA = a.props.name.toUpperCase();
    const nameB = b.props.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }

  return (
    <div>
      {persons
        .map(({ name, number }, index) => (
          <Person name={name} number={number} key={index} />
        ))
        .sort(sortByName)}
    </div>
  );
}
