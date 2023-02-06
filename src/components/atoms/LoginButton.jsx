import React from "react";
import styled from "styled-components";

export default function LoginButton() {
  return <Container onClick={() => console.log("Login!")}>Login</Container>;
}
const Container = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--lavender-color);
  color: var(--white-color);
`;
