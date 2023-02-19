import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrap>
      <Container>Footer</Container>
    </FooterWrap>
  );
}
const FooterWrap = styled.footer`
  width: 100vw;
  padding: 30px 0px;
  border-top: 1px solid var(--color-lavender-very-light);
`;
const Container = styled.div`
  padding: 0px 30px;
  display: flex;
  align-items: center;
`;
