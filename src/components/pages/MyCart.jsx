import React from "react";
import styled from "styled-components";
import CartItem from "../molecules/CartItem";

export default function MyCart() {
  return (
    <Container>
      <div>MyCart</div>
      <CartItem />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  padding: 30px;
`;
