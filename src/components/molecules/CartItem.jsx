import React from "react";
import styled from "styled-components";

export default function CartItem() {
  return (
    <Container>
      <StyledImage />
      <ItemDetail></ItemDetail>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid var(--lavender-very-light-color);
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 4fr;
`;
const StyledImage = styled.img`
  width: 100px;
  height: 130px;
  background-color: var(--lavender-color);
`;
const ItemDetail = styled.div`
  border: 1px solid var(--lavender-color);
`;
