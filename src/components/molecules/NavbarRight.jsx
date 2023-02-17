import React from "react";
import styled from "styled-components";
import { Mobile, Desktop } from "../../hooks/useResponsive";
import LoginButton from "../atoms/LoginButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";
import { BsHandbag } from "react-icons/bs";

export default function NavbarRight() {
  const { user, login, logout } = useAuthContext();
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <Container>
      <Mobile>
        {user && (
          <Link to={"/cart"}>
            <CartWrap>
              {products && products.length > 0 && (
                <CartBadge>{products.length}</CartBadge>
              )}
              <BsHandbag color="rgb(185, 185, 233)" size="1.2rem" />
            </CartWrap>
          </Link>
        )}
      </Mobile>
      <Desktop>
        {user && (
          <Link to={"/cart"}>Cart{products && `(${products.length})`}</Link>
        )}
        {user && user.isAdmin && <Link to={"/products/new"}>Admin</Link>}
      </Desktop>
      <LoginButton user={user} handleLogin={login} handleLogout={logout} />
    </Container>
  );
}
const Container = styled.div`
  color: var(--color-lavender-dark);
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
  align-items: center;
  justify-content: end;
`;
const CartWrap = styled.div`
  position: relative;
  cursor: pointer;
  margin-top: 5px;
`;
const CartBadge = styled.div`
  position: absolute;
  background-color: var(--color-lavender-light);
  color: var(--color-white);
  font-size: var(--font-micro);
  font-weight: bold;
  text-align: center;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  right: -9px;
  top: -5px;
  border-radius: 50%;
`;
