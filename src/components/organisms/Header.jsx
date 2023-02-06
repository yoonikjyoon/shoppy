import React from "react";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import HeaderElements from "../molecules/HeaderElements";

export default function Header() {
  return (
    <HeaderWrap>
      <Logo />
      <HeaderElements />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100vw;
  height: 100px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
