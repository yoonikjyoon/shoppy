import React from "react";
import styled from "styled-components";
import { Desktop } from "../../hooks/useResponsive";
import StyledPadding from "./StyledPadding";
import User from "./User";

export default function LoginButton({ user, handleLogin, handleLogout }) {
  return (
    <>
      {user ? (
        <Container onClick={handleLogout}>
          <Desktop>
            <User user={user} />
            <StyledPadding width={5} />
          </Desktop>
          <span>Logout</span>
        </Container>
      ) : (
        <Container onClick={handleLogin}>Login</Container>
      )}
    </>
  );
}
const Container = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  cursor: pointer;
  color: var(--color-lavender-dark);
`;
