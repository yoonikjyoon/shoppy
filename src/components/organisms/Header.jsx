import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import HeaderElements from "../molecules/HeaderElements";

export default function Header() {
  return (
    <HeaderWrap>
      <Link to={"/"}>
        <Logo />
      </Link>
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
  border-bottom: 1px solid var(--color-lavender-very-light);
`;
