import React from "react";
import styled from "styled-components";

export default function Footer() {
  return <FooterWrap>Footer</FooterWrap>;
}
const FooterWrap = styled.footer`
  width: 100vw;
  height: 50px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  border: 1px solid var(--lavender-very-light-color);
`;
