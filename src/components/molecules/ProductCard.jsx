import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductCard({
  product: { id, image, title, category, price, description, options },
}) {
  const navigate = useNavigate();
  return (
    <>
      <Container
        onClick={() =>
          navigate(`/products/${id}`, {
            state: {
              product: {
                id,
                image,
                title,
                category,
                price,
                description,
                options,
              },
            },
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
  border: 1px solid var(--grey-light-color);
  border-radius: 8px;
  -webkit-box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
  background-color: var(--white-color);
`;
const ProductCategory = styled.p`
  padding-left: 10px;
  color: var(--lavender-dark-color);
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
