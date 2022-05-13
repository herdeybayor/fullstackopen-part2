import React from "react";

export default function Total({ parts }) {
  const total = parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    0
  );
  return (
    <p>
      <strong>total of {total} courses</strong>
    </p>
  );
}
