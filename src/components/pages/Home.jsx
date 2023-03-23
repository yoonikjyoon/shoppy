import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useProducts from "../../hooks/useProducts";
import HomeBanner from "../molecules/HomeBanner";
import Products from "../organisms/Products";

export default function Home() {
  const [lastKey, setLastKey] = useState(null);
  const [itemList, setItemList] = useState([]);
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts("", lastKey);

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
    <Container>
      <HomeBanner />
      <ProductContainer>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {products && (
          <Products
            itemList={itemList}
            hasNextPage={products.hasNextPage}
            handleLoadMore={handleLoadMore}
          />
        )}
      </ProductContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  margin-top: 3.5rem;
`;
const ProductContainer = styled.div`
  padding: 0 30px;
  margin-top: -3.5rem;
`;
