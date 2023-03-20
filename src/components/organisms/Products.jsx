import React, { useEffect, useState } from "react";
import ProductCard from "../molecules/ProductCard";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import Button from "../atoms/Button";

export default function Products() {
  const { type } = useParams();
  const category = type && type.charAt(0).toUpperCase() + type.slice(1);
  const [lastKey, setLastKey] = useState(null);
  const [itemList, setItemList] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const {
    productsQuery: { isLoading, error, data: allProducts },
  } = useProducts(lastKey);
  // const {
  //   productCategoryQuery: { isLoading, error, data: categoryProducts },
  // } = useProducts(category);

  // useEffect(() => {
  //   console.log(categoryProducts, category);
  // }, [categoryProducts, category]);
  useEffect(() => {
    if (allProducts) {
      console.log(allProducts.length, isLoading, allProducts);
      setHasMore(true);
      setItemList([...itemList, ...Object.values(allProducts)]);
    } else {
      console.log("end", isLoading);
      console.log("end");
      setHasMore(false);
    }
  }, [allProducts]);

  const handleLoadMore = () => {
    setLastKey(allProducts.at(allProducts.length - 1).id);
  };

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Container>
        {itemList.length > 0 &&
          itemList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        {hasMore && (
          <Button text="LOAD MORE" onClick={() => handleLoadMore()} />
        )}
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
