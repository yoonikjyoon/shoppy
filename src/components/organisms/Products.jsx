import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/firebase";
import ProductCard from "../molecules/ProductCard";

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
      <div>Products</div>
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
