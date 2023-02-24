import React from "react";
import styled from "styled-components";
import Products from "../organisms/Products";

export default function AllProducts() {
  return (
    <Container>
      <Products />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px;
`;
