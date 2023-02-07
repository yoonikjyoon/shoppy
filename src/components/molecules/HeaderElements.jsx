import React from "react";
import styled from "styled-components";
import { HiPencil, HiShoppingCart } from "react-icons/hi";
import LoginButton from "../atoms/LoginButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function HeaderElements() {
  const { user, login, logout } = useAuthContext();
  return (
    <Container>
      <Link to={"/products"}>Products</Link>
      {user && (
        <Link to={"/cart"}>
          <HiShoppingCart
            color="#bdb0ee"
            size="1.5em"
            style={{ cursor: "pointer", marginTop: 3 }}
            title="go to cart page"
          />
        </Link>
      )}
      {user && user.isAdmin && (
        <Link to={"/products/new"}>
          <HiPencil
            color="#bdb0ee"
            size="1.5em"
            style={{ cursor: "pointer", marginTop: 3 }}
            title="add new product"
          />
        </Link>
      )}
      <LoginButton user={user} handleLogin={login} handleLogout={logout} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: center;
`;
