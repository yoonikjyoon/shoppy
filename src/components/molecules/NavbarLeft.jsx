import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Mobile, Desktop } from "../../hooks/useResponsive";
import { TbMenu } from "react-icons/tb";
import { useAuthContext } from "../../context/AuthContext";
import StyledLine from "../atoms/StyledLine";
import StyledPadding from "../atoms/StyledPadding";
import useBodyScroll from "../../hooks/useBodyScroll";

export default function NavbarLeft() {
  const navigate = useNavigate();
  const { lockScroll, openScroll } = useBodyScroll();
  const { user } = useAuthContext();
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow((prev) => !prev);
    if (isShow) {
      openScroll();
    } else {
      lockScroll();
    }
  };
  const handleNavigate = (path) => {
    navigate(`/${path}`);
    setIsShow(false);
    openScroll();
  };
  useEffect(() => {
    if (isShow) {
      return;
    }
  }, [isShow]);
  return (
    <Container>
      <Mobile>
        <button onClick={handleClick}>
          <TbMenu color="rgb(185, 185, 233)" size="1.2rem" />
        </button>
        {isShow && (
          <Menu>
            <MenuListRow>
              <MenuItem onClick={() => handleNavigate("products")}>
                Shop All
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("products/category/women")}
              >
                Women
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("products/category/men")}>
                Men
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("products/category/shoes")}
              >
                Shoes
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigate("products/category/accessories")}
              >
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
        )}
      </Mobile>
      <Desktop>
        <MenuListColumn>
          <MenuItem onClick={() => handleNavigate("products/category/women")}>
            Women
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("products/category/men")}>
            Men
          </MenuItem>
          <MenuItem onClick={() => handleNavigate("products/category/shoes")}>
            Shoes
          </MenuItem>
          <MenuItem
            onClick={() => handleNavigate("products/category/accessories")}
          >
            Accessories
          </MenuItem>
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
  padding: 5px 0px;
  margin: 5px 0px;
  cursor: pointer;
`;
const MenuListColumn = styled.div`
  display: grid;
  grid-auto-flow: column;
  color: var(--color-lavender-dark);
  grid-gap: 1rem;
`;
