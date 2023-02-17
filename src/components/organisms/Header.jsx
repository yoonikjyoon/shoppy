import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../atoms/Logo";
import NavbarRight from "../molecules/NavbarRight";
import NavbarLeft from "../molecules/NavbarLeft";

export default function Header() {
  return (
    <HeaderWrap>
      <NavbarLeft />
      <Link to={"/"}>
        <Logo />
      </Link>
      <NavbarRight />
    </HeaderWrap>
  );
}

const HeaderWrap = styled.header`
  width: 100vw;
  padding: 0.5rem 1.5rem;
  border-bottom: 0.5px solid var(--color-lavender-very-light);
  position: fixed;
  top: 0px;
  z-index: var(--z-layer-7);
  background-color: var(--color-white);
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1.2fr 2fr 0.8fr;
  align-items: center;
`;
