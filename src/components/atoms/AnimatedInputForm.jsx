import React, { useState } from "react";
import styled from "styled-components";
/**
 * @param type - Type of the form control
 * @param name - Name of the form control
 * @param text - Text for the form control label
 * @param required - Boolean. A value is required or must be check for the form to be submittable
 * @param
 */
export default function AnimatedInputForm({
  type,
  name,
  text,
  required = true,
}) {
  const [isFocus, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <InputLabel htmlFor={name}>
      <InputSpan active={isFocus || inputValue}>{text}</InputSpan>
      <Input
        type={type}
        id={name}
        name={name}
        required={required}
        value={inputValue}
        onChange={handleOnChange}
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
  line-height: var(--font-smaol);
  color: var(--lavender-very-dark-color);
  position: absolute;
  left: 10px;
  top: ${(props) => (props.active ? "-10px" : "50%")};
  transform: translateY(-50%);
  transition: all 0.25s ease;
  pointer-events: none;
`;
const Input = styled.input`
  border: 1px solid var(--lavender-color);
  border-radius: 5px;
  width: 100%;
  height: 35px;
  padding: 3px 10px;
  font-size: var(--font-base);
  &:focus {
    border: 1px solid var(--lavender-color);
    border-radius: 5px;
  }
`;
