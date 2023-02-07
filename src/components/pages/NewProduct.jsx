import React from "react";
import styled from "styled-components";
import InputForm from "../atoms/InputForm";

export default function NewProduct() {
  return (
    <Container>
      <StyledTitle>새로운 제품 등록</StyledTitle>
      <>
        <InputForm type="text" name="productName" text="제품명" />
      </>
    </Container>
  );
}
const Container = styled.div`
  padding: 30px;
  width: 100vw;
`;
const StyledTitle = styled.h3`
  text-align: center;
  color: var(--lavender-dark-color);
`;
