import React from "react";
import styled from "styled-components";
import CartItem from "../molecules/CartItem";
import { useAuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../api/firebase";
import PriceCard from "../molecules/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";
import Button from "../atoms/Button";
import StyledPadding from "../atoms/StyledPadding";

export default function MyCart() {
  const SHIPPING = 3000;
  const { uid } = useAuthContext();
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["carts"], () => getCart(uid));

  if (isLoading) return <p>Loading...</p>;
  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0
    );
  return (
    <Container>
      <div>MyCart</div>
      {hasProducts ? (
        <>
          <ul>
            {products.map((product) => (
              <CartItem key={product.id} product={product} uid={uid} />
            ))}
          </ul>
          <PriceContainer>
            <PriceCard text="상품 총액" price={totalPrice} />
            <BsFillPlusCircleFill />
            <PriceCard text="배송료" price={SHIPPING} />
            <FaEquals />
            <PriceCard text="총가격" price={totalPrice + SHIPPING} />
          </PriceContainer>
          <StyledPadding height={20} />
          <Button
            width={100}
            text="주문하기"
            onClick={() => console.log("주문하기")}
          />
        </>
      ) : (
        <p>장바구니에 상품이 없습니다.</p>
      )}
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  padding: 30px;
`;
const PriceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  & > svg {
    fill: var(--logo-color);
    flex-shrink: 0;
  }
`;
