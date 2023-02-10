import React from "react";
import styled from "styled-components";

export default function ProductCard({
  product: { id, image, title, category, price },
}) {
  return (
    <>
      <Container>
        <ProductImage src={image} alt={title} />
        <>
          <h3>{title}</h3>
          <p>{`₩${price}`}</p>
        </>
      </Container>
    </>
  );
}
const Container = styled.li`
  width: 200px;
  height: 300px;
  border: 1px solid var(--grey-light-color);
  border-radius: 8px;
  -webkit-box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 4px 4px 7px 0px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
  }
  margin: 5px;
  background-color: var(--white-color);
`;
const ProductImage = styled.img`
  width: 100%;
`;
