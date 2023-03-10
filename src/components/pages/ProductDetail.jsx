import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import StyledLine from "../atoms/StyledLine";
import StyledPadding from "../atoms/StyledPadding";
import { formatNumber } from "../../utils/number";
import Button from "../atoms/Button";
import useCart from "../../hooks/useCart";

export default function ProductDetail() {
  const { addOrUpdateItem } = useCart();
  const {
    state: {
      product: { id, image, title, category, price, description, options },
    },
  } = useLocation();
  const [success, setSuccess] = useState();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = () => {
    const product = { id, image, title, price, option: selected, quantity: 1 };
    addOrUpdateItem.mutate(product, {
      onSuccess: () => {
        setSuccess("장바구니에 추가되었습니다.");
        setTimeout(() => setSuccess(null), 3000);
      },
    });
  };
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
          <p>{`$ ${formatNumber(price)}`}</p>
          <StyledLine />
          <StyledPadding height={5} />
          <ProductDescription>{description}</ProductDescription>
          <OptionContainer>
            <label htmlFor="select">옵션 :</label>
            <StyledSelect id="select" onChange={handleSelect} value={selected}>
              {options &&
                options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </StyledSelect>
          </OptionContainer>
          {success && <p>{success}</p>}
          <Button text="장바구니에 추가" width="100" onClick={handleClick} />
        </ProductDetailContainer>
      </ProductContaienr>
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  min-width: 360px;
  padding: 30px;
  margin-top: 3.5rem;
`;
const CategoryText = styled.p`
  color: var(--color-gray-dark);
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
  color: var(--color-gray-dark);
`;
const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 35px;
  line-height: 35px;
  margin: 15px 0px;
  & > label {
    font-weight: bold;
    color: var(--color-lavender);
  }
`;
const StyledSelect = styled.select`
  border: 1px dotted var(--color-gray-dark);
  border-radius: 5px;
  padding: 0px 3px;
  height: inherit;
  &:focus {
    outline: none;
  }
`;
