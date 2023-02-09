import React from "react";
import styled from "styled-components";

export default function Button({
  text,
  onClick,
  type = "button",
  height = 35,
}) {
  return (
    <Container type={type} onClick={onClick} height={height}>
      {text}
    </Container>
  );
}
const Container = styled.button`
  height: ${(props) => props.height && `${props.height}px`};
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--lavender-color);
  color: var(--white-color);
  &:hover {
    filter: brightness(1.1);
  }
`;
