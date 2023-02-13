import React from "react";
import styled from "styled-components";
import { HiPencil, HiShoppingCart } from "react-icons/hi";
import LoginButton from "../atoms/LoginButton";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";

export default function HeaderElements() {
  const { user, login, logout } = useAuthContext();
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <Container>
      <Link to={"/products"}>Products</Link>
      {user && (
        <Link to={"/cart"}>
          <CartWrap>
            {products && products.length > 0 && (
              <CartBadge>{products.length}</CartBadge>
            )}
            <HiShoppingCart
              color="#bdb0ee"
              size="1.5em"
              style={{ cursor: "pointer", marginTop: 3 }}
              title="go to cart page"
            />
          </CartWrap>
        </Link>
      )}
      {user && user.isAdmin && (
        <Link to={"/products/new"}>
          <HiPencil
            color="#bdb0ee"
            size="1.5em"
            style={{ cursor: "pointer", marginTop: 3 }}
            title="add new product"
          />
        </Link>
      )}
      <LoginButton user={user} handleLogin={login} handleLogout={logout} />
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  align-items: center;
`;
const CartWrap = styled.div`
  position: relative;
`;
const CartBadge = styled.div`
  position: absolute;
  border-radius: 9999px;
  background-color: var(--lavender-light-color);
  color: var(--white-color);
  font-size: var(--font-micro);
  font-weight: bold;
  top: -1px;
  right: -2px;
  width: 15px;
  height: 15px;
  line-height: 16px;
  text-align: center;
`;
