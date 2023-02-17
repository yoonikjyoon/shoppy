import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard({
  product,
  product: { id, image, title, category, price },
}) {
  const navigate = useNavigate();
  return (
    <>
      <Container
        onClick={() =>
          navigate(`/products/${id}`, {
            state: { product },
          })
        }
      >
        <ProductImage src={image} alt={title} />
        <ProductCategory>{category}</ProductCategory>
        <ProductDetail>
          <h3>{title}</h3>
          <p>{`₩${price}`}</p>
        </ProductDetail>
      </Container>
    </>
  );
}
const Container = styled.li`
  cursor: pointer;
  border: 0.5px solid var(--color-lavender-very-light);
  border-radius: 5px;
  -webkit-box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.05);
  box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
  background-color: var(--color-white);
`;
const ProductCategory = styled.p`
  padding-left: 10px;
  color: var(--color-lavender-dark);
  font-size: var(--font-small);
`;
const ProductImage = styled.img`
  width: 100%;
`;
const ProductDetail = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
