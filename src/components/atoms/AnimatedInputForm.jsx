import React, { useState } from "react";
import styled from "styled-components";
/**
 * @param type - Type of the form control
 * @param name - Name of the form control
 * @param text - Text for the form control label
 * @param value - The initial value of the control
 * @param required - Boolean. A value is required or must be check for the form to be submittable
 * @param
 */
export default function AnimatedInputForm({
  type,
  name,
  text,
  value,
  required = true,
  handleChange,
}) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <InputLabel htmlFor={name}>
      <InputSpan active={isFocus || value}>{text}</InputSpan>
      <Input
        type={type}
        id={name}
        name={name}
        required={required}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </InputLabel>
  );
}
const InputLabel = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;
const InputSpan = styled.span`
  font-size: var(--font-small);
  line-height: var(--font-small);
  color: ${(props) =>
    props.active
      ? `var(--color-lavender-very-dark)`
      : `var(--color-gray-dark)`};
  position: absolute;
  left: ${(props) => (props.active ? "5px" : "10px")};
  top: ${(props) => (props.active ? "-10px" : "50%")};
  transform: translateY(-50%);
  transition: all 0.25s ease;
  pointer-events: none;
`;
const Input = styled.input`
  border: 1px solid var(--color-lavender);
  border-radius: 5px;
  width: 100%;
  height: 40px;
  padding: 3px 10px;
  font-size: var(--font-base);
  &:focus {
    border: 1px solid var(--color-lavender);
    border-radius: 5px;
  }
`;
