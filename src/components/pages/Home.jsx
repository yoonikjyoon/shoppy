import React, { useEffect } from "react";
import styled from "styled-components";
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
  width: 100vw;
  padding: 0 30px;
`;
