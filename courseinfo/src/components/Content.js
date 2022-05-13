import React from "react";
import Part from "./Part";
import Total from "./Total";

export default function Content({ parts }) {
  return (
    <div>
      {parts.map(({ id, name, exercises }) => (
        <Part key={id} name={name} exercises={exercises} />
      ))}
      <Total parts={parts} />
    </div>
  );
}
