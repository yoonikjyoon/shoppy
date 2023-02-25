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
        <ImageWrap>
          <ProductImage src={image} alt={title} />
        </ImageWrap>
        <DetailWrap>
          <ProductCategory>{category}</ProductCategory>
          <ProductDetail>
            <h3>{title}</h3>
            <p>{`$${price}`}</p>
          </ProductDetail>
        </DetailWrap>
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
const ImageWrap = styled.div`
  width: 100%;
  height: 350px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const DetailWrap = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px;
`;
const ProductCategory = styled.p`
  color: var(--color-lavender-dark);
  font-size: var(--font-small);
`;
const ProductDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;
