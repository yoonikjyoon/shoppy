import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Mobile, Desktop } from "../../hooks/useResponsive";
import { TbMenu } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";
import StyledLine from "../atoms/StyledLine";
import StyledPadding from "../atoms/StyledPadding";

export default function NavbarLeft() {
  const navigate = useNavigate();
  const { user, login, logout } = useAuthContext();
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((prev) => !prev);
  };
  const handleNavigate = (path) => {
    navigate(`/${path}`);
    setIsShow(false);
  };
  return (
    <Container>
      <Mobile>
        <button onClick={handleClick}>
          <TbMenu color="rgb(185, 185, 233)" size="1.2rem" />
        </button>
        {/* {isShow && ( */}
        <Menu>
          <MenuListRow>
            <MenuItem onClick={() => handleNavigate("products")}>
              Shop All
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("products")}>
              Women
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("products")}>Men</MenuItem>
            <MenuItem onClick={() => handleNavigate("products")}>
              Shoes
            </MenuItem>
            <MenuItem onClick={() => handleNavigate("products")}>
              Accessories
            </MenuItem>
            {user && user.isAdmin && (
              <>
                <StyledPadding height={10} />
                <StyledLine />
                <MenuItem onClick={() => handleNavigate("products/new")}>
                  Admin Page
                </MenuItem>
              </>
            )}
          </MenuListRow>
        </Menu>
        {/* )} */}
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
const Container = styled.div``;
const Menu = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-white);
  padding: 30px;
  border-top: 0.5px solid var(--color-lavender-very-light);
`;
const MenuListRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  color: var(--color-lavender-dark);
`;
const MenuItem = styled.div`
  padding: 10px 0px;
`;
const MenuListColumn = styled.div`
  display: grid;
  grid-auto-flow: column;
  color: var(--color-lavender-dark);
`;
