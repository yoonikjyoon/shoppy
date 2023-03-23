import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import { useParams, useLocation } from "react-router-dom";
import Products from "../organisms/Products";

export default function AllProducts() {
  const { type } = useParams();
  const location = useLocation();
  const category = type && type.charAt(0).toUpperCase() + type.slice(1);
  const [lastKey, setLastKey] = useState(null);
  const [itemList, setItemList] = useState([]);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts(category, lastKey);

  useEffect(() => {
    setLastKey(null);
    setItemList([]);
  }, [location.pathname, category]);

  useEffect(() => {
    if (products) {
      const items = products.itemList;
      setItemList([...itemList, ...items]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  const handleLoadMore = () => {
    setLastKey(products.lastKey);
  };
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Container>
        {products && (
          <Products
            itemList={itemList}
            hasNextPage={products.hasNextPage}
            handleLoadMore={handleLoadMore}
          />
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 30px;
`;
