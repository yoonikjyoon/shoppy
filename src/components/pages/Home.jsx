import React from "react";
import styled from "styled-components";
import HomeBanner from "../molecules/HomeBanner";
import Products from "../organisms/Products";

export default function Home() {
  return (
    <Container>
      <HomeBanner />
      <ProductContainer>
        <Products />
      </ProductContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`;
const ProductContainer = styled.div`
  padding: 0 30px;
  margin-top: -3.5rem;
`;
