import React from "react";
import styled from "styled-components";
import User from "./User";

export default function LoginButton({ user, handleLogin, handleLogout }) {
  return (
    <>
      {!user ? (
        <Button onClick={handleLogin}>Login</Button>
      ) : (
        <>
          <User user={user} />
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </>
  );
}
const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  background-color: var(--lavender-color);
  color: var(--white-color);
  &:hover {
    filter: brightness(1.1);
  }
`;
