import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiPencil, HiShoppingCart } from "react-icons/hi";
import LoginButton from "../atoms/LoginButton";
import { Link } from "react-router-dom";
import { login, logout, onUserStateChange } from "../../api/firebase";

export default function HeaderElements() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <Container>
      <Link to={"/products"}>Products</Link>
      <Link to={"/cart"}>
        <HiShoppingCart
          color="#bdb0ee"
          size="1.5em"
          style={{ cursor: "pointer", marginTop: 3 }}
          title="go to cart page"
        />
      </Link>
      <Link to={"/products/new"}>
        <HiPencil
          color="#bdb0ee"
          size="1.5em"
          style={{ cursor: "pointer", marginTop: 3 }}
          title="add new product"
        />
      </Link>
      <LoginButton user={user} handleLogin={login} handleLogout={logout} />
    </Container>
  );
}
const Container = styled.div`
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
