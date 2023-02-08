import React from "react";
import styled from "styled-components";
import AnimatedInputForm from "../atoms/AnimatedInputForm";
import Button from "../atoms/Button";

export default function NewProduct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // var name = document.getElementById("name");
    // console.log(name.value);
  };
  return (
    <Container>
      <StyledTitle>새로운 제품 등록</StyledTitle>
      <form onSubmit={handleSubmit}>
        <AnimatedInputForm type="text" name="name" text="제품명" />
        <AnimatedInputForm type="number" name="price" text="가격" />
        <AnimatedInputForm type="text" name="category" text="카테고리" />
        <AnimatedInputForm type="text" name="description" text="제품 설명" />
        <AnimatedInputForm
          type="text"
          name="options"
          text="옵션들 [콤마(,)로 구분]"
        />
        <Button text="제품 등록하기" type="submit" />
      </form>
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
