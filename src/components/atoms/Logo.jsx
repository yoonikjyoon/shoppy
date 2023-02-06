import React from "react";
import styled from "styled-components";
import { HiShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <LogoWrap>
        <HiShoppingBag
          color="#9794f9"
          size="2rem"
          style={{ marginRight: "5px" }}
        />
        Shoppy
      </LogoWrap>
    </Link>
  );
}
const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: var(--font-x-large);
  color: var(--lavender-very-dark-color);
`;
