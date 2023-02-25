import React from "react";
import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

export default function Products() {
  const { type } = useParams();
  const category = type && type.charAt(0).toUpperCase() + type.slice(1);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts(category);
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
