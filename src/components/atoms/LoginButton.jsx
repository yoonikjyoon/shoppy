import React from "react";
import Button from "./Button";
import User from "./User";

export default function LoginButton({ user, handleLogin, handleLogout }) {
  return (
    <>
      {!user ? (
        <Button onClick={handleLogin} text="Login" />
      ) : (
        <>
          <User user={user} />
          <Button onClick={handleLogout} text="Logout" />
        </>
      )}
    </>
  );
}
