import React, { useState } from "react";
import styled from "styled-components";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { FcFullTrash } from "react-icons/fc";
import { formatNumber } from "../../utils/number";
import { addOrUpdateToCart, removeFromCart } from "../../api/firebase";

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeFromCart(uid, id);
  return (
    <Container key={id}>
      <StyledImage>
        <img src={image} alt={title} />
      </StyledImage>
      <ItemDetail>
        <ItemInfo>
          <ItemText>{title}</ItemText>
          <ItemText>
            <b>{option}</b>
          </ItemText>
          <ItemText>₩ {formatNumber(price)}</ItemText>
        </ItemInfo>
        <ItemQuantity>
          <IconButton onClick={handleMinus}>
            <CiSquareMinus />
          </IconButton>
          <span>{quantity}</span>
          <IconButton onClick={handlePlus}>
            <CiSquarePlus />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <FcFullTrash />
          </IconButton>
        </ItemQuantity>
      </ItemDetail>
    </Container>
  );
}
const Container = styled.li`
  width: 100%;
  height: 150px;
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 1fr 4fr;
  border-bottom: 1px solid var(--lavender-very-light-color);
`;
const StyledImage = styled.div`
  margin: auto;
  & > img {
    width: 100px;
    height: 130px;
    object-fit: cover;
  }
`;
const ItemDetail = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ItemInfo = styled.div`
  display: grid;
  grid-gap: 5px;
`;
const ItemText = styled.p`
  color: var(--lavender-dark-color);
  & > b {
    color: var(--logo-color);
  }
`;
const ItemQuantity = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  text-align: center;
  align-items: center;
`;
const IconButton = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  background-color: inherit;
  & > svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;
