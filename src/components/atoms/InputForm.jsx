import React from "react";

export default function InputForm({ type, name, text, required = true }) {
  return (
    <div>
      <label for={name}>{text}</label>
      <input type={type} id={name} name={name} required={required} />
    </div>
  );
}
