import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/firebase";
import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Container>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Container>
    </>
  );
}
const Container = styled.ul`
  display: grid;
  grid-gap: 20px;
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
