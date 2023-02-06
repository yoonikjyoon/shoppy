import React from "react";
import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
import LoginButton from "../atoms/LoginButton";
import { Link } from "react-router-dom";

export default function HeaderElements() {
  return (
    <Container>
      <Link to={"/products"}>Products</Link>
      <Link to={"/cart"}>
        <HiShoppingCart
          color="#bdb0ee"
          size="1.5em"
          style={{ cursor: "pointer", marginTop: 5 }}
        />
      </Link>
      <LoginButton />
    </Container>
  );
}
const Container = styled.div`
  width: 195px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
