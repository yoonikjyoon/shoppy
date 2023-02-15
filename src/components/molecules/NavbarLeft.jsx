import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Mobile, Desktop } from "../../hooks/useResponsive";
import { TbMenu } from "react-icons/tb";

export default function NavbarLeft() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <Container>
      <Mobile>
        <button onClick={handleClick}>
          <TbMenu color="rgb(185, 185, 233)" size="1.2rem" />
        </button>
        {isShow && (
          <Menu>
            <MenuListRow>
              <Link to={"/products"}>Women</Link>
              <Link to={"/products"}>Men</Link>
              <Link to={"/products"}>Shoes</Link>
              <Link to={"/products"}>Accessories</Link>
            </MenuListRow>
          </Menu>
        )}
      </Mobile>
      <Desktop>
        <MenuListColumn>
          <Link to={"/products"}>Women</Link>
          <Link to={"/products"}>Men</Link>
          <Link to={"/products"}>Shoes</Link>
          <Link to={"/products"}>Accessories</Link>
        </MenuListColumn>
      </Desktop>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
`;
const Menu = styled.div`
  position: absolute;
  top: 2.5rem;
  left: -30px;
  width: 100vw;
  height: 100vh;
  border: 1px solid red;
  background-color: var(--color-white);
  padding: 10px;
`;
const MenuListRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  color: var(--color-lavender-dark);
`;
const MenuListColumn = styled.div`
  display: grid;
  grid-auto-flow: column;
  color: var(--color-lavender-dark);
`;
