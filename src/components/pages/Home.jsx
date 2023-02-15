import React from "react";
import styled from "styled-components";
import StyledPadding from "../atoms/StyledPadding";
import HomeBanner from "../molecules/HomeBanner";
import Products from "../organisms/Products";

export default function Home() {
  return (
    <Container>
      <HomeBanner />
      <Products />
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`;
