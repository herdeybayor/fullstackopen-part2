import React from "react";

export default function FindCountries({ name, onChange }) {
  return (
    <form>
      find countries: <input type="text" value={name} onChange={onChange} />
    </form>
  );
}
