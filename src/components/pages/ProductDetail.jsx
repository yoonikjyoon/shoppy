import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import StyledLine from "../atoms/StyledLine";
import StyledPadding from "../atoms/StyledPadding";
import { formatNumber } from "../../utils/number";
import Button from "../atoms/Button";

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();
  return (
    <Container>
      <CategoryText>&#62; {category}</CategoryText>
      <ProductContaienr>
        <ProductImageContainer>
          <img src={image} alt={title} />
        </ProductImageContainer>
        <ProductDetailContainer>
          <h3>{title}</h3>
          <StyledPadding height={5} />
          <p>{`₩ ${formatNumber(price)}`}</p>
          <StyledLine />
          <StyledPadding height={5} />
          <ProductDescription>{description}</ProductDescription>
          <OptionContainer>
            <span>옵션</span>
            <StyledSelect>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </StyledSelect>
          </OptionContainer>
          <Button text="장바구니에 추가" width="100" />
        </ProductDetailContainer>
      </ProductContaienr>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  padding: 30px;
`;
const CategoryText = styled.p`
  color: var(--grey-dark-color);
`;
const ProductContaienr = styled.div`
  display: grid;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
const ProductImageContainer = styled.div`
  & > img {
    width: 100%;
  }
`;
const ProductDetailContainer = styled.div`
  padding: 15px 20px;
`;
const ProductDescription = styled.p`
  color: var(--grey-dark-color);
`;
const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 35px;
  line-height: 35px;
  margin: 15px 0px;
`;
const StyledSelect = styled.select`
  border: 1px dotted var(--grey-dark-color);
  border-radius: 5px;
  padding: 0px 3px;
  &:focus {
    outline: none;
  }
`;
