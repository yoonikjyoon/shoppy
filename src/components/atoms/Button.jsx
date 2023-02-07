import React from "react";
import styled from "styled-components";

export default function Button({ text, onClick }) {
  return <Container onClick={onClick}>{text}</Container>;
}
const Container = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--lavender-color);
  color: var(--white-color);
  &:hover {
    filter: brightness(1.1);
  }
`;
