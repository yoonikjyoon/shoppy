import React from "react";
import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";
import Button from "../atoms/Button";

export default function Products({ itemList, hasNextPage, handleLoadMore }) {
  return (
    <>
      <Container>
        {itemList.length > 0 &&
          itemList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
      {hasNextPage && (
        <ButtonWrap>
          <Button text="LOAD MORE" onClick={handleLoadMore} />
        </ButtonWrap>
      )}
    </>
  );
}
const Container = styled.ul`
  display: grid;
  grid-gap: 20px;
  margin-top: 3.5rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
`;
const ButtonWrap = styled.div`
  margin-top: 40px;
  text-align: center;
`;
