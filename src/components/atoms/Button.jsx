import React from "react";
import styled from "styled-components";

export default function Button({
  text,
  onClick,
  type = "button",
  width,
  height = 35,
  backgroundColor,
  disabled = false,
}) {
  return (
    <Container
      type={type}
      onClick={onClick}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {text}
    </Container>
  );
}
const Container = styled.button`
  width: ${(props) => (props.width ? `${props.width}%` : "")};
  height: ${(props) => props.height && `${props.height}px`};
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : `var(--lavender-color)`};
  color: var(--white-color);
  &:hover {
    filter: brightness(1.1);
  }
`;
